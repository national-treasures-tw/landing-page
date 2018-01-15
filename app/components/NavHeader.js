import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import styles from '../styles.css';
import navLogo from '../assets/nav-logo.png';
import { easing } from '../helpers/math';

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileMenuOpen: false
    }
  }

  handleOpenMenu = () => {
    this.setState({ isMobileMenuOpen: true });
  }

  handleCloseMenu = () => {
    this.setState({ isMobileMenuOpen: false });
  }

  render() {
    const { isLanding, scrollTop, path } = this.props;
    const { isMobileMenuOpen } = this.state;
    const isMobile = window.innerWidth < 415;
    const mobilePopoutWidth = window.innerWidth - 198 < 148 ? window.innerWidth - 198 : 148;
    const isEnglish = path && path.includes('/en');
    return (
        <div className={styles.navBar} style={isLanding ? { opacity: easing(481, 560, scrollTop), marginTop: isMobile ? -23 : -9 } : { opacity: 1}}>
          <Link to="/">
            <img src={navLogo} className={styles.navLogo} />
          </Link>
          <div className={styles.navHeader}>
            <Link to={isEnglish ? "/participants/volunteers" : "/participants/volunteers"}>
              <div className={styles.navHeaderItem} >
                {isEnglish ? "Volunteer" : '參與尋寶'}
              </div>
            </Link>
            <Link to={isEnglish ? "/treasure/en" : "/treasure"}>
              <div className={styles.navHeaderItem} >
                {isEnglish ? "Treasure" : '寶藏庫'}
              </div>
            </Link>
            <a href="https://www.facebook.com/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderItem} >
                {isEnglish ? "Stories" : '故事'}
              </div>
            </a>
            <a href="https://m.me/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderItem} >
                {isEnglish ? "Contact Us" : '聯絡我們'}
              </div>
            </a>
            <Link to={isEnglish ? "/" : "/en"}>
              <div className={styles.navHeaderItem} >
                {isEnglish ? "中文" : "English"}
              </div>
            </Link>
          </div>
          {!isMobileMenuOpen ?
          (
            <div
              className={styles.navMobileMenu}
              style={{ width: 78, marginLeft: window.innerWidth - (198 + 78) }}
              onClick={this.handleOpenMenu}
            >
              menu
            </div>
          ) : (
            <div
              className={styles.navMobileMenu}
              style={{ width: mobilePopoutWidth, marginLeft: window.innerWidth - (198 + mobilePopoutWidth)  }}
              onClick={this.handleCloseMenu}
            >
              close <FontAwesome name='times' />
            </div>
           )
          }
          {isMobileMenuOpen &&
          <div className={styles.navHeaderMobilePopout} style={{ width: mobilePopoutWidth , marginLeft: window.innerWidth - mobilePopoutWidth }}>
            <Link to={isEnglish ? "/participants/volunteers" : "/participants/volunteers"}>
              <div className={styles.navHeaderPopoutItem} >
                {isEnglish ? "Volunteer" : '參與尋寶'}
              </div>
            </Link>
            <Link to={isEnglish ? "/treasure/en" : "/treasure"}>
              <div className={styles.navHeaderPopoutItem} >
                {isEnglish ? "Treasure" : '寶藏庫'}
              </div>
            </Link>
            <a href="https://www.facebook.com/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderPopoutItem} >
                {isEnglish ? "Stories" : '故事'}
              </div>
            </a>
            <a href="https://m.me/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderPopoutItem} >
                {isEnglish ? "Contact Us" : '聯絡我們'}
              </div>
            </a>
            <Link to={isEnglish ? "/" : "/en"}>
              <div className={styles.navHeaderPopoutItem} >
                {isEnglish ? "中文" : "English"}
              </div>
            </Link>
          </div>
          }
        </div>
    );
  }
}
