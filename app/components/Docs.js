import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions/documents';
import axios from 'axios';
import NavHeader from './NavHeader';
import FooterContent from './FooterContent';
import styles from '../styles.css';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import poweredBy from '../assets/poweredby.png';
import userTable from '../helpers/userTable';

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
    const { params, treasureBox } = nextProps;
    const uid = params.documentId.split('@')[0];
    const { documents } = this.props.treasureBox;

    if (params.documentId !== this.props.params.documentId) {
      this.props.getSingleDoc(uid);
    }

    if (!!treasureBox.selectedDocs[uid] && !this.props.treasureBox.selectedDocs[uid]) {
      const tag = treasureBox.selectedDocs[uid].primaryTag;
      const box = treasureBox.selectedDocs[uid].metadata.box;
      this.props.selectTag(tag);

      if (treasureBox.documents.findIndex(e => e.uid === uid) === -1) {
        this.props.hydrateDocs(uid, tag, treasureBox);
      }
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

    const enTags = (data.nlpEn && data.nlpEn.length > 0)  && _.uniqBy(data.nlpEn[0].entities, 'name').slice(0, 12).filter(e => e.name !== 'DECLASSIFIED' && e.name !== 'Authority' && e.name !== 'DECLASSIFIED Authority')
    .map(e => (
      <li className={styles.tagBoxItem} key={e.name + e.salience}>
        {e.name}
      </li>
    ));

    const zhTags = (data.nlpZh && data.nlpZh.length > 0) && _.uniqBy(data.nlpZh[0].entities, 'name').slice(0, 12).filter(e => e.name !== '解密' && e.name !== '權威' && e.name !== '解密權威')
    .map(e => (
      <li className={styles.tagBoxItem} key={e.name + e.salience}>
        {e.name}
      </li>
    ));

    const contributor = data.userId && userTable[data.userId];

    return (
      <div className={styles.treasureBox}>
        <div className={styles.triangle}>
          <p className={styles.triangleContent}>寶藏庫</p>
        </div>
        <NavHeader />
        <div className={styles.docBody}>
          <div className={styles.docInfoBox}>
            <div className={styles.docInfoTitle}>
              分類: {treasureBox.selectedTag}
            </div>
            {lastDocUid &&
                <Link to={`/documents/${lastDocUid}@${+docIndex - 1}`}>
                  <button className={styles.lowerRightButton}><FontAwesome name='chevron-left' /> 上一張</button>
                </Link>
              }
            <Link to="/treasure"><button className={styles.lowerRightButton}><FontAwesome name='chevron-up' /> 回上層</button></Link>
              {nextDocUid &&
                <Link to={`/documents/${nextDocUid}@${+docIndex + 1}`}>
                  <button className={styles.lowerRightButtonNext}>下一張 <FontAwesome name='chevron-right' /></button>
                </Link>
              }
          </div>
          <div className={styles.docImgBox}>
            <div className={styles.docImgFrame}>
              <div className={styles.docInfoStatus}>
                文獻狀態：尚未矯正
              </div>
              <div className={styles.docInfoContributor}>
                貢獻者：{contributor}
              </div>
              <img src={data.resizedUrls && data.resizedUrls.largeUrl} className={styles.docImg} />
              <div className={styles.lowerRightButtonGroup}>
                <button className={styles.lowerRightButton}><FontAwesome name='download' /> 下載圖檔</button>
                <button className={styles.lowerRightButton}><FontAwesome name='heart' /> 0</button>
              </div>
            </div>
            <div className={styles.docDataBox}>
              <Link to="/treasure"><button className={styles.storyButton}><FontAwesome name='book' /> 看寶藏故事</button></Link>
              <div className={styles.tagBoxLabel}>
                標籤：
              </div>
              <div className={styles.tagBox}>
                <ul style={{ width: enTags && 78 * enTags.length + 100}} className={styles.tagBoxContent}>
                  {data.ocr && (ocrMode === 'En' ? enTags : zhTags)}
                </ul>
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
