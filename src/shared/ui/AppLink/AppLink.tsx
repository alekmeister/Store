import { type FC } from 'react';

import { Link, type LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface AppLinkProps extends LinkProps {
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({ to, className, children, ...otherProps }) => {
  return (
    <Link
      to={to}
      className={classNames(styles.app_link, {}, [className ?? ''])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
