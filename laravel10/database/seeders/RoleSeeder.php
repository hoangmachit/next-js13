<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::create(['name' => 'Supper']);
        Role::create(['name' => 'Admin']);
        Role::create(['name' => 'Writer']);
        Role::create(['name' => 'Editor']);
        Role::create(['name' => 'Viewer']);

        Permission::create(['name' => 'user_list']);
        Permission::create(['name' => 'user_detail']);
        Permission::create(['name' => 'user_update']);
        Permission::create(['name' => 'user_delete']);

        Permission::create(['name' => 'role_list']);
        Permission::create(['name' => 'role_detail']);
        Permission::create(['name' => 'role_update']);
        Permission::create(['name' => 'role_delete']);

        Permission::create(['name' => 'permission_list']);
        Permission::create(['name' => 'permissionrole_detail']);
        Permission::create(['name' => 'permissionrole_update']);
        Permission::create(['name' => 'permissionrole_delete']);

        $role  = Role::whereName('Supper')->first();
        $role->givePermissionTo(Permission::whereName('user_list')->first());
        $role->givePermissionTo(Permission::whereName('user_detail')->first());
        $role->givePermissionTo(Permission::whereName('user_update')->first());
        $role->givePermissionTo(Permission::whereName('user_delete')->first());
        $role->givePermissionTo(Permission::whereName('role_list')->first());
        $role->givePermissionTo(Permission::whereName('role_detail')->first());
        $role->givePermissionTo(Permission::whereName('role_update')->first());
        $role->givePermissionTo(Permission::whereName('role_delete')->first());
        $role->givePermissionTo(Permission::whereName('permission_list')->first());
        $role->givePermissionTo(Permission::whereName('permissionrole_detail')->first());
        $role->givePermissionTo(Permission::whereName('permissionrole_update')->first());
        $role->givePermissionTo(Permission::whereName('permissionrole_delete')->first());
        $user = User::find(1);
        $user->assignRole($role);

        $role1 = Role::whereName('Viewer')->first();
        $role1->givePermissionTo(Permission::whereName('user_detail')->first());
        $role1->givePermissionTo(Permission::whereName('role_detail')->first());
        $role1->givePermissionTo(Permission::whereName('permissionrole_detail')->first());
        $user2 = User::find(2);
        $user2->assignRole($role1);
    }
}
