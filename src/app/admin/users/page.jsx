import Link from "next/link";
export const metadata = {
  title: "Users - Admin",
  description: "Generated by Next.js",
};
import { getListUser } from "@/lib/admin/users";
export default async function AdminUsers() {
  const users = await getListUser();
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <h4 className="fw-bold py-3 mb-4">
            <span className="text-muted fw-light">Admin /</span> Users
          </h4>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <h5 className="card-header">List of User</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {users &&
                        users.map((item) => {
                          return (
                            <tr key={item.id}>
                              <td>
                                <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                                <strong>{item.name}</strong>
                              </td>
                              <td>
                                <span>{item.user_name}</span>
                              </td>
                              <td>
                                <span>{item.email}</span>
                              </td>
                              <td>
                                <span className="badge bg-label-primary me-1">
                                  Active
                                </span>
                              </td>
                              <td>
                                <div className="dropdown">
                                  <button
                                    type="button"
                                    className="btn p-0 dropdown-toggle hide-arrow"
                                    data-bs-toggle="dropdown"
                                  >
                                    <i className="bx bx-dots-vertical-rounded"></i>
                                  </button>
                                  <div className="dropdown-menu">
                                    <Link
                                      className="dropdown-item"
                                      href={`/admin/users/${item.id}`}
                                    >
                                      <i className="bx bx-edit-alt me-1"></i>{" "}
                                      Edit
                                    </Link>
                                    <a className="dropdown-item" href="">
                                      <i className="bx bx-trash me-1"></i>{" "}
                                      Delete
                                    </a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
