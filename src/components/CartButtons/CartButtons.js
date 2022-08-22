import { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../lib/Button/Button';
import { nameCartPage } from '../../utils/nameCartPage';

import styles from './CartButtons.module.scss';

export default class CartButtons extends Component {
  render() {
    if (!this.props.visibleFullScreen)
      return (
        <div className={styles.blockButtons}>
          <Link to={`/${nameCartPage}`}>
            <Button onClickProps={this.props.onClose}>View bag</Button>
          </Link>

          <Button>CHECK OUT</Button>
        </div>
      );

    return (
      <div>
        <Button
          onClickProps={this.props.onClickButtonCartProps}
          classNameProps={{
            [styles.buttonWhenFullScreen]: this.props.visibleFullScreen,
          }}
        >
          Order
        </Button>
      </div>
    );
  }
}
