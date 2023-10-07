import React from 'react';

import { type RouteProps } from 'react-router';

import { MainPage } from 'pages/Main';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  NOT_FOUND = 'not_found',
  MEN = 'men',
  WOMEN = 'women',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.MEN]: '/men',
  [AppRoutes.WOMEN]: '/women',
};

export const TRANSLATED_PAGE_NAME: Record<AppRoutes | string, string> = {
  [AppRoutes.MAIN]: 'Главная',
  [AppRoutes.MEN]: 'Мужское',
  [AppRoutes.WOMEN]: 'Женское',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.MEN]: {
    path: RoutePath.men,
    element: <span>men</span>,
  },
  [AppRoutes.WOMEN]: {
    path: RoutePath.women,
    element: <span>women</span>,
  },
};
