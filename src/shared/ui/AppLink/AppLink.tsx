import { type FC } from 'react';

import { Link, type LinkProps } from 'react-router-dom';

import styles from './AppLink.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface AppLinkProps extends LinkProps {
  className?: string;
  underlined?: boolean;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  className,
  children,
  underlined,
  ...otherProps
}) => {
  const underlinedClassName = underlined ? styles.app_link_underlined : styles.app_link;

  return (
    <Link
      to={to}
      className={classNames(underlinedClassName, {}, [className ?? ''])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
