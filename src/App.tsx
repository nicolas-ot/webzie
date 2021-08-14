import './app.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';
import { Provider } from 'react-redux';
import { store } from './state';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <Router basename='https://nicolas-ot.github.io/webzie/'>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/login'>
              <Auth />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
          {/* {react router: Landing, Main, SignIn/Up} */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
