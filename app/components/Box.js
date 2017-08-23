import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import NavHeader from './NavHeader';
import FooterContent from './FooterContent';
import styles from '../styles.css';
import background from '../assets/participants/background-2.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import badge3 from '../assets/participants/badge-3.png';
import poweredBy from '../assets/poweredby.png';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: '',
      images: [],
      selected: null,
      isLoading: false,
      isDebugging: false,
      scrollTop: 0,
    };
  }

  componentDidMount() {
    this.startLoading();
  }

  startLoading = () => {
    this.setState({ isLoading: true });
    this.getMoreImages()
    .then((res) => {
      if (res.data.length != this.state.images.length) {
        this.setState({ isLoading: false });
      }
      this.setState({ images: res.data });
    })
  }

  getMoreImages = () => {
    return axios.get('https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload');
  }

  render() {
    const { images, selected, isLoading, isDebugging } = this.state;
    const gallery = images.sort((image1, image2) => image2.timestamp - image1.timestamp ).map((image, index) => (image.smallUrl || image.resizedUrls.smallUrl) && (
      <div key={index}>
        <img onClick={() => this.handleSelect(index)} src={image.smallUrl || image.resizedUrls.smallUrl} className={styles.docItem} />
        <p>{(image.nlpEn && image.nlpEn.length > 0 && image.nlpEn[0].entities) ? image.nlpEn[0].entities.slice(0,1).map(e => `${e.name}, `) : 'tags'}</p>
      </div>
    ));

    return (
      <div className={styles.treasureBox}>
        <div className={styles.triangle}>
          <p className={styles.triangleContent}>寶藏庫</p>
        </div>
        <NavHeader />
        <img src={background} className={styles.backgroundHeroTreasure} />
        <div className={styles.treasureBody}>
          <img src={badge3} className={styles.treasureBadge} />
          <div className={styles.treasureControls}>
            標籤 and Stuff
          </div>
          <div className={styles.treasureContainer}>
            {gallery}
          </div>
        </div>
        <div className={styles.generalFooter}>
          <FooterContent />
        </div>
      </div>
    );
  }
}
