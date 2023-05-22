<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Models\User;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return sendResponse($users, 'Get all user success !!!');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|max:100|unique:users',
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return sendError($validator->errors(), 400);
        }
        $data = $validator->validated();
        $user = User::create($data);
        if ($user) {
            return sendResponse($user, "User created", 201);
        }

        return sendError("Failed to create user", 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return sendResponse($user, 'Get user');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => [
                'required',
                'max:100',
                Rule::unique('users')->ignore($user->id),
            ],
            'password' => 'required'
        ]);
        if ($validator->fails()) {
            return sendError($validator->errors(), 400);
        }
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        return sendResponse($user, "User updated");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();
        return sendResponse([], "User deleted");
    }
}
