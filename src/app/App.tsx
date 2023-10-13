import { FC } from 'react';

import './styles/index.scss';
import { Breadcrumbs } from 'widgets/Breadcrumbs';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Sidebar } from 'shared/ui/Sidebar';
import { Workspace } from 'widgets/Workspace';

export const App: FC = () => {
  return (
    <div className="app">
      <Sidebar position="left" />
      <Header />
      <Breadcrumbs />
      <Workspace />
      <Footer />
    </div>
  );
};
