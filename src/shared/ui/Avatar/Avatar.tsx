import { FC } from 'react';

import styles from './Avatar.module.scss';

export const Avatar: FC<{ firstLetters: string }> = ({ firstLetters }) => {
  return <div className={styles.avatar}>{firstLetters}</div>;
};
