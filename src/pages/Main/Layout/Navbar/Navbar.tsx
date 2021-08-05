import './navbar.scss';

import SearchBar from '../../../../elements/SearchBar/SearchBar';

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

      <div>Home</div>
      <div>Webzie for Host</div>
      <div>Shopping Cart</div>
      <div>Bell</div>
      <div>User</div>
      <div>Language</div>
    </div>
  );
};

export default Navbar;
