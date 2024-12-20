import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-yellow-900 p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-lime-500 text-4xl font-bold">EchoShelf</h1>

        {/* Hamburger Menu Button */}
        <button
          className="text-lime-500 text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {renderMenuItems()}
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col space-y-4 mt-4 md:hidden transition-all duration-300 ease-in-out`}
      >
        {renderMenuItems()}
      </ul>
    </nav>
  );

  function renderMenuItems() {
    const menuItems = [
      { to: '/about', label: 'About Us' },
      { to: '/', label: 'Home' },
      { to: '/marketplace', label: 'Marketplace' },
      { to: '/login', label: 'Login' },
      { to: '/cart', label: <FontAwesomeIcon icon={faShoppingCart} size="lg" /> },
      { to: '/profile', label: <FontAwesomeIcon icon={faUser} size="lg" /> },
    ];

    return menuItems.map((item, index) => (
      <li
        key={index}
        className="group"
      >
        <Link
          to={item.to}
          className="text-lime-500 font-bold relative group-hover:text-white text-xl"
        >
          {item.label}
        </Link>
      </li>
    ));
  }
}

export default Navbar;

