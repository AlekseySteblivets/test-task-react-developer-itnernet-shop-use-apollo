import { Component } from "react";

import cn from "classnames";

import styles from "./Select.module.scss";
import OutsideClickHandler from "../OutsideClickHandler/OutsideClickHandler";

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

  // handleEveryWhereClick = (index) => (e) => {
  //   console.log(e.currentTarget);
  //   console.log(e.target);

  //   if (e.currentTarget === e.target) {
  //     this.setSelectedThenCloseDropdown(index);
  //   }
  //   this.setState({ isOptionsOpen: !this.state.isOptionsOpen });
  // };

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
          <OutsideClickHandler
            onOutsideClick={() => {
              this.setState({ isOptionsOpen: false });
              // console.log("clicked outside!");
            }}
          >
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
          </OutsideClickHandler>
        </div>
      </div>
    );
  }
}
