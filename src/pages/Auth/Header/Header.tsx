import styles from './header.module.scss';

const Header = () => {
    return (
    <>

    <header>
        <div className={styles.logo}>
          <img
            src={require('../../../assets/images/Logo Webzie/logo.jpg').default}
            alt='logo'
            width='10%'
          />
          <p>Webzie</p>
        </div>
        <div className={styles.navbar}>
          <ul>
            <a href='/'>
              <li>Home</li>
            </a>
            <a href='about-us'>
              <li>About Us</li>
            </a>
            <a href='login'>
              <li>Log In</li>
            </a>
            <a href='sign-up'>
              <li className={styles.btn}>Register</li>
            </a>
            <a href='en'>
              <li>EN</li>
            </a>
          </ul>
        </div>
      </header>

    </>
    );
};

export default Header;