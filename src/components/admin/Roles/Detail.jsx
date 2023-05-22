"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateRole, deleteRole } from "@/lib/admin/roles";
export default function RolesDetail({ role }) {
  const router = useRouter();
  const [name, setName] = useState(role.name);
  const submitFormUpdateRole = async (e) => {
    e.preventDefault();
    const { success } = await updateRole(role.id, name);
    if (success) {
      router.refresh();
    }
  };
  const handleDeleteRole = async (e) => {
    e.preventDefault();
    const { success } = await deleteRole(role.id);
    if (success) {
      router.push("/admin/roles");
    }
  };
  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Role infomations</h5>
      </div>
      <div className="card-body">
        <form
          method="POST"
          role="form"
          onSubmit={(e) => submitFormUpdateRole(e)}
        >
          <div className="mb-3">
            <label className="form-label" htmlFor="basic-default-fullname">
              Role name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="basic-default-company">
              Role guard_name
            </label>
            <input
              type="text"
              className="form-control"
              id="basic-default-company"
              placeholder="ACME Inc."
              readOnly={true}
              defaultValue={role.guard_name}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="basic-default-email">
              Created_at
            </label>
            <div className="input-group input-group-merge">
              <input
                type="text"
                id="created_at"
                className="form-control"
                defaultValue={role.created_at}
                readOnly={true}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="basic-default-email">
              Updated_at
            </label>
            <div className="input-group input-group-merge">
              <input
                type="text"
                id="updated_at"
                className="form-control"
                defaultValue={role.updated_at}
                readOnly={true}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              onClick={(e) => handleDeleteRole(e)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
