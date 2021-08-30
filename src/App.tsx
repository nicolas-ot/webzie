import './app.scss';

import { Switch, Route, Link, HashRouter } from 'react-router-dom';
import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';
import { Provider } from 'react-redux';
import { store } from './state';
import Cart from './pages/Cart/Cart';
import Layout from './hoc/Layout/Layout';
import WaitingPayment from './pages/WaitingPayment/WaitingPayment';
import RegisterWebinar from './pages/RegisterWebinar/RegisterWebinar';

function App() {
  return (
    <Provider store={store}>
      <HashRouter basename={'/'}>
        <div className='App'>
          <Layout>
            <Switch>
              <Route exact path='/asd'>
                <Main />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
            </Switch>
            <Switch>
              <Route path='/login'>
                <Auth />
              </Route>
              <Route path='/waiting-for-payment'>
                <WaitingPayment />
              </Route>
              <Route path='/'>
                <RegisterWebinar />
              </Route>
            </Switch>
          </Layout>
          {/* {react router: Landing, Main, SignIn/Up} */}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
