import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='logo-wrapper'>
        <img
          alt='logo'
          src={require('../../../../assets/images/logo.jpg').default}
        ></img>
        <span>Webzie</span>
      </div>
      <div className='categories-wrapper'>
        <button>Categories</button>
        <div className='categories-selection'></div>
      </div>

      <div>Search</div>
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
