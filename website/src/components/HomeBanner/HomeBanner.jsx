import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import clsx from 'clsx';

export const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          alt="Banner image"
          src={useBaseUrl('img/banner.svg')}
          className={styles.banner}
        />
        <h1 className="hero__title">
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle">
          &quot;Break the cycle, rise above, focus on science&quot;
        </p>
        <div className={styles.buttonWrapper}>
          <Link
            className={clsx('button button--lg', styles.button)}
            to="/journey/introduction"
          >
            Start
          </Link>
        </div>
      </div>
    </header>
  );
}
