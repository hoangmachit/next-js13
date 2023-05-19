import Link from "next/link";
export default function RolesTable({ roles }) {
  return (
    <>
      <div className="table-responsive text-nowrap">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-border-bottom-0">
            {roles &&
              roles.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                      <strong>{item.name}</strong>
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
                            href={`/admin/roles/${item.id}`}
                          >
                            <i className="bx bx-edit-alt me-1"></i> Edit
                          </Link>
                          <a className="dropdown-item" href="">
                            <i className="bx bx-trash me-1"></i> Delete
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
    </>
  );
}
