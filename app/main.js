import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Landing from './components/Landing';
import LandingEN from './components/LandingEN';
import Docs from './components/Docs';
import Participants from './components/Participants';
import Volunteer from './components/Volunteer';
import Support from './components/Support';
import Calibrate from './components/Calibrate';
import Box from './components/Box';
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

const store = configureStore();

class App extends React.Component {
  render() {
    const isProduction = process.env.NODE_ENV === 'production';
    return (
      <Provider store={store}>
        <Router history={isProduction ? browserHistory : hashHistory} render={applyRouterMiddleware(useScroll())}>
          <Route path="/" component={Landing} />
          <Route path="/en" component={LandingEN} />
          <Route path="/documents/:documentId" component={Docs} />
          <Route path="/participants" component={Participants} >
            <IndexRoute component={Volunteer} />
            <Route path="volunteers" component={Volunteer} />
            <Route path="calibrators" component={Calibrate} />
            <Route path="supporters" component={Support} />
          </Route>
          <Route path="/treasure" component={Box} />
          <Route path="/treasure/en" component={Box} />
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('app'));
