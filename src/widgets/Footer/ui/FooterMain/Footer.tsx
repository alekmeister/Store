import React, { FC, ReactNode } from 'react';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import styles from 'widgets/Footer/ui/FooterMain/Footer.module.scss';

interface ListElements {
  path: string;
  label: ReactNode;
}
interface FooterListProps {
  title: string;
  listElements: ListElements[];
}

const socialMediaList: ListElements[] = [
  {
    label: 'Instagram',
    path: '/instagram',
  },
  {
    label: 'Telegram',
    path: '/telegram',
  },
];

const heplsList: ListElements[] = [
  {
    label: 'Доставка и оплата',
    path: '/faq/shipping',
  },
  {
    label: 'Возврат',
    path: '/faq/returns',
  },
];

const infoList = [
  {
    label: 'Контакты',
    path: '/contact',
  },
  {
    label: 'Вакансии',
    path: '/job',
  },
];

const trackOrderList = [
  {
    label: 'Telegram бот',
    path: '/track',
  },
];

const FOOTER_TITLES = {
  SOCIAL_NETWORK: 'Социальные сети',
  HELPS: 'Поддержка',
  INFO: 'Информация',
  TRACK_ORDER: 'Отследить заказ',
};
const FooterBlock: FC<FooterListProps> = (props) => {
  const { title, listElements } = props;

  return (
    <div className={styles.footer_block}>
      <div className={styles.title}>{title}</div>
      <div className={styles.footer_list}>
        {listElements.map(({ label, path }) => (
          <AppLink key={path} to={path}>
            {label}
          </AppLink>
        ))}
      </div>
    </div>
  );
};

export const Footer: FC = () => {
  const { SOCIAL_NETWORK, INFO, HELPS, TRACK_ORDER } = FOOTER_TITLES;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_body}>
        <FooterBlock title={SOCIAL_NETWORK} listElements={socialMediaList} />
        <FooterBlock title={HELPS} listElements={heplsList} />
        <FooterBlock title={INFO} listElements={infoList} />
        <FooterBlock title={TRACK_ORDER} listElements={trackOrderList} />
      </div>
    </footer>
  );
};
