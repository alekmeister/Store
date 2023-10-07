import { lazy } from 'react';

// export const MainPageAsync = lazy(() => import('./MainPage'));

export const MainPageAsync = lazy(
  async () =>
    new Promise((resolve) => {
      // JUST FOR COURSE!
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./MainPage'));
      }, 1000);
    }),
);
