import { useRouteError } from "react-router";

export default function Error() {
  const err = useRouteError();

  return <div>{error.message}</div>;
}
