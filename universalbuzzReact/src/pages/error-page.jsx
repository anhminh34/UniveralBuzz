import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let errorMessage = "An unexpected error has occurred.";

  if (error && error.statusText) {
    errorMessage = error.statusText;
  } else if (error && error.message) {
    errorMessage = error.message;
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, {errorMessage}</p>
    </div>
  );
}