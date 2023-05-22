<?php

if (!function_exists('sendResponse')) {
    function sendResponse($result, $message, $code = 200)
    {
        $response = [
            'success' => true,
            'result' => $result,
            'message' => $message,
        ];
        return response()->json($response, $code);
    }
}
if (!function_exists('sendError')) {
    function sendError($error, $errorMessages = [], $code = 404)
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];
        if (!empty($errorMessages)) {
            $response['result'] = $errorMessages;
        }
        return response()->json($response, $code);
    }
}
