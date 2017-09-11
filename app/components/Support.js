import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';
import styles from '../styles.css';
import logo from '../assets/hero-menu-logo.png';
import badge1 from '../assets/participants/badge-1.png';
import poweredBy from '../assets/poweredby.png';
import { STRIPE_KEY } from '../env';

export default class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDonating: false,
      donateAmount: 0,
      donateMsg: ''
    }

    this.CheckoutHandler = StripeCheckout.configure({
      key: STRIPE_KEY || 'pk_test_FWjXEBDiJRrNL1FNJMOP0Jrm',
      image: 'https://www.nationaltreasure.tw/logo.png',
      locale: 'auto',
      name: 'Taiwan National Treasure',
      panelLabel: 'Donate',
      description: 'Your donation is important to us',
      token: (token) => {
        // console.log(token);
        axios.post('https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/donation', {
          token: token.id,
          email: token.email,
          amount: (this.state.donateAmount || 10) * 100
        });

        this.setState({ isDonating: false, donateMsg: '感謝您的支持，我們會更加努力開採寶藏！'})
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });
  }


  handleDonation = () => {
    const { donateAmount } = this.state;

    if (donateAmount < 0) {
      alert('請輸入正確捐款金額');
    } else {
      this.CheckoutHandler.open({
      amount: (donateAmount || 10) * 100
    })
    }
  }

  componentWillUnmount() {
    this.CheckoutHandler.close();
  }

  handleOpenDonationBox = () => {
    this.setState({ isDonating: true });
  }

  handleDonateAmount = (event) => {
    this.setState({ donateAmount: event.target.value });
  }

  render() {
    const { isDonating, donateMsg } = this.state;

    return (
      <div className={styles.contentBody} id="toHere">
        <img src={badge1} className={styles.bodyBadge} />
        <h3 className={styles.bodySupportTitle}>
          後勤據點
        </h3>
        <p className={styles.supportSubtitle}>
          國家寶藏是一個開源協作的專案，在此平台上的任何文件圖像、程式原始碼、設計素材都是開源的。
          我們歡迎任何人除了向我們提出意見外，也可以捲起袖子一起動手實作： 不論是寫寫文案、
          畫畫設計、甚至是直接改動程式碼，都是讓國家寶藏可以永續經營的動能來源！
        </p>
        <p className={styles.supportSubtitle}>
          想貢獻但不知怎麼入手嗎？ 沒關係，您可以按下捐款贊助給我們最直接的支援！每一張翻拍的文件，
          都是志工辛苦坐車到偏僻的藏寶處採集回來的，採寶後我們平台後端做的各種處理包括
          文字化(OCR)都很燒資源。 您的金援將幫助我們源源不絕的開採新的國家寶藏！
        </p>
        <div className={styles.bodySupportInfo}>
          <div className={styles.supportButtonContainer}>
            <a href="https://github.com/national-treasures-tw" target="_blank">
              <button className={styles.supportButton}><FontAwesome name='github' /> <b>GitHub</b></button>
            </a>
            <p className={styles.supportButtonSubtitle}>軟體工程師 (前後端、iOS / Android)</p>
          </div>
          <div className={styles.supportButtonContainer}>
            <a href="http://beta.hackfoldr.org/national-treasures" target="_blank">
             <button className={styles.supportButton}>專案協作主頁</button>
            </a>
            <p className={styles.supportButtonSubtitle}>介面設計師、歷史學家、文案寫手</p>
          </div>
          <div className={styles.supportButtonContainer}>
            <button className={styles.supportButton} onClick={this.handleOpenDonationBox}>捐款贊助</button>
             <p className={styles.supportButtonSubtitle}>任何人</p>
          </div>
          {isDonating &&
          <div className={styles.donateButtonContainer}>
            <p className={styles.donateButtonSubtitle}>捐款金額 (美金)</p>
            <FontAwesome name='usd' style={{ color: 'white', marginRight: 5 }} /><input placeholder="10" type="number" className={styles.donateInput} onChange={this.handleDonateAmount} />
            <button className={styles.donateButton} onClick={this.handleDonation}>下一步</button>
          </div>
          }
          {donateMsg &&
          <div className={styles.donateButtonContainer}>
            <p className={styles.supportButtonSubtitle}>{donateMsg}</p>
          </div>
          }
        </div>
      </div>
    );
  }
}
