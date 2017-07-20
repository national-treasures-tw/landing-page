import React from 'react';
import styles from '../styles.css';
import poweredBy from '../assets/poweredby.png';

export default class FooterContent extends React.Component {
  render() {
    return (
      <div className={styles.footerContent}>
        <a href="https://grants.g0v.tw/power" target="_blank"><img src={poweredBy} className={styles.poweredBy} /> </a>
        <div className={styles.footerInfo}>
          <div>Email：join@nltr.tw</div>
          <div>Facebook：fb.me/twnationaltreasure</div>
          <div>Web：nationaltreasure.tw</div>
          <div>Donate：請寄支票到 <br /> Taiwan National Treasure Foundation 431 W. 37st #9A New York, NY 10018</div>
        </div>
      </div>
    );
  }
}
