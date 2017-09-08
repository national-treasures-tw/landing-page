import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import styles from '../styles.css';
import logo from '../assets/hero-menu-logo.png';
import badge1 from '../assets/participants/badge-1.png';
import poweredBy from '../assets/poweredby.png';

const CheckoutHandler = StripeCheckout.configure({
  key: process.env.STRIPE_KEY || 'pk_test_FWjXEBDiJRrNL1FNJMOP0Jrm',
  image: 'https://www.nationaltreasure.tw/logo.png',
  locale: 'auto',
  name: 'Taiwan National Treasure',
  panelLabel: 'Donate',
  description: 'Thank you for donating to TNT. It will keep us running!',
  token: (token) => {
    console.log(token);
    // You can access the token ID with `token.id`.
    // Get the token ID to your server-side code for use.
  }
});

export default class Support extends React.Component {

  handleDonation = () => {
    CheckoutHandler.open({
      amount: 2000
    })
  }

  componentWillUnmount() {
    CheckoutHandler.close();
  }

  render() {
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
            <button className={styles.supportButton} onClick={this.handleDonation}>捐款贊助</button>
             <p className={styles.supportButtonSubtitle}>有可支配收入的好人、慈善家</p>
          </div>
        </div>
      </div>
    );
  }
}
