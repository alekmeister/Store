import { FC } from 'react';

import { AppRouter } from 'app/providers/Routers';
import styles from 'widgets/Workspace/ui/Workspace.module.scss';

export const Workspace: FC = () => {
  return (
    <main className={styles.main}>
      <AppRouter />
    </main>
  );
};
