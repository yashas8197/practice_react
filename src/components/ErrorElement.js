import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>opps something went wrong</h1>
      <h2>
        {err.status}:{err.statusText}
      </h2>
    </div>
  );
};

export default ErrorElement;
