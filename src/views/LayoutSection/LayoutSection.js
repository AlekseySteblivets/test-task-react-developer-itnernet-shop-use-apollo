import React from "react";

import cn from "classnames";

import styles from "./LayoutSection.module.scss";

export default function LayoutSection({ children, element = "section", id }) {
  const className = cn(styles.section);

  return React.createElement(element, { className, id }, children);
}
