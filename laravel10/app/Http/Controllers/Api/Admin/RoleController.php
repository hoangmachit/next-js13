<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Http;
use Spatie\Permission\Models\Role;
use Validator;
use Illuminate\Validation\Rule;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            if (auth()->guest() || !$request->user()->hasPermissionTo('role_list')) {
                return sendError('403 Forbidden', ['403 Forbidden'], Response::HTTP_FORBIDDEN);
            }
            return $next($request);
        })->only('index');
        $this->middleware(function ($request, $next) {
            if (auth()->guest() || !$request->user()->hasPermissionTo('role_create')) {
                return sendError('403 Forbidden', ['403 Forbidden'], Response::HTTP_FORBIDDEN);
            }
            return $next($request);
        })->only('create', 'store');
        $this->middleware(function ($request, $next) {
            if (auth()->guest() || !$request->user()->hasPermissionTo('role_update')) {
                return sendError('403 Forbidden', ['403 Forbidden'], Response::HTTP_FORBIDDEN);
            }
            return $next($request);
        })->only('edit', 'update');
        $this->middleware(function ($request, $next) {
            if (auth()->guest() || !$request->user()->hasPermissionTo('role_delete')) {
                return sendError('403 Forbidden', ['403 Forbidden'], Response::HTTP_FORBIDDEN);
            }
            return $next($request);
        })->only('destroy');
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $roles = Role::all();
        return sendResponse($roles, 'Get all role success !!!');
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
            'name' => 'required|max:255|unique:roles'
        ]);

        if ($validator->fails()) {
            return sendError($validator->errors(), 400);
        }

        $data = $validator->validated();
        $data['guard_name'] = 'web';

        $role = Role::create($data);

        if ($role) {
            return sendResponse($role, "Role created", 201);
        }

        return sendError("Failed to create role", 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(Role $role)
    {
        return sendResponse($role, "Role view", 200);
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
    public function update(Request $request, Role $role)
    {
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'max:255',
                Rule::unique('roles')->ignore($role->id),
            ]
        ]);
        if ($validator->fails()) {
            return sendError($validator->errors(), 400);
        }
        $role->name = $request->name;
        $role->save();
        return sendResponse($role, "Role updated", 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Role $role)
    {
        $role->delete();
        return sendResponse([], "Role deleted", 200);
    }
}
