import { Component } from "react";

import thingTemplate from "../../assets/img/thing-template.jpg";

import styles from "./AvatarOfThing.module.scss";

export default class AvatarOfThing extends Component {
  state = {};

  render() {
    return (
      <>
        <img alt="thing" src={thingTemplate} className={styles.thingTemplate} />
      </>
    );
  }
}
