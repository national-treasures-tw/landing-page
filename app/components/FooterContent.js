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
          <div>Email：join@nltr.tw</div>
          <div>Facebook：fb.me/twnationaltreasure</div>
          <i style={{ fontSize: 12 }}>TNTF is a US 501(c)(3) public charity nonprofit org </i>
        </div>
      </div>
    );
  }
}
