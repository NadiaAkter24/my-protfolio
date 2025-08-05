import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';  // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ['About', 'Education', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Nadia Akter</h1>

        <button
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item} className="nav-item">
              <Link
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="nav-link"
                activeClass="active-link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
