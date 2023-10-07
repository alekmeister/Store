import { type FC, Suspense } from 'react';

import { Route, Routes } from 'react-router';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Container } from 'shared/ui/Container/Container';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={<Container>{element}</Container>} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
