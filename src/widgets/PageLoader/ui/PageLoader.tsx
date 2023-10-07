import React, { type FC } from 'react';

import cls from './PageLoader.module.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader, LoaderSizes } from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = () => {
  return (
    <div className={classNames(cls.PageLoader)}>
      <Loader size={LoaderSizes.L} />
    </div>
  );
};
