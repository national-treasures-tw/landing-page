import React from 'react';
import { render } from 'react-dom';
import styles from '../styles.css';
import taiwan from '../assets/taiwan.png';
import logo from '../assets/logo.png';
import name from '../assets/name.png';
import loader from '../assets/loading.gif';
import axios from 'axios';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: '',
      images: [],
      selected: null,
      isLoading: false,
      isDebugging: false,
    };
  }

  startLoading = () => {
    this.setState({ isLoading: true });
    setInterval(() => {
      this.getMoreImages()
      .then((res) => {
        if (res.data.length != this.state.images.length) {
          this.setState({ isLoading: false });
        }
        this.setState({ images: res.data });
      })
    }, 1500)
  }

  getMoreImages = () => {
    return axios.get('https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload');
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

  newImageUpload = ({ base64Img }) => {
      axios.post(
        'https://76k76zdzzl.execute-api.us-east-1.amazonaws.com/stage/upload',
        { file: base64Img,
          email: 'user@nltr.tw',
          naId: '1742009',
          recordGroup: '469',
          entry: 'UD409',
          stack: '250',
          row: '075',
          compartment: '035',
          shelf: '02-07',
          box: '1-127',
          containerId: '14',
          title: 'China and Taiwan Subject Files, 1948 - 1961 Record Group 469: Records of U.S. Foreign Assistance Agencies, 1942 - 1963',
          timestamp: new Date().getTime(),
        },
        { headers: { 'Content-Type': 'application/json' } })
      .then((res) => {
        console.log('success')
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleFile = (e) => {
    this.setState({ isLoading: true });
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = () => {
      const imgData = { base64Img: reader.result };
      this.newImageUpload(imgData);
    };

    reader.readAsDataURL(file);
  }

  handleSelect = (index) => {
    this.setState({ selected: index });
  }

  handleDebugOCR = () => {
    this.setState({ isDebugging: !this.state.isDebugging });
  }

  render() {
    const { images, selected, isLoading, isDebugging } = this.state;
    const gallery = images.sort((image1, image2) => image2.timestamp - image1.timestamp ).map((image, index) => image.key && <img onClick={() => this.handleSelect(index)} src={`https://s3.amazonaws.com/national-treasure/${image.key}`} className={styles.image} />);
    return (
      <div className={styles.box}>
        {selected !== null ? (
          <div>
            <span onClick={() => this.setState({ selected: null })} style={{ cursor: 'pointer', color: '#D0011B' }}>BACK</span>
            <img src={`https://s3.amazonaws.com/national-treasure/${images[selected].key}`} className={styles.selectedImage} />
            {!isDebugging && (images[selected].ocr[0] ? <div className={styles.ocrBox}>{images[selected].ocr[0]}</div> : <img src={loader} width={100} height={100} />)}
            {isDebugging && <textarea style={{ width: 600, height: 300}} defaultValue={images[selected].ocr[0]} /> }
            <button onClick={this.handleDebugOCR}> {isDebugging ? '提交' : '除錯' } </button>
          </div>
        ) : (
          <div>
            <input type="file" ref={(e) => { this.uploadbox = e; }} onChange={this.handleFile} />
            <div style={{ width: '100%' }}>
              {isLoading && <img src={loader} width={200} height={200} />}
              {gallery}
            </div>
          </div>
        )}
        { images.length > 0 || <button onClick={this.startLoading} > 查看文件 </button> }
      </div>
    );
  }
}
