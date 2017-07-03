import React from 'react';
import { render } from 'react-dom';
import styles from './styles.css';
import taiwan from './assets/taiwan.png';
import logo from './assets/logo.png';
import name from './assets/name.png';

class App extends React.Component {
  render() {
    const { images, selected, isLoading, isDebugging } = this.state;
    const gallery = images.sort((image1, image2) => image2.timestamp - image1.timestamp ).map((image, index) => image.key && <img onClick={() => this.handleSelect(index)} src={`https://s3.amazonaws.com/national-treasure/${image.key}`} className={styles.image} />);
    return (
      <div className={styles.box}>
        <img src={logo} className={styles.logo} />
        <div className={styles.inputGroup}>
          <img src={name} className={styles.name} width={190} />
          <div style={{display: 'inline-flex'}}>
            <input placeholder="join@nltr.tw" type="email" onChange={this.handleInput} value={this.state.inputValue} className={styles.emailInput} />
            <div className={styles.button} onClick={this.handleSubmit}>Submit </div>
          </div>
          <p style={{color: '#D0011B'}}> {this.state.message} </p>
        </div>
        <img src={taiwan} className={styles.taiwan} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
