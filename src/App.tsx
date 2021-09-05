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
          <Switch>
            <Route exact path='/asd'>
              <Layout>
                <Main />
              </Layout>
            </Route>
            <Route exact path='/cart'>
              <Layout>
                <Cart />
              </Layout>
            </Route>
            <Route exact path='/waiting-for-payment'>
              <Layout>
                <WaitingPayment />
              </Layout>
            </Route>
            <Route exact path='/'>
              <Layout>
                <RegisterWebinar />
              </Layout>
            </Route>
            <Route path='/login'>
              <Auth />
            </Route>
          </Switch>
          {/* {react router: Landing, Main, SignIn/Up} */}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
