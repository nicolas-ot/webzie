import styles from './login.module.scss';

interface LoginProps {
  changeToLogout: () => void;
}

const Login: React.FC<LoginProps> = ({ changeToLogout }) => {
  return (
    <section>
        <img className={styles.ImageBackdrop}
          src={
            require('../../../assets/images/Website Backdrop/Backdrop Sign In _ Sign Up/Mask Group 418.png')
              .default
          }
          alt='backdrop-left'
          width='100%'
        />
      <div className={styles.Content}>
        <div className={styles.BoxSignin}>
          <div className={styles.Image}>
            <img
              src={
                require('../../../assets/images/Full Page/Sign In - Sign Up/Sign In/Asset.jpg')
                  .default
              }
              alt='asset'
              width='100%'
              height='100%'
            />
          </div>
          <div className={styles.Input}>
            <p className={styles.Topic}>Sign In</p>
            <div className={styles.FormGroup}>
              <label>Email Address</label>
              <input type='text' placeholder='Your email' />
            </div>
            <div className={styles.FormGroup}>
              <label>Password</label>
              <input type='password' placeholder='*****' />
            </div>
            <div className={styles.WrapperRemember}>
              <div className={styles.Remember}>
                <input type='checkbox' />
                <p>Remember me</p>
              </div>
              <a href='forget' className={styles.Forget}>
                Forget your password?
              </a>
            </div>
            <div className={styles.WrapperSignInButton}>
              <button>Sign In</button>
            </div>
            <div className={styles.WrapperLine}>
              <hr />
              <p>OR</p>
              <hr />
            </div>
            <div className={styles.WrapperButton}>
              <button>Sign In</button>
            </div>
            <div className={styles.WrapperButton}>
              <button>Sign Up</button>
            </div>
            <div className={styles.WrapperSignUp}>
              <p>
                Don't have account?{' '}
                <button onClick={() => changeToLogout()}>Sign Up</button>
              </p>
            </div>
          </div>
        </div>
      </div>
        <img className={styles.ImageBackdropRight}
          src={
            require('../../../assets/images/Website Backdrop/Backdrop Sign In _ Sign Up/Mask Group 417.png')
              .default
          }
          alt='backdrop-left'
          width='100%'
        />
    </section>
  );
};

export default Login;
