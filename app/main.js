import React from 'react';
import { render } from 'react-dom';
import Landing from './components/Landing';
import Docs from './components/Docs';
import Participants from './components/Participants';
import Box from './components/Box';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    const isProduction = process.env.production === 'production';
    return (
      <Router history={isProduction ? browserHistory : hashHistory} >
        <Route path="/" component={Landing} />
        <Route path="/documents" component={Docs} />
        <Route path="/participants" component={Participants} />
        <Route path="/treasure" component={Box} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
