import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Landing from './components/Landing';
import Docs from './components/Docs';
import Participants from './components/Participants';
import Box from './components/Box';
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

const store = configureStore();

class App extends React.Component {
  render() {
    const isProduction = process.env.production === 'production';
    return (
      <Provider store={store}>
        <Router history={isProduction ? browserHistory : hashHistory} render={applyRouterMiddleware(useScroll())}>
          <Route path="/" component={Landing} />
          <Route path="/documents/:documentId" component={Docs} />
          <Route path="/participants" component={Participants} />
          <Route path="/treasure" component={Box} />
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
