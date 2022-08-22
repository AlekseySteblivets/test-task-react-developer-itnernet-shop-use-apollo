import { Component } from 'react';

import CartOverlayButton from '../CartOverlayButton';
import Select from '../../lib/Select';

import styles from './HeaderActionButtons.module.scss';

export default class HeaderActionButtons extends Component {
  render() {
    return (
      <div className={styles.headerActionButtons}>
        <Select />
        <CartOverlayButton />
      </div>
    );
  }
}
