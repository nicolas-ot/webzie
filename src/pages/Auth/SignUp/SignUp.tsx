import styles from './signUp.module.scss';

import Individual from './Individual/Information/Individual';
import Organization from './Organization/Information/Organization';
import { useState } from 'react';

interface SignUpProps {
  changeToLogin: () => void;
}

const SignUp: React.FC<SignUpProps> = () => {
  const [isIndividual] = useState(true);
  return (
    <section>
      <div className={styles.left}>
        <img
          src={
            require('../../../assets/images/Website Backdrop/Backdrop Sign In _ Sign Up/Mask Group 418.png')
              .default
          }
          alt='backdrop-left'
          width='100%'
        />
      </div>
      <div className={styles.content}>
        {isIndividual ? <Individual /> : <Organization />}
      </div>
      <div className={styles.right}>
        <img
          src={
            require('../../../assets/images/Website Backdrop/Backdrop Sign In _ Sign Up/Mask Group 417.png')
              .default
          }
          alt='backdrop-left'
          width='100%'
        />
      </div>
    </section>
  );
};

export default SignUp;
