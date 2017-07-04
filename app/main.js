import React from 'react';
import { render } from 'react-dom';
import styles from './styles.css';
import hero from './assets/hero-img.png';
import logo from './assets/hero-menu-logo.png';
import doc1 from './assets/docs/doc1.png';
import doc2 from './assets/docs/doc2.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: '',
    };
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
    return (
      <div className={styles.box}>
        <img src={logo} className={styles.logo} />
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
          <p>關於台灣過去的拼圖，散落在全世界的各個角落。我們需要把它們找出來、加以數位化，轉譯成為人人都可取用的開放資料與有意義的歷史故事；在拼湊這些線索的過程中，讓台灣人民得以認識自身的歷史與真相。</p>
          <img src={doc1} />
        </div>
        <div className={styles.sectionLeft}>
          <img src={doc2} className={styles.doc2Img} />
          <div className={styles.sectionLeftContent} >
            <h4 className={styles.sectionTitle}>為什麼是國家寶藏？</h4>
            <p className={styles.sectionItem} >包括英美等國家這一百多年以來對台灣社會、地理、人物所做下的情蒐紀錄，提供了台灣人在回顧自己的過去時，更豐富的材料與角度，以及不同的思維，去重新描繪台灣人曾經的生活面貌。
  在這裡，我們希望將這些資料重新進入公眾視野內，結合每個人獨特的視角，去重新書寫出台灣人生活的故事。</p>
            <h4 className={styles.sectionTitle}>加入國家寶藏</h4>
            <p>國家寶藏第一站是在美國首府(D.C.)外的國家檔案局 National Archives and Records Administration - NARA II。 只要攜帶你的photo ID與手機，下載國家寶藏App，就能入館進行資料翻拍。藉由我們的App，每一位志工翻拍的文件，都會自動進入國家寶藏資料庫建檔並文字化，方便民眾檢索瀏覽。</p>
          </div>
        </div>
		<div className={styles.footer}>
	     <p>Email: join@nltr.tw</p>
		 <p>Facebook:fb.me/twnationaltreasure</p>
		 <p>Web:nationaltreasure.tw</p>
		 <p>Donate:請寄支票到 Taiwan National Treasure Foundation</p>
		 <p>431 W.37st #9A New Work, NY 10018</p>
		</div>
		 
      </div>
	  
    );
  }
}

render(<App footer= "I am the footer"/>, document.getElementById('app'));
