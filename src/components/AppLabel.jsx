import classNames from "classnames";

export const AppLabel = ({ className, children, ...props }) =>
  <label
    {...props}
    className={classNames("font-semibold", className)}
  >
    { children }
  </label>
