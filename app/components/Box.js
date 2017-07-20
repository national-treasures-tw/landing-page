import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import styles from '../styles.css';
import background from '../assets/participants/background-2.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import navLogo from '../assets/nav-logo.png';
import badge3 from '../assets/participants/badge-3.png';
import poweredBy from '../assets/poweredby.png';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: '',
      scrollTop: 0,
    };
  }

  render() {
    return (
      <div className={styles.treasureBox}>
        <div className={styles.triangle}>
          <p className={styles.triangleContent}>寶藏庫</p>
        </div>
        <div className={styles.navBar}>
          <img src={navLogo} className={styles.navLogo} />
          <div className={styles.navHeader}>
            <div className={styles.navHeaderItem} >
              參與尋寶
            </div>
            <div className={styles.navHeaderItem} >
              寶藏庫
            </div>
            <div className={styles.navHeaderItem} >
              故事
            </div>
            <div className={styles.navHeaderItem} >
              聯絡我們
            </div>
          </div>
        </div>
        <img src={background} className={styles.backgroundHeroTreasure} />
        <div className={styles.treasureBody}>
          <img src={badge3} className={styles.treasureBadge} />
          <div className={styles.treasureControls}>
            標籤 and Stuff
          </div>
          <div className={styles.treasureContainer}>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
            <div>
              <img src={`https://s3.amazonaws.com/national-treasure/nara/1742009/a9dffbd0-6d71-11e7-a41d-95b39e572704-1500571930575.jpg`} className={styles.docItem} />
              <p>Tags </p>
            </div>
          </div>
        </div>
        <div className={styles.generalFooter}>
          <div className={styles.footerContent}>
            <a href="https://grants.g0v.tw/power" target="_blank"><img src={poweredBy} className={styles.poweredBy} /> </a>
            <div className={styles.footerInfo}>
              <div>Email：join@nltr.tw</div>
              <div>Facebook：fb.me/twnationaltreasure</div>
              <div>Web：nationaltreasure.tw</div>
              <div>Donate：請寄支票到 <br /> Taiwan National Treasure Foundation 431 W. 37st #9A New York, NY 10018</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
