import { Component } from "react";
import { createPortal } from "react-dom";

import s from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    console.log("componentDidMount");

    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    if (!this.props.visible) return null;

    return createPortal(
      <div className={s.modalBackdrop} onClick={this.handleBackdropClick}>
        <div className={s.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
