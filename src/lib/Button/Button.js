import cn from "classnames";

import styles from "./Button.module.scss";

export default function Button({
  children,
  onClickProps,
  type = "button",
  classNameProps = "",
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClickProps}
        className={cn(styles.button, classNameProps)}
      >
        {children}
      </button>
    </>
  );
}
