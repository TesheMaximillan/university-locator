/* eslint-disable react/prop-types */
import React from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { TiLocation } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';
import styles from './MainCard.module.scss';

function Card({ university }) {
  const {
    unvName, cardContainer, icon, location,
  } = styles;

  const { id, name, chapterID } = university;

  return (
    <NavLink to={`/details/${id}`} className={cardContainer}>
      <IoArrowForwardCircleOutline className={icon} />
      <TiLocation className={location} />
      <div className={unvName}>
        <h3>{name}</h3>
        <p>{chapterID}</p>
      </div>
    </NavLink>
  );
}

export default Card;
