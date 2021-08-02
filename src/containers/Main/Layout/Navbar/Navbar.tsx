import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className='logo-wrapper'>
        <img
          alt='logo'
          src={require('../../../../assets/img/logo.jpg').default}
        ></img>
        <span>Webzie</span>
      </div>
      <div>Categories</div>
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
