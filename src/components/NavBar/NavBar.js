import './NavBar.css';
import Logo from '../../images/Logo.svg';

function NavBar() {

  return (
    <section className='NavBar'>
      <div className='logo'>
        <img className='logo__img' src={Logo} alt="Logo" />
        <h1 className='logo__title'>Agency</h1>
      </div>
      <nav className='navigation'>
        <p className='navigation__item'>About</p>
        <p className='navigation__item'>Services</p>
        <p className='navigation__item'>Pricing</p>
        <p className='navigation__item'>Blog</p>
      </nav>
      <button className='NavBar__button'>CONTACT</button>
    </section>

  )
}

export default NavBar;
