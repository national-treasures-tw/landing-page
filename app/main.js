import React from 'react';
import { render } from 'react-dom';
import styles from './styles.css';
import hero from './assets/hero-img.png';
import logo from './assets/hero-menu-logo.png';
import doc1 from './assets/docs/doc1.png';

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
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
