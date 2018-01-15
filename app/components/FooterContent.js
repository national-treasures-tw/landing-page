import React from 'react';
import styles from '../styles.css';
import poweredBy from '../assets/poweredby.png';

export default class FooterContent extends React.Component {
  render() {
    return (
      <div className={styles.footerContent}>
        <a href="https://grants.g0v.tw/power" target="_blank"><img src={poweredBy} className={styles.poweredBy} /> </a>
        <div className={styles.footerInfo}>
          <div><b>Taiwan National Treasure Foundation</b></div>
          <div>Email：<a href="mailto:join@nltr.tw" className={styles.footerLink}>join@nltr.tw</a></div>
          <div>Facebook：<a href="fb.me/twnationaltreasure" target="_blank" className={styles.footerLink}>@twnationaltreasure</a></div>
          <i style={{ fontSize: 12 }}>TNTF is a US 501(c)(3) nonprofit organization </i>
        </div>
      </div>
    );
  }
}
