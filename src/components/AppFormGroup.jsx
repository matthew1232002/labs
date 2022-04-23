import classNames from "classnames";

export const AppFormGroup = ({ children, className }) =>
  <div className={classNames("flex flex-col items-start gap-1", className)}>
      { children }
  </div>
