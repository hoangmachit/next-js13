import "../../../public/assets/admin/vendor/fonts/boxicons.css";
import "../../../public/assets/admin/vendor/css/core.css";
import "../../../public/assets/admin/vendor/css/theme-default.css";
import "../../../public/assets/admin/css/demo.css";
import "../../../public/assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../../../public/assets/admin/vendor/libs/apex-charts/apex-charts.css";
import "../../../public/assets/admin/vendor/fonts/boxicons.css";
import "../../../public/assets/admin/vendor/fonts/boxicons.css";

import AdminFooter from "@/components/admin/AdminFooter";
import AdminSideBar from "@/components/admin/AdminSidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";
import Script from "next/script";
import { getUserLogin } from "@/lib/admin";
export default async function AdminLayout({ children }) {
  const { user, permissions } = await getUserLogin();
  return (
    <html lang="en">
      <head>
        <Script src="/assets/admin/vendor/js/helpers.js"></Script>
        <Script src="/assets/admin/js/config.js"></Script>
      </head>
      <body>
        <div className="light-style layout-menu-fixed">
          <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
              <AdminSideBar user={user} permissions={permissions} />
              <div className="layout-page">
                <AdminNavbar />
                <div className="content-wrapper">
                  {children}
                  <AdminFooter />
                  <div className="content-backdrop fade"></div>
                </div>
              </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
          </div>
        </div>
        <Script src="/assets/admin/vendor/libs/jquery/jquery.js"></Script>
        <Script src="/assets/admin/vendor/libs/popper/popper.js"></Script>
        <Script src="/assets/admin/vendor/js/bootstrap.js"></Script>
        <Script src="/assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></Script>
        <Script src="/assets/admin/vendor/js/menu.js"></Script>
        <Script src="/assets/admin/vendor/libs/apex-charts/apexcharts.js"></Script>
        <Script src="/assets/admin/js/main.js"></Script>
        <Script src="/assets/admin/js/dashboards-analytics.js"></Script>
        <Script src="/assets/admin/vendor/libs/jquery/jquery.js"></Script>
        <Script src="/assets/admin/vendor/libs/popper/popper.js"></Script>
      </body>
    </html>
  );
}
