import './auth.scss';

const Auth = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <img
            src={require('../../assets/images/Logo Webzie/logo.jpg').default}
            alt='logo'
            width='10%'
          />
          <p>Webzie</p>
        </div>
        <div className='navbar'>
          <ul>
            <a href='/'>
              <li>Home</li>
            </a>
            <a href='about-us'>
              <li>About Us</li>
            </a>
            <a href='log-in'>
              <li>Log In</li>
            </a>
            <a href='-register'>
              <li className='btn'>Register</li>
            </a>
            <a href='en'>
              <li>EN</li>
            </a>
          </ul>
        </div>
      </header>
      <section>
        <div className='left'>
          <img
            src={
              require('../../assets/images/Website Backdrop/Backdrop Sign In _ Sign Up/Mask Group 418.png')
                .default
            }
            alt='backdrop-left'
            width='100%'
          />
        </div>
        <div className='content'>
          <div className='box-signin'>
            <div className='image'>
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
            <div className='input'>
              <p className='topic'>Sign In</p>
              <div className='form-group'>
                <label>Email Address</label>
                <input type='text' placeholder='Your email' />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type='password' placeholder='*****' />
              </div>
              <div className='box-1'>
                <div className='remember'>
                  <input type='checkbox' />
                  <p>Remember me</p>
                </div>
                <a href='forget' className='forget'>
                  Forget your password?
                </a>
              </div>
              <div className='box-2'>
                <button>Sign In</button>
              </div>
              <div className='box-3'>
                <hr />
                <p>OR</p>
                <hr />
              </div>
              <div className='box-4'>
                <button>Sign In</button>
              </div>
              <div className='box-4'>
                <button>Sign Up</button>
              </div>
              <div className='box-5'>
                <p>
                  Don't have account? <a href='sign-up'>Sign Up</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='right'>
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
