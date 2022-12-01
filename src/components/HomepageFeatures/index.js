import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import imageBanner from '../../../static/img/banner.png'



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.contentCenter}>

          <img className={styles.bannerCenter} src={imageBanner} alt='No Image' height={500} />

          <h3 className={styles.textAlign}>A collection of packages to work with graphql server in dart and flutter.</h3>

          <h2 className={styles.dBlock}>Introduction</h2>

          <hr />
          <div>
            <p>
              GraphQL brings many benefits, both to the client: devices will need fewer requests, and therefore reduce data usage.
              And to the programmer: requests are arguable, they have the same structure as the request.
            </p>
            <p>
              This project combines the benefits of GraphQL with the benefits of <span>Streams</span> in Dart to deliver a high-performance client.
            </p>
            <p>
              The project took inspiration from the <a href='https://github.com/apollographql/apollo-client'>Apollo GraphQL client</a>, great work guys!
            </p>

          </div>

          <h2 className={styles.dBlock}>Packages</h2>
          <hr />

          <div>
            This is a Monorepo which contains the following packages:
          </div>

          <h2 className={styles.dBlock}>Utils Tools</h2>

          <p>Around graphql_flutter are builds awesome tools like:</p>

          <ul>
            <li>  <a href=''> graphql_flutter_bloc</a> </li>
            <li> <a href=''> graphql_codegen </a></li>
          </ul>

          <h2 className={styles.dBlock} >Features</h2>
          <hr />
        </div>
      </div>
    </section >
  );
}
