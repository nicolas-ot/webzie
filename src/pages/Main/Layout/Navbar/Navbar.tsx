import './navbar.scss';

import SearchBar from '../../../../elements/SearchBar/SearchBar';
import Button from '../../../../elements/Button/Button';

const Navbar = () => {
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
      <Button>Webzie for host</Button>

      <div>Bell</div>
      <div>User</div>
      <div>EN</div>
    </div>
  );
};

export default Navbar;
