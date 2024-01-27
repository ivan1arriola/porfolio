import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="alert alert-warning" role="alert">
      <h1>Oops! {error.status} :(</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i> -{" "}
        <i>{error.error.message}</i>
      </p>
    </div>
  );
}