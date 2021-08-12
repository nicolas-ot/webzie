import './navbar.scss';

import Button from '../../../../elements/Button/Button';
import Icon from '../../../../elements/Icon/Icon';
import SearchBar from '../../../../elements/SearchBar/SearchBar';
import variables from '../../../../utilities/_variables.module.scss';
import { useActions } from '../../../../hooks/use-actions';
import { useTypedSelector } from '../../../../hooks/use-typed-selector';

const Navbar = () => {
  const { changeToHost, changeToUser } = useActions();
  const mode = useTypedSelector((state) => state.modes.mode);

  return (
    <div className='home-navbar-wrapper'>
      <div className='home-logo-wrapper'>
        <img
          alt='logo'
          src={require('../../../../assets/images/logo.jpg').default}
        ></img>
        <span>Webzie</span>
      </div>
      <div className='home-categories-wrapper'>
        <button>
          <span>Categories</span>
        </button>
        <div className='home-categories-selection'>Selection</div>
      </div>
      <SearchBar />

      <div className='link-to-home'>Home</div>
      <div className='change-mode-button'>
        {mode === 'user' ? (
          <Button onClick={changeToHost}>Webzie for Host</Button>
        ) : (
          <Button onClick={changeToUser}>Webzie for User</Button>
        )}
      </div>
      <Icon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={variables['dark-purple']}
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z' />
        </svg>
      </Icon>
      <Icon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={variables['dark-purple']}
        >
          <path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z' />
        </svg>
      </Icon>
      <div className='user-profile-wrapper'>
        <Icon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='48px'
            viewBox='0 0 24 24'
            width='24px'
            fill={variables['dark-purple']}
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' />
          </svg>
        </Icon>
        <a href='dummy'>
          <span>John Doe</span>
        </a>
      </div>
      <div className='home-language-selection'>EN</div>
    </div>
  );
};

export default Navbar;
