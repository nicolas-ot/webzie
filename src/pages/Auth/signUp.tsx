import styles from './signUp.module.scss';

import Header from './Header/Header';

const signUp = () => {
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
                  require('../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Information/Asset 1.jpg')
                    .default
                }
                alt='asset'
                width='100%'
                height='100%'
              />
            </div>
            <div className={styles.input}>
              <p className={styles.topic}>Sign Up</p>
              <div className={styles.menuSignUp}>
                  <div className={styles.individual}>
                      <p>as Individual</p>
                  </div>
                  <div className={styles.organization}>
                      <p>as Organization</p>
                  </div>
              </div>
              <div className={styles.formGroup}>
                <label>First Name</label>
                <input type='text' placeholder='John' />
              </div>
              <div className={styles.formGroup}>
                <label>Last Name</label>
                <input type='text' placeholder='Doe' />
              </div>
              <div className={styles.formGroup}>
                <label>Gender</label>
                <input type='text' placeholder='Doe' />
              </div>
              <div className={styles.formGroup}>
                <label>Date of Birth</label>
                <input type='date' placeholder='' />
              </div>
              <div className={styles.box2}>
                <button className={styles.btnCancel}>Cancel</button>
                <button className={styles.btnNext}>Next</button>
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

export default signUp;