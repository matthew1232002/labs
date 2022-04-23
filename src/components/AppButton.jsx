import classNames from "classnames";

export const AppButton = ({ className, ...props }) => {
  const CSSClasses = classNames(className, 'bg-blue-400 hover:bg-blue-300 text-white font-semibold tracking-wide px-6 py-2 rounded')
  return (
    <button
      className={CSSClasses}
      {...props}
    >
      { props.children }
    </button>
  )
}

