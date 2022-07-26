import cn from 'classnames';

import styles from './Button.module.scss';

export default function Button({
  children,
  onClickProps,
  type = 'button',
  classNameProps = '',
  disableProps = false,
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClickProps}
        className={cn(styles.button, classNameProps)}
        disabled={disableProps}
      >
        {children}
      </button>
    </>
  );
}
