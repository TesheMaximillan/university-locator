/* eslint-disable react/prop-types */
import React from 'react';
import styles from './DetailCard.module.scss';

const { listItem } = styles;

function Card({ university }) {
  const {
    name, chapterID, city, mevrRD, state,
  } = university;
  return (
    <ul>
      <li className={listItem}>
        <h3>University Name</h3>
        <p>{name}</p>
      </li>
      <li className={listItem}>
        <h3>Chapter ID</h3>
        <p>{chapterID}</p>
      </li>
      <li className={listItem}>
        <h3>City</h3>
        <p>{city}</p>
      </li>
      <li className={listItem}>
        <h3>Mevr RD</h3>
        <p>{mevrRD}</p>
      </li>
      <li className={listItem}>
        <h3>State</h3>
        <p>{state}</p>
      </li>
    </ul>
  );
}

export default Card;
