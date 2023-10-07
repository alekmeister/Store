import React, { FC } from 'react';

import BasketLogo from 'shared/assets/icons/bag.svg?react';
import Logo from 'shared/assets/icons/logo.svg?react';

import styles from './Header.module.scss';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';

export const Header: FC = () => {
  return (
    <header>
      <div className={styles.header_body}>
        <Logo className={styles.logo} />
        <div className={styles.actions}>
          <div className={styles.action_container}>
            <BasketLogo className={styles.action} />
          </div>
          <div className={styles.action_container}>
            <Avatar firstLetters="ОН" />
          </div>
        </div>
      </div>
      <div className={styles.top_links}>
        <AppLink to={RoutePath.men}>Мужское</AppLink>
        <AppLink to={RoutePath.women}>Женское</AppLink>
      </div>
    </header>
  );
};
