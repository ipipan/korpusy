import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dla językoznawców',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Pariatur labore adipisicing sit anim nulla. Lorem proident nisi id voluptate dolore minim commodo officia exercitation mollit ullamco consequat. Dolore fugiat eiusmod sunt quis ex. Minim est Lorem sit magna ex fugiat excepteur consectetur consectetur mollit veniam aute ex. Eu qui fugiat irure nostrud voluptate tempor ipsum.
      </>
    ),
  },
  {
    title: 'Dla specjalistów uczenia maszynowego',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Consequat dolore cupidatat duis sint tempor laboris et officia irure labore do. Pariatur consequat dolor sunt laboris Lorem ad aliqua excepteur Lorem. Est anim esse proident do adipisicing do ea. Aute laborum adipisicing ex mollit labore duis. In deserunt sit dolor proident incididunt deserunt aliquip minim non in. Sint anim amet incididunt velit eu. Aute aute irure laboris sit duis minim.
      </>
    ),
  },
  {
    title: 'Dla pracujących z językiem naturalnym',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Id ea pariatur incididunt adipisicing dolor officia minim anim anim occaecat exercitation quis eiusmod. Anim dolore irure voluptate ea ex proident veniam ipsum tempor labore ad. Deserunt aute cillum irure sit. Cillum ut proident excepteur ad anim culpa nisi.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
