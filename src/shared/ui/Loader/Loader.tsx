import React, { type FC } from 'react';

import { DotLottiePlayer } from '@dotlottie/react-player';

import styles from './Loader.module.scss';

import loader from 'shared/assets/animations/loader.lottie';
import { classNames } from 'shared/lib/classNames/classNames';

export enum LoaderSizes {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface LoaderProps {
  className?: string;
  size?: LoaderSizes;
}

export const Loader: FC<LoaderProps> = (props) => {
  const { className, size = LoaderSizes.M, ...otherProps } = props;
  const mods: Record<string, boolean | undefined> = {
    [styles[size]]: true,
  };

  return (
    <div
      className={classNames(styles.loader_container, mods, [className ?? ''])}
      {...otherProps}
    >
      <DotLottiePlayer src={loader} autoplay loop />
    </div>
  );
};
