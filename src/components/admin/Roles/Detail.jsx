"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateRole } from "@/lib/admin/roles";
import Alert from "@/components/Alert";
export default function RolesDetail({ role }) {
  const router = useRouter();
  const [status, setStatus] = useState({});
  const [name, setName] = useState(role.name);
  const submitFormUpdateRole = async (e) => {
    e.preventDefault();
    const result = await updateRole(role.id, name);
    router.refresh();
    setStatus(result);
  };
  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Role infomations</h5>
      </div>
      <div className="card-body">
        {status?.code && <Alert status={status} />}
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
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
