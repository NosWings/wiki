import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>A great source of information</>,
    imageUrl: 'img/library.svg',
    description: (
      <>
        As players, we know that a good source of information is a need.<br/>
        That's why we decided to make a wiki as complete as possible!
      </>
    ),
  },
  {
    title: <>For the community by the community</>,
    imageUrl: 'img/opensource.svg',
    description: (
      <>
        You found a typo? You would like to help us improve our wiki?
        Our wiki is opensource, feel free to contribute to it on <a href="https://github.com/NosWings/wiki">GitHub</a>.
      </>
    ),
  },
  {
    title: <>Patch Notes</>,
    imageUrl: 'img/note.svg',
    description: (
      <>
        You would like to read a previous patchnote?<br/>
        All our patch notes are available in a <a href="blog">single click</a>.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="NosWings project Wiki, our own source of knowledge!<br/>Join us at https://noswings.com">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
