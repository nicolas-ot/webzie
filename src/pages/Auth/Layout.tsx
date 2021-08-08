import styles from './Layout.module.scss';

import Header from './Header/Header';
import Individual from './SignUp/Individual/Content';
import Organization from './SignUp/Organization/Content';

const signUp = () => {
  window.onload =  () => {
    var status = 'individual';
  }

    return (
        <>
        <Header />
        <section>
          <div className={styles.left}>
            <img
              src={
                require('../../assets/images/Website Backdrop/Backdrop Sign In _ Sign Up/Mask Group 418.png')
                  .default
              }
              alt='backdrop-left'
              width='100%'
            />
          </div>
          <div className={styles.content}>
              <Individual />
          </div>
          <div className={styles.right}>
            <img
              src={
                require('../../assets/images/Website Backdrop/Backdrop Sign In _ Sign Up/Mask Group 417.png')
                  .default
              }
              alt='backdrop-left'
              width='100%'
            />
          </div>
        </section>
        </>
    );
};

export default signUp;