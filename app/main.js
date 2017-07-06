import React from 'react';
import { render } from 'react-dom';
import Landing from './components/Landing';
import Docs from './components/Docs';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory} >
        <Route path="/" component={Landing} />
        <Route path="/documents" component={Docs} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
