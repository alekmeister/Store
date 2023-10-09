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

export const ROUTE_PATHS: Record<AppRoutes, string> = {
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
    path: ROUTE_PATHS.main,
    element: <MainPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: ROUTE_PATHS.not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.MEN]: {
    path: ROUTE_PATHS.men,
    element: <span>men</span>,
  },
  [AppRoutes.WOMEN]: {
    path: ROUTE_PATHS.women,
    element: <span>women</span>,
  },
};
