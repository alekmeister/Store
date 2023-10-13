import { FC, ReactNode } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import styles from 'shared/ui/Sidebar/ui/Sidebar.module.scss';

interface SidebarProps {
  placement: 'left' | 'right';
  children: ReactNode;
  isOpen: boolean;
}
export const Sidebar: FC<SidebarProps> = ({
  placement = 'left',
  children,
  isOpen = false,
}) => {
  const mods = {
    [styles.collapsed]: isOpen,
    [styles[placement]]: true,
  };
  // const onToggle = () => {
  //   setCollapsed((prev) => !prev);
  // };

  return (
    <div className={classNames(styles.sidebar, mods, [])}>
      <div className={styles.sidebar_container}>{children}</div>
    </div>
  );
};
