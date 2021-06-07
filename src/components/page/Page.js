import { Fragment } from "react";

export const Page = ({ children }) => {
  return (
    <Fragment>
      <div>{children}</div>
    </Fragment>
  );
};
