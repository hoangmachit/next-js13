<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $credentials = $request->only(['user_name', 'password']);
            $remember = $request->boolean('remember');
            if (Auth::attempt($credentials, $remember)) {
                $user = Auth::user();
                $token = $user->createToken('api-token')->plainTextToken;
                return response()->json([
                    'status' => true,
                    'token' => $token,
                    'user' => $user,
                ], 200);
            }
            return response()->json([
                'status' => false,
                'error' => 'Username or pasword valid',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'error' => 'Login fail',
            ], 200);
        }
    }
    public function user(Request $request)
    {
        try {
            $user = $request->user();
            $permissions = $user->getAllPermissions();
            return response()->json([
                'status' => true,
                'user' => $user,
                'permissions' => $permissions,
                'code' => 200
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'error' => 'Login not valid',
            ], 200);
        }
    }
}
