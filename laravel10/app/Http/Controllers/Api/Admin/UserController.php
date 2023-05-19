<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function list(Request $request)
    {
        return User::all();
    }
    public function detail(Request $request, $id)
    {
        return User::find($id);
    }
}
