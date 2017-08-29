import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/documents';
import axios from 'axios';
import NavHeader from './NavHeader';
import FooterContent from './FooterContent';
import styles from '../styles.css';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import poweredBy from '../assets/poweredby.png';

class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      ocrMode: 'En'
    };
  }
  componentDidMount() {
    const { params, getSingleDoc, treasureBox } = this.props;
    const uid = params.documentId.split('@')[0];

    if (!treasureBox.selectedDocs[uid]) {
      getSingleDoc(uid);
    }

    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps;
    const uid = params.documentId.split('@')[0];

    if (params.documentId !== this.props.params.documentId) {
      this.props.getSingleDoc(uid);
    }
  }

  handleKeyDown = (event) => {
    const { params, treasureBox } = this.props;
    const docIndex = params.documentId.split('@')[1];
    let lastDocUid;
    if (docIndex !== '0') {
      lastDocUid = treasureBox.documents[+docIndex - 1] && treasureBox.documents[+docIndex - 1].uid;
    }

    const nextDocUid = treasureBox.documents[+docIndex + 1] && treasureBox.documents[+docIndex + 1].uid;
    if (event.key === 'ArrowRight' && nextDocUid) {
      this.props.history.push(`/documents/${nextDocUid}@${+docIndex + 1}`)
    } else if (event.key === 'ArrowLeft' && lastDocUid) {
      this.props.history.push(`/documents/${lastDocUid}@${+docIndex - 1}`)
    }
  }

  handleSwitchOCRMode = (mode) => {
    this.setState({ ocrMode: mode });
  }

  render() {
    const { ocrMode } = this.state;
    const { params, treasureBox } = this.props;
    const uid = params.documentId.split('@')[0];
    const docIndex = params.documentId.split('@')[1];
    const data = treasureBox.selectedDocs[uid] || {};
    let lastDocUid;
    if (docIndex !== '0') {
      lastDocUid = treasureBox.documents[+docIndex - 1] && treasureBox.documents[+docIndex - 1].uid;
    }

    const nextDocUid = treasureBox.documents[+docIndex + 1] && treasureBox.documents[+docIndex + 1].uid;

    return (
      <div className={styles.treasureBox}>
        <div className={styles.triangle}>
          <p className={styles.triangleContent}>寶藏庫</p>
        </div>
        <NavHeader />
        <div className={styles.docBody}>
          <div className={styles.docInfoBox}>
            <div className={styles.docInfoTitle}>
              分類: 中美斷交
            </div>
            <div className={styles.docInfoStatus}>
              文獻狀態：尚未矯正
            </div>
            <div className={styles.docInfoContributor}>
              貢獻者：賞金獵人蕭A
            </div>
            <Link to="/treasure"><button>回上層</button></Link>
          </div>
          <div className={styles.docImgBox}>
            <div className={styles.docImgFrame}>
              <img src={data.resizedUrls && data.resizedUrls.largeUrl} className={styles.docImg} />
              <div className={styles.lowerRightButtonGroup}>
                <button className={styles.lowerRightButton}>下載圖檔</button>
                <button className={styles.lowerRightButton}>Love 12</button>
              </div>
              {lastDocUid &&
                <Link to={`/documents/${lastDocUid}@${+docIndex - 1}`}>
                  <button className={styles.lowerRightButton}>上一張</button>
                </Link>
              }
              {nextDocUid &&
                <Link to={`/documents/${nextDocUid}@${+docIndex + 1}`}>
                  <button className={styles.lowerRightButton}>下一張</button>
                </Link>
              }
          </div>
            <div className={styles.docDataBox}>
              <div>
                標籤:
              </div>
              <div className={styles.tagBox}>
                一堆標籤
              </div>
              <div className={styles.ocrControls}>
                <div
                  className={ocrMode === 'En' ? styles.ocrControlItemActive : styles.ocrControlItem}
                  onClick={() => this.handleSwitchOCRMode('En')}
                >
                  內文
                </div>
                <div
                  className={ocrMode === 'Zh' ? styles.ocrControlItemActive : styles.ocrControlItem}
                  onClick={() => this.handleSwitchOCRMode('Zh')}
                >
                  翻譯
                </div>
              </div>
              <div className={styles.ocrBox}>
                {data.ocr && (ocrMode === 'En' ? data.ocr[0] : data.translate[0])}
              </div>
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

export default connect(({ treasureBox }) => ({ treasureBox }), actions)(Docs);
