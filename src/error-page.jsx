import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  const status = error?.status || '404';
  const message = error?.statusText || error?.message || 'No pudimos encontrar esta página.';

  return (
    <main className="error-page">
      <p className="eyebrow">Error {status}</p>
      <h1>Esta coordenada no lleva a ningún lado.</h1>
      <p>{message}</p>
      <Link className="button button-primary" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}
