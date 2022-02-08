import './nav.scss';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
    return (
        <>
         <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link className="nav__link" smooth to="/portfolio#portfolio">Portfolio</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" smooth to="/about#about">About</Link>
                </li>
                <li className="nav__item">
                    <Link className="nav__link" smooth to="/contact#contact">Contact</Link>
                </li>
            </ul>
         </nav>
        </>
    );
  };
  
  export default Nav;