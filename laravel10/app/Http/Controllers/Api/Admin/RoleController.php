<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;

class RoleController extends Controller
{

    public function list(Request $request)
    {
        $roles = Role::all();
        return $roles;
    }
    public function detail(Request $request, $id)
    {
        try {
            $user = $request->user();
            $hasPermission = $user->hasPermissionTo('role_detail');
            if (!$hasPermission)
                return response()->json([
                    'status' => false,
                    'code'   => 403,
                ]);
            $role = Role::find($id);
            return response()->json([
                'status' => true,
                'role'   => $role,
                'code'   => 200,
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'code'   => 200,
            ]);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            $user = $request->user();
            $hasPermission = $user->hasPermissionTo('role_update');
            if (!$hasPermission) {
                return response()->json([
                    'status' => false,
                    'code'   => 403,
                    'message' => 'Unauthority'
                ]);
            }
            $role = Role::find($id);
            $name = $request->input('name');
            $role->name = $name;
            $role->save();
            return response()->json([
                'status' => true,
                'role'   => $role,
                'code'   => 200,
                'message' => 'Update success !!!'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'code'   => 200,
                'message' => 'Update fail !!!'
            ]);
        }
    }
}
