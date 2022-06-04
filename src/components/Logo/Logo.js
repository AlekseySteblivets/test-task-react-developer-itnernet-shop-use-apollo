import logo from "../../assets/img/Brand-icon.png";

import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div>
      <a href="/">
        <img
          alt="logo"
          src={logo}
          width="41"
          height="41"
          className={styles.logo}
        />
      </a>
    </div>
  );
}
