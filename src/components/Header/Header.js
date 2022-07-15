import { Component } from "react";

import HeaderActionButtons from "../HeaderActionButtons";
import Logo from "../Logo";
import Navigation from "../Navigation/Navigation";

export default class Header extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Logo />
        <HeaderActionButtons />
      </>
    );
  }
}
