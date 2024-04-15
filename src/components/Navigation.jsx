import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiFileText, FiFilePlus, FiArchive, FiLogOut } from 'react-icons/fi';
 
function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/"><FiFileText /></Link><b>Catatan</b></li>
        <li><Link to="/add"><FiFilePlus /></Link><b>Tambah</b></li>
        <li><Link to="/archive"><FiArchive /></Link><b>Arsip</b></li>
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