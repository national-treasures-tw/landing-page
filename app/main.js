import React from 'react';
import { render } from 'react-dom';
import styles from './styles.css';
import taiwan from './assets/taiwan.png';
import logo from './assets/logo.png';
import name from './assets/name.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      message: '',
    };
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

  render() {
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
