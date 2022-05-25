import cn from "classnames";

import styles from "./Button.module.scss";

export default function Button({ children, type = "button", className }) {
  return (
    <>
      <button type={type} className={cn(styles.button, className)}>
        {children}
      </button>
    </>
  );
}
