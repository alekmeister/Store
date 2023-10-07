import React, { type FC, useRef } from 'react';

import Lottie from 'lottie-react';

import cls from './NotFoundPage.module.scss';

import notFoundAnimation from 'shared/assets/animations/cat_with_tv.json';
import { classNames } from 'shared/lib/classNames/classNames';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = () => {
  const lottieRef = useRef(null);

  // @ts-ignore
  lottieRef.current?.setSpeed(0.4);

  return (
    <div className={classNames(cls.NotFoundPage)}>
      Этой страницы не существует...
      <br />А пока можете посмотреть телевизор!
      <Lottie animationData={notFoundAnimation} loop lottieRef={lottieRef} />
    </div>
  );
};

export default NotFoundPage;
