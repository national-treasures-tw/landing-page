import React from 'react';
import { Link } from 'react-router';
import styles from '../styles.css';
import logo from '../assets/hero-menu-logo.png';
import badge3 from '../assets/participants/badge-3.png';
import screenshot from '../assets/participants/screenshot.png';
import poweredBy from '../assets/poweredby.png';

export default class Support extends React.Component {
  render() {
    return (
      <div className={styles.contentBody} id="toHere">
        <img src={badge3} className={styles.bodyBadge} />
        <h3 className={styles.bodySupportTitle}>
          寶物鑑定
        </h3>
        <p className={styles.supportSubtitle}>
          每份文件國家寶藏平台都會透過文字化科技將圖片上的文字擷取下來，透過機器做最初步的翻譯，並且使用 Natural Language Processing (NLP) 來分析內文為文件做標籤。
          但機器終究（還）沒有人類聰明，使用者在瀏覽文件時總會發現不論是文字化、翻譯、還是標籤都做得差強人意。
          此時，各位有意願投入國家寶藏鑑定小隊的志工們就可以按鈕進入「校正模式」幫忙將文件的文字化以及翻譯做編輯。
          我們希望透過群眾的參與力量讓每份文件的資料都能達到最佳化，讓將來需要查詢資料的民眾更加便利！
        </p>
        <div className={styles.bodyCalibrateInfo}>
          <img src={screenshot} width={750} height={600} className={styles.bodyCalibrateImg} />
          <Link to="/treasure"><button className={styles.calibrateButton}>開始鑑定</button></Link>
        </div>
      </div>
    );
  }
}
