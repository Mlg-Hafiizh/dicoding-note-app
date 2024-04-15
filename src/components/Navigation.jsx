import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiFileText, FiFilePlus, FiArchive, FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeConsumer } from '../contexts/ThemeContexts';
 
function Navigation({ logout, name}) {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FiFileText /> Catatan</Link></li>
        <li><Link to="/add"><FiFilePlus /> Tambah</Link></li>
        <li><Link to="/archive"><FiArchive /> Arsip</Link></li>
        <li> 
          <ThemeConsumer>
            {({ theme, toggleTheme }) => {
              return <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>;
            }}
          </ThemeConsumer>
            {/* <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button> */}
        </li>
        <li><button onClick={logout} className="btn-logout">{name} <FiLogOut /></button></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
 
export default Navigation;