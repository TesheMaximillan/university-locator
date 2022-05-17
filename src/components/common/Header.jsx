/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Header.module.scss';

function Header({ name, view }) {
  const { header, image, headerTitle } = styles;

  return (
    <div className={header}>
      <div className={image} />
      <div className={headerTitle}>
        <h2>{name}</h2>
        <p>{view}</p>
      </div>
    </div>
  );
}

export default Header;
