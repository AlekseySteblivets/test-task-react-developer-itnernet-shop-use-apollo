import { Component } from "react";
import { createPortal } from "react-dom";

import cn from "classnames";

import s from "./Modal.module.scss";
import OutsideClickHandler from "../OutsideClickHandler/OutsideClickHandler";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape" && this.props.visible) {
      this.props.onClose();
      // this.props.onClickButtonCartProps();
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
        <OutsideClickHandler
          onOutsideClick={() => {
            this.props.onClose();
          }}
        >
          <div className={cn(s.modalContent, this.props.classNameProps)}>
            {this.props.children}
          </div>
        </OutsideClickHandler>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
