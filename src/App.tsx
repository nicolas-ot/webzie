import './app.scss';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';
import SignUp from './pages/Auth/signUp';
import { Provider } from 'react-redux';
import { store } from './state';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/login'>
              <Auth />
            </Route>
            <Route path='/sign-up'>
              <SignUp />
            </Route>
          </Switch>
          {/* {react router: Landing, Main, SignIn/Up} */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
