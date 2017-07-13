import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import styles from '../styles.css';
import hero from '../assets/hero-img.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import navLogo from '../assets/nav-logo.png';
import doc1 from '../assets/docs/doc1.png';
import doc2 from '../assets/docs/doc2.png';
import doc3 from '../assets/docs/doc3.png';
import fish from '../assets/docs/fish.png';
import usaImg from '../assets/location-usa.png';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: '',
      scrollTop: 0,
    };
  }

  componentDidMount() {
     window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollTop: document.body.scrollTop || document.documentElement.scrollTop });
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit = () => {
    if (this.state.inputValue.includes('@')) {
      axios.post('https://5bq2v7mgi5.execute-api.us-east-1.amazonaws.com/prod/mySimpleBE', {
        "Item": {
          timestamp: `${new Date().getTime()}`,
          email: this.state.inputValue,
        },
        "TableName": 'TNT-Email'
      })
      .then((response) => {
        if (response.status === 200) {
          this.setState({ inputValue: '', message: 'Thank you! We will be in touch!' })
        }
      })
      .catch((err) => {
        this.setState({ message: err.message });
      })
    } else {
      this.setState({ message: 'Please enter a valid email!'});
    }
  }

  render() {
    const { scrollTop } = this.state;
    const easing = (startPosition, endPosition) => {
      if (startPosition > endPosition || scrollTop > endPosition) {
        return 1;
      } else if (scrollTop < startPosition) {
        return 0;
      }
      return 1 - ((endPosition - scrollTop) / (endPosition - startPosition));
    }
    return (
      <div className={styles.box}>
        <div className={styles.navBar} style={{ opacity: easing(481, 560) }}>
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
        <img src={logo} className={styles.logo} />
        <img src={mobileLogo} className={styles.mobileLogo} />
        <div className={styles.navBox}>
          <div className={styles.navBoxItem} >
            參與尋寶
          </div>
          <div className={styles.navBoxItem} >
            寶藏庫
          </div>
          <div className={styles.navBoxItem} >
            故事
          </div>
          <div className={styles.navBoxItem} >
            聯絡我們
          </div>
        </div>
        {/*<div className={styles.inputGroup}>
          <div style={{display: 'inline-flex'}}>
            <input placeholder="join@nltr.tw" type="email" onChange={this.handleInput} value={this.state.inputValue} className={styles.emailInput} />
            <div className={styles.button} onClick={this.handleSubmit}>Submit </div>
          </div>
          <p style={{color: '#D0011B'}}> {this.state.message} </p>
        </div>*/}
        <img src={hero} className={styles.taiwan} />
        <div className={styles.sectionRight}>
          <h4 className={styles.sectionTitle}>歷史是屬於你我、屬於每一個人民的。</h4>
          <p className={styles.sectionItem}>關於台灣過去的拼圖，散落在全世界的各個角落。我們需要把它們找出來、加以數位化，轉譯成為人人都可取用的開放資料與有意義的歷史故事；在拼湊這些線索的過程中，讓台灣人民得以認識自身的歷史與真相。</p>
          <img src={doc1} className={styles.doc1Img} style={{ opacity: easing(0, 600) - 0.2, /* marginTop: 100 * (1 - easing(0, 600)) */ }} />
        </div>
        <div className={styles.sectionLeft}>
          <img src={doc2} className={styles.doc2Img} style={{ opacity: easing(461, 968) - 0.2 }} />
          <div className={styles.sectionLeftContent} >
            <h4 className={styles.sectionTitle}>為什麼是國家寶藏？</h4>
            <p className={styles.sectionItemNarrow} >包括英美等國家這一百多年以來對台灣社會、地理、人物所做下的情蒐紀錄，提供了台灣人在回顧自己的過去時，更豐富的材料與角度，以及不同的思維，去重新描繪台灣人曾經的生活面貌。
  在這裡，我們希望將這些資料重新進入公眾視野內，結合每個人獨特的視角，去重新書寫出台灣人生活的故事。</p>
            <h4 className={styles.sectionTitle2}>加入國家寶藏</h4>
            <p className={styles.sectionItem}>國家寶藏第一站是在美國首府(D.C.)外的國家檔案局 National Archives and Records Administration - NARA II。 只要攜帶你的photo ID與手機，下載國家寶藏App，就能入館進行資料翻拍。藉由我們的App，每一位志工翻拍的文件，都會自動進入國家寶藏資料庫建檔並文字化，方便民眾檢索瀏覽。</p>
            <div className={styles.buttonGroup} >
              <button className={styles.btnBrownLeft} >想知道更多？</button>
              <button className={styles.btnBrown} >想追蹤動態？</button>
              <button className={styles.btnBrownRight} >無法親自參與翻拍嗎？</button>
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
                - (暫定）Hoover Institution, Library & Archives (Stanford University) <br />
              </p>
              <div className={styles.buttonGroup} >
                <button className={styles.btnBrownInfo}>提供尋寶情報</button>
              </div>
              <h4 className={styles.sectionTitleUSA}>近期活動</h4>
              <p className={styles.sectionItemGroups} >
                7/5 NARA 採寶團 >> JOIN!
              </p>
              <p className={styles.sectionItemGroups} >
                8/10 UN 採寶團 >> JOIN!
              </p>
              </div>
          </div>
        </div>
        <div className={styles.gallerySection}>
          <img src={doc3} className={styles.doc3Img} style={{ opacity: easing(1600, 2100) - 0.2 }} />
          <img src={fish} className={styles.fishImg} />
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <div>Email：join@nltr.tw</div>
              <div>Facebook：fb.me/twnationaltreasure</div>
              <div>Web：nationaltreasure.tw</div>
              <div>Donate：請寄支票到 Taiwan National Treasure Foundation 431 W. 37st #9A New York, NY 10018</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
