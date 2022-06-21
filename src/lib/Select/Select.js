import { Component } from "react";
import { GET_KIND_OF_CURRENCIES } from "../../api/shemas/getKindOfCurrencies";
import { graphql } from "@apollo/client/react/hoc";
import { withRouter } from "react-router";

import OutsideClickHandler from "../OutsideClickHandler/OutsideClickHandler";

import cn from "classnames";

import styles from "./Select.module.scss";

class Select extends Component {
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
              : this.props.data.currencies.length - 1,
        });
        break;
      case "ArrowDown":
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption === this.props.data.currencies.length - 1
              ? 0
              : this.state.selectedOption + 1,
        });
        break;
      default:
        break;
    }
  };

  render() {
    const {
      items,
      data: { currencies, loading },
    } = this.props;
    console.log("Select", this.props);
    console.log(currencies);

    return (
      <div className={styles.wrapper}>
        {!loading && (
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
              {currencies[this.state.selectedOption].symbol}
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
                aria-activedescendant={currencies[this.state.selectedOption]}
                tabIndex={-1}
                onKeyDown={this.handleListKeyDown}
              >
                {currencies.map((option, index) => (
                  <li
                    className={styles.item}
                    key={option.label}
                    id={option.label}
                    role="option"
                    aria-selected={this.state.selectedOption === index}
                    tabIndex={0}
                    onKeyDown={this.handleKeyDown(index)}
                    onClick={() => {
                      this.setSelectedThenCloseDropdown(index);
                    }}
                  >
                    {option.symbol + " " + option.label}
                  </li>
                ))}
              </ul>
            </OutsideClickHandler>
          </div>
        )}
      </div>
    );
  }
}

export default graphql(GET_KIND_OF_CURRENCIES)(withRouter(Select));
