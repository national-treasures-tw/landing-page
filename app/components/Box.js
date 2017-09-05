import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
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
      showDropdown: false
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

  handleSwitchTag = (tag) => {
    this.setState({ showDropdown: false });
    this.props.selectTag(tag);
    this.props.loadDocs(tag, null, true);
  }

  handleLoadMoreDocs = () => {
    const { treasureBox } = this.props;
    this.props.loadDocs(treasureBox.lastKey.primaryTag, treasureBox.lastKey);
  }

  render() {
    const { treasureBox } = this.props;
    const { selected, isLoading, showDropdown } = this.state;
    const images = treasureBox.documents;

    const gallery = images.length > 0 ? images.map((image, index) => (image.resizedUrls && image.resizedUrls.smallUrl) && (
      <div key={image.uid}>
        <Link to={`/documents/${image.uid}@${index}`}><img src={image.resizedUrls.smallUrl} className={styles.docItem} style={image.resizedUrls.toBeRotatedBy ? { transform: `rotate(${image.resizedUrls.toBeRotatedBy}deg)` } : {}} /></Link>
        {/*<button onClick={() => this.handleDelete(image.uid)}>DELETE</button>
           <button onClick={() => this.handleRotate(image.uid)}>ROTATE</button>*/}
    </div>
    )) : null;

    const primaryTagOptions = primaryTagGroup.map(tag => (
      <li key={tag} className={styles.firstCategoryDropdownListItem} onClick={() => this.handleSwitchTag(tag)}> {tag} </li>
    ))

    const truncateString = (string) => string.length > 6 ? string.substr(0, 6) + '...' : string;

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
          </div>
          <div className={styles.treasureContainer}>
             {gallery}
          </div>
          {treasureBox.isFetching && (
            <div style={{ marginBottom: 150 }} className={styles.loader} >
              <div className={styles.loaderContent} />
            </div> )
          }
          {treasureBox.lastKey && <button className={styles.loadMoreButton} onClick={this.handleLoadMoreDocs}>載入更多</button>}
        </div>
        <div className={styles.generalFooter}>
          <FooterContent />
        </div>
      </div>
    );
  }
}

export default connect(({ treasureBox }) => ({ treasureBox }), actions)(Box);
