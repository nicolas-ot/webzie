import styles from './auth.module.scss';

import Header from './Header/Header';

const Auth = () => {
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
          <div className={styles.boxSignin}>
            <div className={styles.image}>
              <img
                src={
                  require('../../assets/images/Full Page/Sign In - Sign Up/Sign In/Asset.jpg')
                    .default
                }
                alt='asset'
                width='100%'
                height='100%'
              />
            </div>
            <div className={styles.input}>
              <p className={styles.topic}>Sign In</p>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type='text' placeholder='Your email' />
              </div>
              <div className={styles.formGroup}>
                <label>Password</label>
                <input type='password' placeholder='*****' />
              </div>
              <div className={styles.box1}>
                <div className={styles.remember}>
                  <input type='checkbox' />
                  <p>Remember me</p>
                </div>
                <a href='forget' className={styles.forget}>
                  Forget your password?
                </a>
              </div>
              <div className={styles.box2}>
                <button>Sign In</button>
              </div>
              <div className={styles.box3}>
                <hr />
                <p>OR</p>
                <hr />
              </div>
              <div className={styles.box4}>
                <button>Sign In</button>
              </div>
              <div className={styles.box4}>
                <button>Sign Up</button>
              </div>
              <div className={styles.box5}>
                <p>
                  Don't have account? <a href='sign-up'>Sign Up</a>
                </p>
              </div>
            </div>
          </div>
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

export default Auth;
