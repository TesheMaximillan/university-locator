import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaAngleLeft, FaMicrophone } from 'react-icons/fa';
import { BsGearFill } from 'react-icons/bs';
import styles from './Navbar.module.scss';

const { icon, hadingTitle, nav } = styles;

function Navbar({ title }) {
  return (
    <div className={nav}>
      <NavLink to="/">
        <FaAngleLeft className={icon} />
      </NavLink>
      <div className={hadingTitle}><p>{title}</p></div>
      <div>
        <FaMicrophone className={icon} />
        <BsGearFill className={icon} />
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
