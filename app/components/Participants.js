import React from 'react';
import NavHeader from './NavHeader';
import FooterContent from './FooterContent';
import { Link } from 'react-router';
import styles from '../styles.css';
import background from '../assets/participants/background-2.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import navLogo from '../assets/nav-logo.png';
import badge1 from '../assets/participants/badge-1.png';
import badge2 from '../assets/participants/badge-2.png';
import badge3 from '../assets/participants/badge-3.png';
import archiveLogo from '../assets/participants/archiveLogo.png';
import UNLogo from '../assets/participants/UN.jpg';
import LOCLogo from '../assets/participants/LOC.jpg';
import hooverLogo from '../assets/participants/hoover.jpeg';
import TNALogo from '../assets/participants/TNA.png';
import JNALogo from '../assets/participants/JNA.png';
import dutchLogo from '../assets/participants/dutch.jpg';
import mockup from '../assets/participants/mockup.png';
import download from '../assets/participants/download.png';
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
    const route = this.props.location.pathname.split('/')[2];
    return (
      <div className={styles.box}>
        <div className={styles.triangle}>
          <p className={styles.triangleContent}>參與尋寶</p>
        </div>
        <NavHeader />
        <img src={background} className={styles.backgroundHero} />
        <div className={styles.teamBox}>
          <div className={route === 'volunteers' ? styles.teamBoxItemActive : styles.teamBoxItem}>
            <img src={badge2} className={styles.teamBoxBadge1} />
            <div className={styles.teamBoxItemContent1}>
              <h3 className={styles.teamBoxItemTitle1}>
                尋寶小隊
              </h3>
              <p className={styles.teamBoxBody}>
                <span className={styles.team1Subtitle}>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </p>
              <p className={styles.teamBoxBodyDesktop}>
                <span className={styles.team1Subtitle}>適合</span>   喜愛出外探險、鄰近檔案局、想參觀檔案局的人
              </p>
              <p className={styles.teamBoxBodyDesktop}>
                <span className={styles.team1Subtitle}>優點</span>   可以第一手接觸到文史資料
              </p>
              <Link to="/participants/volunteers#toHere"><button className={styles.teamBoxButton}> 挖寶指南 </button></Link>
            </div>
          </div>
          <div className={route === 'calibrators' ? styles.teamBoxItemActive : styles.teamBoxItem}>
            <img src={badge3} className={styles.teamBoxBadge2} />
            <div className={styles.teamBoxItemContent2}>
              <h3 className={styles.teamBoxItemTitle2}>
                鑑定小隊
              </h3>
              <p className={styles.teamBoxBody}>
                <span className={styles.team2Subtitle}>任務</span> 將國家寶藏資料庫的文件進行數位化、勘誤與翻譯
              </p>
              <p className={styles.teamBoxBodyDesktop}>
                <span className={styles.team2Subtitle}>適合</span> 善於文書處理、喜愛室內活動、鄉民
              </p>
              <p className={styles.teamBoxBodyDesktop}>
                <span className={styles.team2Subtitle}>優點</span> 修身養性的細心、打字速度進步、電腦前即可貢獻的參與感
              </p>
              <Link to="/participants/calibrators#toHere"><button className={styles.teamBoxButton}> 如何鑑定 </button></Link>
            </div>
          </div>
          <div className={route === 'supporters' ? styles.teamBoxItemActive : styles.teamBoxItem}>
            <img src={badge1} className={styles.teamBoxBadge3} />
            <div className={styles.teamBoxItemContent3}>
              <h3 className={styles.teamBoxItemTitle3}>
                後勤小隊
              </h3>
              <p className={styles.teamBoxBody}>
                <span className={styles.team3Subtitle}>任務</span>     協助專案的基礎建設
              </p>
              <p className={styles.teamBoxBodyDesktop}>
                <span className={styles.team3Subtitle}>適合</span>   各方專業人士、各方英才、歷史學家、文案寫手、工程師、設計師、社群經營等等等，有錢出錢有力出力的熱血份子
              </p>
              <Link to="/participants/supporters#toHere"><button className={styles.teamBoxButton3}> 從何貢獻 </button></Link>
            </div>
          </div>
        </div>
       {this.props.children}
        <div className={styles.generalFooter}>
          <FooterContent />
        </div>
      </div>
    );
  }
}
