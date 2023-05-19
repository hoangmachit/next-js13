export default function Alert({ status }) {
  return (
    <div
      className={`alert ${status.code == 200 ? "alert-success" : "alert-danger"}`}
      role="alert"
    >
      {status.message}
    </div>
  );
}
