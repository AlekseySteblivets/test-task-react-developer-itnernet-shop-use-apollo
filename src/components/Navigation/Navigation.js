import { Component } from "react";
import Modal from "../Modal/Modal";

import logo from "../../assets/img/Brand-icon.png";
import emptyCartImg from "../../assets/img/empty-cart.svg";
import vector from "../../assets/img/vector.svg";

import styles from "./Navigation.module.scss";

export default class Navigation extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <nav className={styles.navigation}>
        <ul className={styles.menu}>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              women
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              men
            </a>
          </li>
          <li className={styles.item}>
            <a href="/" className={styles.link}>
              kids
            </a>
          </li>
        </ul>

        <a href="/">
          <img
            alt="logo"
            src={logo}
            width="41"
            height="41"
            className={styles.logo}
          />
        </a>
        <div className={styles.bag}>
          <p className={styles.textMoney}>$</p>
          <img alt="vector" src={vector} />

          <button
            type="button"
            onClick={this.togleModal}
            className={styles.buttonOnBag}
          >
            <img
              alt="emptyCartImg"
              src={emptyCartImg}
              className={styles.emptyCartImg}
            />
          </button>
        </div>
        {showModal && (
          <Modal onClose={this.togleModal}>
            <h1> Привет это контент модалки как children</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button type="button" onClick={this.togleModal}>
              Закрыть модалку
            </button>
          </Modal>
        )}
      </nav>
    );
  }
}

// class App extends Component {
//   state = {
//     showModal: false,
//   };

//   togleModal = () => {
//     this.setState((state) => ({
//       showModal: !state.showModal,
//     }));
//   };

//   render() {
//     const { showModal } = this.state;
//     return (
//       <div>
//         <button type="button" onClick={this.togleModal}>
//           Open Modal
//         </button>
//         {showModal && (
//           <Modal onClose={this.togleModal}>
//             <h1> Привет это контент модалки как children</h1>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <button type="button" onClick={this.togleModal}>
//               Закрыть модалку
//             </button>
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }
