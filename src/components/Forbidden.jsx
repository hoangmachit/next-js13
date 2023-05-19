export default function Forbidden({ text }) {
  return (
    <div class="alert alert-danger" role="alert">
      {text ? text : "403 Forbidden"}
    </div>
  );
}
