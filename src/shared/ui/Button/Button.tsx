import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...otherProps }) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, {}, [className ?? ''])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
