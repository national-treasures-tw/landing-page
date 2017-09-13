import React from 'react';
import NavHeader from './NavHeader';
import { Link } from 'react-router';
import { Helmet } from "react-helmet";
import styles from '../styles.css';
import hero from '../assets/hero-img.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import navLogo from '../assets/nav-logo.png';
import doc1 from '../assets/docs/doc1.png';
import doc2 from '../assets/docs/doc2.png';
import doc3 from '../assets/docs/doc3.png';
import fish from '../assets/docs/fish.png';
import poweredBy from '../assets/poweredby.png';
import usaImg from '../assets/location-usa.png';
import { easing } from '../helpers/math';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
     window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollTop: document.body.scrollTop || document.documentElement.scrollTop });
  }

  render() {
    const { scrollTop } = this.state;
    const isMobile = window.innerWidth < 415;
    return (
      <div>
        <Helmet>
          <title>國家寶藏</title>
          <meta name="description" content="關於台灣過去的拼圖，散落在全世界的各個角落。我們需要把它們找出來、加以數位化，轉譯成為人人都可取用的開放資料與有意義的歷史故事。" />
          <meta property="og:site_name" content="國家寶藏"/>
          <meta property="fb:app_id" content="1032864670166054" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="國家寶藏" />
          <meta property="og:url" content="https://www.nationaltreasure.tw" />
          <meta property="og:image" content="https://s3.amazonaws.com/www.nationaltreasure.tw/old/18558825_421220314943947_3448499869200618121_o.jpg" />
          <meta property="og:description" content="關於台灣過去的拼圖，散落在全世界的各個角落。我們需要把它們找出來、加以數位化，轉譯成為人人都可取用的開放資料與有意義的歷史故事。" />
        </Helmet>
        <div className={styles.landingBox} />
        <div className={styles.lowerLandingBox} />
        <NavHeader isLanding scrollTop={scrollTop} />
        <img src={logo} className={styles.logo} />
        <img src={mobileLogo} className={styles.mobileLogo} />
        <div className={styles.navBox}>
          <Link to="/participants/volunteers">
            <div className={styles.navBoxItem} >
              參與尋寶
            </div>
          </Link>
          <Link to="/treasure">
            <div className={styles.navBoxItem} >
              寶藏庫
            </div>
          </Link>
          <a href="https://www.facebook.com/twnationaltreasure/" target="_blank">
            <div className={styles.navBoxItem} >
              故事
            </div>
          </a>
          <a href="https://m.me/twnationaltreasure/" target="_blank">
            <div className={styles.navBoxItem} >
              聯絡我們
            </div>
          </a>
        </div>
        <img src={hero} className={styles.taiwan} />
        <div className={styles.sectionRight}>
          <h4 className={styles.sectionTitle}>歷史是屬於你我、屬於每一個人的。</h4>
          <p className={styles.sectionItem}>關於台灣過去的拼圖，散落在全世界的各個角落。我們需要把它們找出來、加以數位化，轉譯成為人人都可取用的開放資料與有意義的歷史故事；在拼湊這些線索的過程中，讓台灣人民得以認識自身的歷史與真相。</p>
          {!isMobile && <img src={doc1} className={styles.doc1Img} style={{ opacity: easing(0, 600, scrollTop) - 0.2, /* marginTop: 100 * (1 - easing(0, 600)) */ }} />}
        </div>
        <div className={styles.sectionLeft}>
          {!isMobile && <img src={doc2} className={styles.doc2Img} style={{ opacity: easing(461, 968, scrollTop) - 0.2 }} />}
          <div className={styles.sectionLeftContent} >
            <h4 className={styles.sectionTitle}>為什麼是國家寶藏？</h4>
            <p className={styles.sectionItemNarrow} >包括英美等國家這一百多年以來對台灣社會、地理、人物所做下的情蒐紀錄，提供了台灣人在回顧自己的過去時，更豐富的材料與角度，以及不同的思維，去重新描繪台灣人曾經的生活面貌。
  在這裡，我們希望將這些資料重新進入公眾視野內，結合每個人獨特的視角，去重新書寫出台灣人生活的故事。</p>
            <h4 className={styles.sectionTitle2}>加入國家寶藏</h4>
            <p className={styles.sectionItem}>國家寶藏第一站是在美國首府(D.C.)外的國家檔案局 National Archives and Records Administration - NARA II。 只要攜帶你的photo ID與手機，下載國家寶藏App，就能入館進行資料翻拍。藉由我們的App，每一位志工翻拍的文件，都會自動進入國家寶藏資料庫建檔並文字化，方便民眾檢索瀏覽。</p>
            <div className={styles.buttonGroup} >
              <Link to="/participants/volunteers"> <button className={styles.btnBrownLeft} >知道更多</button> </Link>
              <a href="https://www.facebook.com/twnationaltreasure/" target="_blank"> <button className={styles.btnBrown} >追蹤動態</button> </a>
              <Link to="/participants/supporters"> <button className={styles.btnBrownRight} >後勤貢獻</button> </Link>
            </div>
          </div>
        </div>
        <div className={styles.sectionLeftUSA}>
          <img src={usaImg} className={styles.usaImg} />
          <div className={styles.sectionLeftContent2} >
              <div className={styles.innerContent} >
              <h4 className={styles.sectionTitleUSA}>目前開團的尋寶點</h4>
              <p className={styles.sectionItemUSA} >
                - National Archives and Records Administration (Washington D.C.) <br />
                - United Nations Archives (New York City) <br />
                - (準備中）Hoover Institution, Library & Archives (Stanford University) <br />
              </p>
              <div className={styles.buttonGroup} >
                <a href="https://m.me/twnationaltreasure/" target="_blank"> <button className={styles.btnBrownInfo}>提供尋寶情報</button> </a>
              </div>
              <h4 className={styles.sectionTitleUSA}>近期活動</h4>
              <a href="https://www.facebook.com/events/391905794558270" target="_blank">
                <p className={styles.sectionItemGroups} >
                  9/19 UN 採寶團 >> JOIN!
                </p>
              </a>
              <a href="https://www.facebook.com/events/391905794558270" target="_blank">
                <p className={styles.sectionItemGroups} >
                  9/26 NARA 採寶團 >> JOIN!
                </p>
              </a>
              </div>
          </div>
        </div>
        <div className={styles.gallerySection}>
          {!isMobile && <img src={doc3} className={styles.doc3Img} style={{ opacity: easing(1600, 2100, scrollTop) - 0.2 }} />}
          {!isMobile && <img src={fish} className={styles.fishImg} />}
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <a href="https://grants.g0v.tw/power" target="_blank"><img src={poweredBy} className={styles.poweredBy} /> </a>
              <div className={styles.footerInfo}>
                <div><b>Taiwan National Treasure Foundation</b></div>
                <div>Email：join@nltr.tw</div>
                <div>Facebook：fb.me/twnationaltreasure</div>
                <i style={{ fontSize: 12 }}>TNTF is a US 501(c)(3) public charity nonprofit org </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
