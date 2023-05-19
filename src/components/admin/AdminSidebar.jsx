import AdminMenu from "./AdminMenu";
import AdminLogo from "./AdminLogo";
export default function AdminSidebar(props) {
  const { user, permissions } = props;
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <AdminLogo />
        <div className="menu-inner-shadow"></div>
        <AdminMenu user={user} permissions={permissions} />
      </aside>
    </>
  );
}
