import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import styles from '../styles.css';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import archiveLogo from '../assets/participants/archiveLogo.png';
import badge2 from '../assets/participants/badge-2.png';
import UNLogo from '../assets/participants/UN.jpg';
import mockup from '../assets/participants/mockup.png';
import download from '../assets/participants/download.png';

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
      <div className={styles.contentBody} id="toHere">
        <img src={badge2} className={styles.bodyBadge} />
        <h3 className={styles.bodyTitle}>
          尋寶足跡
        </h3>
        <div className={styles.bodyArchiveInfo}>
          <div className={styles.archiveLogo}>
            <img src={archiveLogo} className={styles.logos} style={{ opacity: 1}} />
            {/*<img src={UNLogo} className={styles.logos} />*/}
          </div>
          <div className={styles.bodyArchiveInfoContent}>
            <div className={styles.bodyArchiveInfoContentItem}>
              <h5 className={styles.bodyArchiveInfoContentItemTitle1}>美國國家檔案局</h5>
              <p className={styles.bodyArchiveInfoContentItemBody}>美國國家檔案局 - National Archives and Records Administration (以下簡稱 NARA)，座落在馬里蘭州的 College Park ，在首府華盛頓 DC 北方約 30 分鐘車程 ，Baltimore (金鶯隊主場) 南方約 40 分車程處。 1993年由國會議員 Steny Hoyer 協調馬里蘭大學捐出部分校地修建而成，進而取代在華府的 NARA 總部，變成主要珍藏開放的聯邦文件的所在，因此馬里蘭的 NARA 又簡稱 NARA II 。</p>
            </div>
            <div className={styles.bodyArchiveInfoContentItem}>
              <h5 className={styles.bodyArchiveInfoContentItemTitle1}>開團時間</h5>
              <p className={styles.bodyArchiveInfoContentItemBody}> 8/24 <FontAwesome name='bus' /> 8AM 紐約 <FontAwesome name='arrow-right' /> 檔案局 </p>
              <p className={styles.bodyArchiveInfoContentItemBody}> 9/26 <FontAwesome name='bus' /> 8AM 華盛頓DC <FontAwesome name='arrow-right' /> 檔案局 </p>
            </div>
          </div>
        </div>
        <h3 className={styles.bodyTitle2}>
          尋寶神器 志工APP
        </h3>
        <div className={styles.appSection} >
          <img src={mockup} width={300} height={550} />
          <div className={styles.appSectionBody} >
            <p className={styles.volunteerBodyText}>想加入國家寶藏一起尋寶嗎？ 下載國家寶藏志工App ，到藏寶場打開，即可接收任務分配，開始進行翻拍上傳。</p>
            <p className={styles.volunteerBodyText}>國家寶藏志工APP 會紀錄每位志工翻拍成績並在每季公布尋寶英雄榜，讓每個任務都充滿競爭趣味！</p>
            <img src={download} width={130} />
          </div>
        </div>
      </div>
    );
  }
}
