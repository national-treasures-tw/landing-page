import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import styles from '../styles.css';
import background from '../assets/participants/background-2.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import navLogo from '../assets/nav-logo.png';
import badge1 from '../assets/participants/badge-1.png';
import badge2 from '../assets/participants/badge-2.png';
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
      <div>
        <div className={styles.box} />
        <div className={styles.triangle}>
          <p className={styles.triangleContent}>參與尋寶</p>
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
        <img src={background} className={styles.backgroundHero} />
        <div className={styles.teamBox}>
          <div className={styles.teamBoxItem}>
            <img src={badge1} className={styles.teamBoxBadge} />
            <div className={styles.teamBoxItemContent}>
              <h3 className={styles.teamBoxItemTitle}>
                尋寶小隊
              </h3>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
            </div>
          </div>
          <div className={styles.teamBoxItem}>
            <img src={badge2} className={styles.teamBoxBadge} />
            <div className={styles.teamBoxItemContent}>
              <h3 className={styles.teamBoxItemTitle}>
                尋寶小隊
              </h3>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
            </div>
          </div>
          <div className={styles.teamBoxItem}>
            <img src={badge3} className={styles.teamBoxBadge} />
            <div className={styles.teamBoxItemContent}>
              <h3 className={styles.teamBoxItemTitle}>
                尋寶小隊
              </h3>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
              <div>
                <span>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </div>
            </div>
          </div>
        </div>

        <div className={styles.gallerySection}>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <a href="https://grants.g0v.tw/power" target="_blank"><img src={poweredBy} className={styles.poweredBy} /> </a>
              <div className={styles.footerInfo}>
                <div>Email：join@nltr.tw</div>
                <div>Facebook：fb.me/twnationaltreasure</div>
                <div>Web：nationaltreasure.tw</div>
                <div>Donate：請寄支票到 Taiwan National Treasure Foundation 431 W. 37st #9A New York, NY 10018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
