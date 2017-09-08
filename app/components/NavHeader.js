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
    const { isLanding, scrollTop } = this.props;
    const { isMobileMenuOpen } = this.state;
    const mobilePopoutWidth = window.innerWidth - 198 < 148 ? window.innerWidth - 198 : 148;
    return (
        <div className={styles.navBar} style={isLanding ? { opacity: easing(481, 560, scrollTop) } : { opacity: 1}}>
          <Link to="/">
            <img src={navLogo} className={styles.navLogo} />
          </Link>
          <div className={styles.navHeader}>
            <Link to="/participants">
              <div className={styles.navHeaderItem} >
                參與尋寶
              </div>
            </Link>
            <Link to="/treasure">
              <div className={styles.navHeaderItem} >
                寶藏庫
              </div>
            </Link>
            <a href="https://www.facebook.com/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderItem} >
                故事
              </div>
            </a>
            <a href="https://m.me/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderItem} >
                聯絡我們
              </div>
            </a>
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
            <Link to="/participants">
              <div className={styles.navHeaderPopoutItem} >
                參與尋寶
              </div>
            </Link>
            <Link to="/treasure">
              <div className={styles.navHeaderPopoutItem} >
                寶藏庫
              </div>
            </Link>
            <a href="https://www.facebook.com/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderPopoutItem} >
                故事
              </div>
            </a>
            <a href="https://m.me/twnationaltreasure/" target="_blank">
              <div className={styles.navHeaderPopoutItem} >
                聯絡我們
              </div>
            </a>
          </div>
          }
        </div>
    );
  }
}
