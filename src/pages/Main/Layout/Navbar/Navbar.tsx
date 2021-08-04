import './navbar.scss';

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

      <div className='home-search-bar-wrapper'>
        <form action=''>
          <input type='text' placeholder='Search for anything' />
        </form>
      </div>
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
