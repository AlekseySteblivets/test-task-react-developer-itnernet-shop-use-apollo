import { Component } from "react";

import cn from "classnames";

import thingTemplate from "../../assets/img/thing-template.jpg";

import styles from "./AvatarOfThing.module.scss";

export default class AvatarOfThing extends Component {
  render() {
    return (
      <img
        alt="thing"
        src={thingTemplate}
        className={cn(styles.thingTemplate, this.props.classNameProps)}
      />
    );
  }
}
