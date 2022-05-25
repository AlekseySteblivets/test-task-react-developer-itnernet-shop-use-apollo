import React from "react";

import cn from "classnames";

import styles from "./LayoutSection.module.scss";

export default function LayoutSection({ children, element = "section", id }) {
  const className = cn(styles.section);

  return React.createElement(element, { className, id }, children);
}

// export default function LayoutSection({ element = "section", children }) {
//   const Tag = ({ ...props }) =>
//     element === "section" ? (
//       <section {...props}></section>
//     ) : (
//       <header {...props}></header>
//     );

//   return <Tag classNames={styles.section}>{children}</Tag>;
// }
