<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Dotenv\Validator as DotenvValidator;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Validator;
use Illuminate\Http\Response;
use Illuminate\Validation\Rule;

class PermissionController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            if (auth()->guest() || !($request->user()->hasRole('Supper') || $request->user()->hasRole('Admin'))) {
                return sendError('403 Forbidden', ['403 Forbidden'], Response::HTTP_FORBIDDEN);
            }
            return $next($request);
        });
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $permissons = Permission::all();
        return sendResponse($permissons, ' Get all list permisson', 200);
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
            'name' => 'required|max:255|unique:permissions'
        ]);
        if ($validator->fails()) {
            return sendError($validator->errors(), 400);
        }
        $data = $validator->validated();
        $data['guard_name'] = 'web';

        $permisson = Permission::create($data);

        if ($permisson) {
            return sendResponse($permisson, "Permisson created", 201);
        }

        return sendError("Failed to create Permisson", 500);
    }

    /**
     * Display the specified resource.
     */
    public function show(Permission $permission)
    {
        return sendResponse($permission, "Permission view", 200);
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
    public function update(Request $request, Permission $permission)
    {
        $validator = Validator::make($request->all(), [
            'name' => [
                'required',
                'max:255',
                Rule::unique('permissions')->ignore($permission->id)
            ]
        ]);
        if ($validator->fails()) {
            return sendError($validator->errors(), 400);
        }
        $permission->name = $request->name;
        $permission->save();
        return sendResponse($permission, "Permission updated", 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();
        return sendResponse([], "Permission deleted", 200);
    }
}
