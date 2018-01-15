import React from 'react';
import NavHeader from './NavHeader';
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
import poweredBy from '../assets/poweredby.png';
import usaImg from '../assets/location-usa.png';
import { easing } from '../helpers/math';

export default class LandingEN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
     window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ scrollTop: document.body.scrollTop || document.documentElement.scrollTop });
  }

  render() {
    const { scrollTop } = this.state;
    const isMobile = window.innerWidth < 415;
    return (
      <div>
        <div className={styles.landingBox} />
        <div className={styles.lowerLandingBox} />
        <NavHeader isLanding scrollTop={scrollTop} path={this.props.route.path} />
        <img src={logo} className={styles.logo} />
        <img src={mobileLogo} className={styles.mobileLogo} />
        <div className={styles.navBox}>
          <Link to="/participants/volunteers">
            <div className={styles.navBoxItem} >
              Volunteer
            </div>
          </Link>
          <Link to="/treasure/en">
            <div className={styles.navBoxItem} >
              Treasure
            </div>
          </Link>
          <a href="https://www.facebook.com/twnationaltreasure/" target="_blank">
            <div className={styles.navBoxItem} >
              {"Stories"}
            </div>
          </a>
          <a href="https://m.me/twnationaltreasure/" target="_blank">
            <div className={styles.navBoxItem} >
              {"Contact"}
            </div>
          </a>
          <Link to="/">
            <div className={styles.navBoxItem} >
              中文
            </div>
          </Link>
        </div>
        <img src={hero} className={styles.taiwan} />
        <div className={styles.sectionRight}>
          <h4 className={styles.sectionTitle}>{"History Belongs to You and Me"}</h4>
          <p className={styles.sectionItem}>{"In the puzzle that paints Taiwan's past, there are pieces missing all around the globe. We need to find them, digitize them and translate them into open data accessible to all. In so doing, we become an intimate part of a history that was otherwise lost."}</p>
          {!isMobile && <img src={doc1} className={styles.doc1Img} style={{ opacity: easing(0, 600, scrollTop) - 0.2, /* marginTop: 100 * (1 - easing(0, 600)) */ }} />}
        </div>
        <div className={styles.sectionLeft}>
          {!isMobile && <img src={doc2} className={styles.doc2Img} style={{ opacity: easing(461, 968, scrollTop) - 0.2 }} />}
          <div className={styles.sectionLeftContent} style={isMobile ? {} : {marginLeft: 155}}>
            <h4 className={styles.sectionTitle}>{"Why is it National Treasure?"}</h4>
            <p className={styles.sectionItemNarrow} >{"Over the past hundreds of years, countries such as the US and UK have been collecting intelligence records on Taiwan's societal customs, geography, and its people. These records offer a fresh perspective and distinct angle in reviewing the lives and stories that had happened on this island. This project aims to bring these documents within the sight of the public, so that everyone can forge their own stories that were never told before."}</p>
            <h4 className={styles.sectionTitle2}>How to Join</h4>
            <p className={styles.sectionItem}>{"The first stops of National Treasure are the UN Archive room in NYC, and the US National Archive (NARA II) in College Park, Maryland. By using our mobile App, you can easily scan and upload the documents to our database, where they will be texualized, indexed and open to use by all. "}</p>
            <div className={styles.buttonGroup} >
              <Link to="/participants/volunteers"> <button className={styles.btnBrownLeft} >Know More</button> </Link>
              <a href="https://www.facebook.com/twnationaltreasure/" target="_blank"> <button className={styles.btnBrown} >Follow Us</button> </a>
              <Link to="/participants/supporters"> <button className={styles.btnBrownRight} >Contribute</button> </Link>
            </div>
          </div>
        </div>
        <div className={styles.sectionLeftUSA} style={isMobile ? {} : {top: 2047}}>
          <img src={usaImg} className={styles.usaImg} />
          <div className={styles.sectionLeftContent2} >
              <div className={styles.innerContent} >
              <h4 className={styles.sectionTitleUSA}>Our Stations</h4>
              <p className={styles.sectionItemUSA} >
                - National Archives and Records Administration (Washington D.C.) <br />
                - United Nations Archives (New York City) <br />
                - (Pending）Hoover Institution, Library & Archives (Stanford University) <br />
              </p>
              <div className={styles.buttonGroup} >
                <a href="https://m.me/twnationaltreasure/" target="_blank"> <button className={styles.btnBrownInfo}>Give Us Tips</button> </a>
              </div>
              <h4 className={styles.sectionTitleUSA}>Recent Activities</h4>
              <a href="https://www.facebook.com/pg/twnationaltreasure/events" target="_blank">
                <p className={styles.sectionItemGroups} >
                  12/12 UN Trip >> JOIN!
                </p>
              </a>
              <a href="https://www.facebook.com/pg/twnationaltreasure/events" target="_blank">
                <p className={styles.sectionItemGroups} >
                  12/21 NARA Trip >> JOIN!
                </p>
              </a>
              </div>
          </div>
        </div>
        <div className={styles.gallerySection}>
          {!isMobile && <img src={doc3} className={styles.doc3Img} style={{ opacity: easing(1600, 2100, scrollTop) - 0.2 }} />}
          {!isMobile && <img src={fish} className={styles.fishImg} />}
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <a href="https://grants.g0v.tw/power" target="_blank"><img src={poweredBy} className={styles.poweredBy} /> </a>
              <div className={styles.footerInfo}>
                <div><b>Taiwan National Treasure Foundation</b></div>
                  <div>Email：<a href="mailto:join@nltr.tw" className={styles.footerLink}>join@nltr.tw</a></div>
                  <div>Facebook：<a href="fb.me/twnationaltreasure" target="_blank" className={styles.footerLink}>@twnationaltreasure</a></div>
                  <i style={{ fontSize: 12 }}>TNTF is a US 501(c)(3) nonprofit organization </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
