import { FC, ReactElement } from 'react';

import { Link, useLocation } from 'react-router-dom';

import styles from './Breadcrumbs.module.scss';

import { TRANSLATED_PAGE_NAME } from 'shared/config/routeConfig/routeConfig';
import { Container } from 'shared/ui/Container/Container';

export const Breadcrumbs: FC = () => {
  const displaySlash = (arrayEl: ReactElement[], index: number): ReactElement | null =>
    arrayEl.length === index + 1 ? null : <span>/</span>;

  const location = useLocation();
  let currentLink = '';
  const crumbs = location.pathname
    .split('/')
    .filter(Boolean)
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <Link key={crumb} to={currentLink}>
          {TRANSLATED_PAGE_NAME[crumb] || crumb}
        </Link>
      );
    });

  return (
    <Container>
      <div className={styles.breadcrumbs_wrapper}>
        {crumbs.map((el, index) => (
          <>
            {el} {displaySlash(crumbs, index)}
          </>
        ))}
      </div>
    </Container>
  );
};
