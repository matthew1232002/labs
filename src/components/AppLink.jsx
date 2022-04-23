import {Link, useMatch, useResolvedPath} from "react-router-dom";
import classNames from "classnames";

export const AppLink = ({ children, to, className, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const finalClassName = classNames('hover:bg-gray-200 rounded py-2 px-4 font-semibold tracking-wide', className, {
    'bg-blue-100': match,
  })

  return (
    <div>
      <Link
        className={finalClassName}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
