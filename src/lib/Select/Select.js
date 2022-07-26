import { Component } from 'react';
import { withRouter } from 'react-router';
import cn from 'classnames';

import { graphql } from '@apollo/client/react/hoc';
import { client } from '../../api/base/apolloClient';

import { GET_KIND_OF_CURRENCIES } from '../../api/shemas/getKindOfCurrencies';
import OutsideClickHandler from '../OutsideClickHandler/OutsideClickHandler';
import { SELECTED_CURRENCY } from '../../api/cache/selectedCurrency';

import styles from './Select.module.scss';

class Select extends Component {
  state = {
    isOptionsOpen: false,
    selectedOption: 0,
  };

  componentDidUpdate() {
    this.writeQuerySelectedCurrency(this.state.selectedOption);
  }

  toggleOptions = () => {
    this.setState({ isOptionsOpen: !this.state.isOptionsOpen });
  };

  writeQuerySelectedCurrency = index => {
    if (!this.props.data.loading) {
      client.writeQuery({
        query: SELECTED_CURRENCY,
        data: {
          selectedCurrency: {
            __typename: 'SelectedCurrency',
            symbol: this.props.data.currencies[index].symbol,
            label: this.props.data.currencies[index].label,
          },
        },
      });
    }
  };

  setSelectedThenCloseDropdown = index => {
    this.setState(
      {
        selectedOption: index,
        isOptionsOpen: false,
      },
      () => this.writeQuerySelectedCurrency(index),
    );
  };

  handleKeyDown = index => e => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        this.setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  handleListKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        this.setState({ isOptionsOpen: false });
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.setState({
          selectedOption:
            this.state.selectedOption - 1 >= 0
              ? this.state.selectedOption - 1
              : this.props.data.currencies.length - 1,
        });
        break;
      case 'ArrowDown':
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
      data: { currencies, loading },
    } = this.props;

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
                this.state.isOptionsOpen ? styles.expanded : '',
              )}
              onClick={this.toggleOptions}
              onKeyDown={this.handleListKeyDown}
            >
              {currencies[this.state.selectedOption].symbol}
            </button>
            <OutsideClickHandler
              onOutsideClick={() => {
                this.setState({ isOptionsOpen: false });
              }}
            >
              <ul
                className={cn({
                  [styles.show]: this.state.isOptionsOpen,
                  [styles.options]: true,
                })}
                role="listbox"
                aria-activedescendant={currencies[this.state.selectedOption]}
                tabIndex={-1}
                onKeyDown={this.handleListKeyDown}
              >
                {currencies.map((currency, index) => (
                  <li
                    className={styles.item}
                    key={currency.label}
                    id={currency.label}
                    role={currency.label}
                    aria-selected={this.state.selectedOption === index}
                    tabIndex={0}
                    onKeyDown={this.handleKeyDown(index)}
                    onClick={() => {
                      this.setSelectedThenCloseDropdown(index);
                    }}
                  >
                    {currency.symbol + ' ' + currency.label}
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
