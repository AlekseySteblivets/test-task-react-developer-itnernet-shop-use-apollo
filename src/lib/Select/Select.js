import { Component } from "react";

import cn from "classnames";
// import vector from "../../assets/img/vector.svg";

import styles from "./Select.module.scss";

export default class Select extends Component {
  state = {
    isOptionsOpen: false,
    selectedOption: 0,
  };

  toggleOptions = () => {
    this.setState({ isOptionsOpen: !this.state.isOptionsOpen });
  };

  setSelectedThenCloseDropdown = (index) => {
    this.setState({ selectedOption: index });
    this.setState({ isOptionsOpen: false });
  };

  handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case " ":
      case "SpaceBar":
      case "Enter":
        e.preventDefault();
        this.setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  handleListKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        e.preventDefault();
        this.setState({ isOptionsOpen: false });
        break;
      case "ArrowUp":
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption - 1 >= 0
              ? this.state.selectedOption - 1
              : this.props.items.length - 1,
        });
        break;
      case "ArrowDown":
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption === this.props.items.length - 1
              ? 0
              : this.state.selectedOption + 1,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const items = this.props.items;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={this.state.isOptionsOpen}
            className={cn(
              styles.textBtnMoney,
              this.state.isOptionsOpen ? styles.expanded : ""
            )}
            onClick={this.toggleOptions}
            onKeyDown={this.handleListKeyDown}
          >
            {items[this.state.selectedOption].simbol}
          </button>
          <ul
            className={cn(
              {
                [styles.show]: this.state.isOptionsOpen,
                [styles.options]: true,
              }
              // this.state.isOptionsOpen ? styles.show : ""
            )}
            role="listbox"
            aria-activedescendant={items[this.state.selectedOption]}
            tabIndex={-1}
            onKeyDown={this.handleListKeyDown}
          >
            {items.map((option, index) => (
              <li
                className={styles.item}
                key={option.title}
                id={option.title}
                role="option"
                aria-selected={this.state.selectedOption === index}
                tabIndex={0}
                onKeyDown={this.handleKeyDown(index)}
                onClick={() => {
                  this.setSelectedThenCloseDropdown(index);
                }}
              >
                {option.simbol + " " + option.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

// export default class DropDownLink extends Component {
//   state = {
//     isShowMenu: false,
//   };

//   onClickBtnMoney = () => {
//     this.setState({ isShowMenu: !this.state.isShowMenu });
//   };

//   render() {
//     const items = this.props.items;
//     const { isShowMenu } = this.state;
//     return (
//       <div>
//         <div className={styles.btnBlock}>
//           <button
//             type="button"
//             className={styles.textBtnMoney}
//             onClick={this.onClickBtnMoney}
//           >
//             {items[0].simbol}
//           </button>
//           <img alt="vector" src={vector} className={styles.vector} />
//         </div>
//         {isShowMenu && (
//           <ul className={styles.menu} id="menu">
//             {items.map((itemMoney) => (
//               <li className={styles.item} key={itemMoney.title}>
//                 {itemMoney.simbol + " " + itemMoney.title}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }
