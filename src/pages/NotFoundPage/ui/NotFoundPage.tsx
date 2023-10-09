import React, { type FC } from 'react';

import { DotLottiePlayer } from '@dotlottie/react-player';

import styles from './NotFoundPage.module.scss';

import notFoundAnimation from 'shared/assets/animations/cat_with_tv.lottie';
import { classNames } from 'shared/lib/classNames/classNames';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  return (
    <div className={classNames(styles.NotFoundPage)}>
      Этой страницы не существует...
      <br />А пока можете посмотреть телевизор!
      <DotLottiePlayer src={notFoundAnimation} loop autoplay speed={0.5} />
    </div>
  );
};

export default NotFoundPage;
