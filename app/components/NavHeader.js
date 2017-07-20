import React from 'react';
import { Link } from 'react-router';
import styles from '../styles.css';
import navLogo from '../assets/nav-logo.png';
import { easing } from '../helpers/math';

export default class NavHeader extends React.Component {
  render() {
    const { isLanding, scrollTop } = this.props;
    return (
        <div className={styles.navBar} style={isLanding ? { opacity: easing(481, 560, scrollTop) } : {}}>
          <Link to="/">
            <img src={navLogo} className={styles.navLogo} />
          </Link>
          <div className={styles.navHeader}>
            <Link to="/participants">
              <div className={styles.navHeaderItem} >
                參與尋寶
              </div>
            </Link>
            <Link to="/participants">
              <div className={styles.navHeaderItem} >
                寶藏庫
              </div>
            </Link>
            <div className={styles.navHeaderItem} >
              故事
            </div>
            <div className={styles.navHeaderItem} >
              聯絡我們
            </div>
          </div>
        </div>
    );
  }
}
