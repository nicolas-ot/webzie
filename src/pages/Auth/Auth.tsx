import styles from './auth.module.scss';

import Layout from '../../hoc/LandingLayout/LandingLayout';
import Login from './Login/Login';
import { useState } from 'react';
import SignUp from './SignUp/SignUp';

const Auth = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const auth = isLoggingIn ? (
    <Login changeToLogout={() => setIsLoggingIn(false)} />
  ) : (
    <SignUp changeToLogin={() => setIsLoggingIn(true)} />
  );
  return <Layout>{auth}</Layout>;
};

export default Auth;
