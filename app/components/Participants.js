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
    return (
      <div className={styles.box}>
        <div className={styles.triangle}>
          <p className={styles.triangleContent}>參與尋寶</p>
        </div>
        <NavHeader />
        <img src={background} className={styles.backgroundHero} />
        <div className={styles.teamBox}>
          <div className={styles.teamBoxItem}>
            <img src={badge2} className={styles.teamBoxBadge} />
            <div className={styles.teamBoxItemContent}>
              <h3 className={styles.teamBoxItemTitle1}>
                尋寶小隊
              </h3>
              <p className={styles.teamBoxBody}>
                <span className={styles.team1Subtitle}>任務</span>   親自前往檔案庫將文本翻拍出來，需要過人的行動力、好奇心
              </p>
              <p className={styles.teamBoxBody}>
                <span className={styles.team1Subtitle}>適合</span>   喜愛出外探險、鄰近檔案局、想參觀檔案局的人
              </p>
              <p className={styles.teamBoxBody}>
                <span className={styles.team1Subtitle}>優點</span>   可以第一手接觸到文史資料
              </p>
              <button className={styles.teamBoxButton}> 挖寶去 </button>
            </div>
          </div>
          <div className={styles.teamBoxItem}>
            <img src={badge3} className={styles.teamBoxBadge} />
            <div className={styles.teamBoxItemContent}>
              <h3 className={styles.teamBoxItemTitle2}>
                鑑定小隊
              </h3>
              <p className={styles.teamBoxBody}>
                <span className={styles.team2Subtitle}>任務</span> 將國家寶藏資料庫的文件進行數位化、勘誤與翻譯
              </p>
              <p className={styles.teamBoxBody}>
                <span className={styles.team2Subtitle}>適合</span> 善於文書處理、喜愛室內活動、鄉民
              </p>
              <p className={styles.teamBoxBody}>
                <span className={styles.team2Subtitle}>優點</span> 修身養性的細心、打字速度進步、電腦前即可貢獻的參與感
              </p>
              <button className={styles.teamBoxButton}> 協助鑑定 </button>
            </div>
          </div>
          <div className={styles.teamBoxItem}>
            <img src={badge1} className={styles.teamBoxBadge} />
            <div className={styles.teamBoxItemContent}>
              <h3 className={styles.teamBoxItemTitle3}>
                後勤小隊
              </h3>
              <p className={styles.teamBoxBody}>
                <span className={styles.team3Subtitle}>任務</span>     協助專案的基礎建設
              </p>
              <p className={styles.teamBoxBody}>
                <span className={styles.team3Subtitle}>適合</span>   各方專業人士、各方英才、歷史學家、文案寫手、工程師、設計師、社群經營等等等，有錢出錢有力出力的熱血份子
              </p>
              <button className={styles.teamBoxButton3}> 貢獻去 </button>
            </div>
          </div>
        </div>

        <div className={styles.contentBody}>
          <img src={badge2} className={styles.bodyBadge} />
          <h3 className={styles.bodyTitle}>
            尋寶足跡
          </h3>
          <div className={styles.bodyArchiveInfo}>
            <div className={styles.archiveLogo}>
              <img src={archiveLogo} className={styles.logos} style={{ opacity: 1}} />
              <img src={UNLogo} className={styles.logos} />
              <img src={LOCLogo} className={styles.logos} />
              <img src={hooverLogo} className={styles.logos} />
              <img src={TNALogo} className={styles.logos} />
              <img src={JNALogo} className={styles.logos} />
              <img src={dutchLogo} className={styles.logos} />
            </div>
            <div className={styles.bodyArchiveInfoContent}>
              <div className={styles.bodyArchiveInfoContentItem}>
                <h5 className={styles.bodyArchiveInfoContentItemTitle1}>美國國家檔案局</h5>
                <p className={styles.bodyArchiveInfoContentItemBody}>美國國家檔案局 - National Archives and Records Administration (以下簡稱 NARA)，座落在馬里蘭州的 College Park ，在首府華盛頓 DC 北方約 30 分鐘車程 ，Baltimore (金鶯隊主場) 南方約 40 分車程處。 1993年由國會議員 Steny Hoyer 協調馬里蘭大學捐出部分校地修建而成，進而取代在華府的 NARA 總部，變成主要珍藏開放的聯邦文件的所在，因此馬里蘭的 NARA 又簡稱 NARA II 。</p>
              </div>
              <div className={styles.bodyArchiveInfoContentItem}>
                <h5 className={styles.bodyArchiveInfoContentItemTitle}>開團時間</h5>
                <p className={styles.bodyArchiveInfoContentItemBody}> 8/15 8AM 紐約 -> 檔案局 </p>
                <p className={styles.bodyArchiveInfoContentItemBody}> 9/10 8AM 華盛頓DC -> 檔案局 </p>
              </div>
            </div>
          </div>
          <h3 className={styles.bodyTitle2}>
            尋寶指南
          </h3>
          <div style={{ display: 'flex', color: 'white', marginLeft: '23%', marginTop: '36px', paddingBottom: '56px' }}>
            <img src={mockup} />
            <div style={{ marginLeft: '5%', width: '40%'}}>
              <p>想加入國家寶藏一起尋寶嗎？ 下載志工App ，一規他登裡機麼分說園步生生爾特住沒，間能海樂濟這何：著畫故深人展：備檢風人看山定小大近十養形看我成後好資你人來一發房歌而化近時河進區德、可我活己商過參護為智畫世引議科共。</p>
              <p>備檢風人看山定小大近十養形看我成後好資你人來一發房歌而化近時河進區德、可我活己商過參護為智畫世引議科共，一規他登裡機麼分說園步生生爾特住沒，間能海樂濟這何：著畫故深人展。</p>
              <img src={download} width={130} />
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
