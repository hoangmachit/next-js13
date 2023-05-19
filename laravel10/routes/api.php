<?php

use App\Http\Controllers\Api\Admin\RoleController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::get('/cross', function (Request $request) {
        return $request->user();
    });
    Route::prefix('admin')->group(function () {
        Route::prefix('user')->group(function () {
            Route::controller(UserController::class)->group(function () {
                Route::get('list', 'list');
                Route::get('{id}', 'detail')->where('id', '[0-9]+');
            });
        });
        Route::prefix('roles')->group(function () {
            Route::controller(RoleController::class)->group(function () {
                Route::get('list', 'list');
                Route::get('{id}', 'detail')->where('id', '[0-9]+');
                Route::post('{id}', 'update')->where('id', '[0-9]+');
            });
        });
    });
});
