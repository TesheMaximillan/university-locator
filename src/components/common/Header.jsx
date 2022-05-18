/* eslint-disable react/prop-types */
import React from 'react';
import { FaUniversity } from 'react-icons/fa';
import styles from './Header.module.scss';

function Header({ name, view }) {
  const {
    header, image, headerTitle, icon,
  } = styles;

  return (
    <div className={header}>
      <div className={image}>
        <FaUniversity className={icon} />
      </div>
      <div className={headerTitle}>
        <h2>{name}</h2>
        <p>{view}</p>
      </div>
    </div>
  );
}

export default Header;
