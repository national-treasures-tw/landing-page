import React from 'react';
import { Link } from 'react-router';
import NavHeader from './NavHeader';
import FooterContent from './FooterContent';
import styles from '../styles.css';
import background from '../assets/participants/background-2.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
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
        <NavHeader />
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
          <FooterContent />
        </div>
      </div>
    );
  }
}
