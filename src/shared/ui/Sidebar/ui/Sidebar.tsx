import { FC, ReactNode } from 'react';

import styles from 'shared/ui/Sidebar/ui/Sidebar.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarProps {
  placement: 'left' | 'right';
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
export const Sidebar: FC<SidebarProps> = ({
  placement = 'left',
  children,
  isOpen = false,
  onClose,
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
