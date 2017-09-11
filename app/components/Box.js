import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import LazyLoad from 'react-lazy-load';
import _ from 'lodash';
import * as actions from '../actions/documents';
import NavHeader from './NavHeader';
import FooterContent from './FooterContent';
import styles from '../styles.css';
import background from '../assets/participants/background-2.png';
import logo from '../assets/hero-menu-logo.png';
import mobileLogo from '../assets/mobile-menu-logo.png';
import badge3 from '../assets/participants/badge-3.png';
import poweredBy from '../assets/poweredby.png';

const primaryTagGroup = ['中美斷交', '聯合國', '美援', '電影放映資料', '廣播問卷', '台北州（Taihoku）美國領事館資料', '台北州（Taihoku）美國領事館資料 戰後領事館重新運作'];

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      isLoading: false,
      isDebugging: false,
      scrollTop: 0,
      showDropdown: false,
      showSecondaryDropdown: false
    };
  }

  componentDidMount() {
    const { loadDocs, treasureBox } = this.props;
    if (treasureBox.documents.length === 0) {
      this.props.loadDocs();
    }
  }

  handleDelete = (uid) => {
    axios({
      method: 'DELETE',
      url: 'https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload',
      data: { uid }
    })
    .then((res) => {
      // this.setState({ images: this.state.images.filter(e => e.uid !== uid )})
      console.log('success')
    })
    .catch((err) => alert(err.message))
  }

  handleRotate = (uid) => {
    console.log(uid)
    const { images } = this.state;
    const updatedImages = images.map(e => e.uid === uid ? { ...e, resizedUrls: { ...e.resizedUrls, toBeRotatedBy: 90 + (e.resizedUrls.toBeRotatedBy || 0)}} : e );
    // this.setState({ images: updatedImages });
  }

  handleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  handleSecondaryDropdown = () => {
    this.setState({ showSecondaryDropdown: !this.state.showSecondaryDropdown });
  }

  handleSwitchTag = (tag) => {
    this.setState({ showDropdown: false });
    this.props.selectTag(tag);
    this.props.loadDocs(tag, null, true);
  }

  handleLoadMoreDocs = () => {
    const { treasureBox } = this.props;
    this.props.loadDocs(treasureBox.lastKey.primaryTag, treasureBox.lastKey);
  }

  handleSwitchFilterBySecondaryTag = (secondaryTag, label) => {
    this.setState({ showSecondaryDropdown: false });
    this.props.selectFilter(secondaryTag, label);
  }

  render() {
    const { treasureBox } = this.props;
    const { selected, isLoading, showDropdown, showSecondaryDropdown } = this.state;
    const images = treasureBox.documents;
    const truncateString = (string, number) => string.length > (number || 6) ? string.substr(0, number || 6) + '...' : string;

    const gallery = images.length > 0 ? images.map((image, index) => (image.resizedUrls && image.resizedUrls.smallUrl) && (
      <div key={image.uid}>
        <Link to={`/documents/${image.uid}@${index}`}>
         <div className={styles.docItem}>
            <LazyLoad height={320}>
              <img src={image.resizedUrls.smallUrl} />
            </LazyLoad>
          </div>
        </Link>
        {/*<button onClick={() => this.handleDelete(image.uid)}>DELETE</button>
           <button onClick={() => this.handleRotate(image.uid)}>ROTATE</button>*/}
    </div>
    )) : null;

    const primaryTagOptions = primaryTagGroup.map(tag => (
      <li key={tag} className={styles.firstCategoryDropdownListItem} onClick={() => this.handleSwitchTag(tag)}> {tag} </li>
    ))

    const secondaryGroupOptions = treasureBox.selectedTag === '美援' && (
      _.uniqBy(treasureBox.documentsCopy, 'metadata.box').map(e => {
        const label = truncateString(e.metadata.title, 40) + ` Box: ${e.metadata.box}`;
        const fullLabel = `${e.metadata.title} Box: ${e.metadata.box}`;
        return <li key={e.userId} className={styles.firstCategoryDropdownListItem} onClick={() => this.handleSwitchFilterBySecondaryTag(e.metadata.box, fullLabel)}> {label} </li>
      })
    )

    const galleryTitle = images[0] && `${images[0].metadata.title} Box: ${images[0].metadata.box}`;

    const dontShowLabel = (treasureBox.filterLabel === 'All' && treasureBox.selectedTag === '美援') || treasureBox.selectedTag === '聯合國';

    const isMobile = window.innerWidth < 415;

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
            <div className={styles.firstCategoryControl} onClick={this.handleDropdown}>
              <div>分類: {truncateString(treasureBox.selectedTag)}</div> <div className={styles.treasureControlTriangle}></div>
            </div>
            {showDropdown && (
              <div className={styles.firstCategoryDropdown}>
                <ul className={styles.firstCategoryDropdownList}>
                  {primaryTagOptions}
                </ul>
              </div>
            )}
            {treasureBox.selectedTag === '美援' && (
              <div>
                <div className={styles.secondCategoryControl} onClick={this.handleSecondaryDropdown}>
                  <div>次分類: {truncateString(treasureBox.filterLabel, isMobile ? 8 : 30)}</div> <div className={styles.treasureControlTriangle}></div>
                </div>
                {showSecondaryDropdown && (
                  <div className={styles.secondCategoryDropdown}>
                    <ul className={styles.firstCategoryDropdownList}>
                      {secondaryGroupOptions}
                    </ul>
                  </div>
                )}
              </div>
              )
            }
          </div>
          {!dontShowLabel && <p className={styles.galleryTitle}>{galleryTitle} </p>}
          <div className={styles.treasureContainer}>
            {gallery}
          </div>
          {treasureBox.isFetching && (
            <div style={{ marginBottom: 150, width: 200, height: 200 }} className={styles.loader} >
              <div className={styles.loaderContent} style={{ width: 100, height: 100 }} />
            </div> )
          }
          {(treasureBox.lastKey && !treasureBox.isFetching) && <button className={styles.loadMoreButton} onClick={this.handleLoadMoreDocs}>載入更多</button>}
        </div>
        <div className={styles.generalFooter}>
          <FooterContent />
        </div>
      </div>
    );
  }
}

export default connect(({ treasureBox }) => ({ treasureBox }), actions)(Box);
