import React, { FC, useState } from 'react';

import BasketLogo from 'shared/assets/icons/bag.svg?react';
import Logo from 'shared/assets/icons/logo.svg?react';

import styles from './Header.module.scss';

import { ROUTE_PATHS } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';

export const Header: FC = () => {
  const [isOpenBasket, setOpenBasket] = useState(false);
  const closeBasket = (): void => {
    setOpenBasket((prev) => !prev);
  };

  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.navigations}>
          <AppLink to={ROUTE_PATHS.men} underlined>
            Мужское
          </AppLink>
          <AppLink to={ROUTE_PATHS.women} underlined>
            Женское
          </AppLink>
        </div>
        <AppLink to={ROUTE_PATHS.main} className={styles.logo}>
          <Logo />
        </AppLink>
        <div className={styles.actions}>
          <div className={styles.action_container}>
            <BasketLogo className={styles.action_icon} />
          </div>
          <div className={styles.action_container}>
            <Avatar firstLetters="ОН" />
          </div>
        </div>
      </div>
    </header>
  );
};
