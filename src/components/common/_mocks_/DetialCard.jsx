/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import styles from './DetailCard.module.scss';

const { listItem, info, icon } = styles;

function Card() {
  const arrObj = ['University Name', 'City', 'State', 'Chapter ID', 'Mevr RD'];
  const desc = ['University Name', 'City', 'State', 'Chapter ID', 'Mevr RD'];
  return (
    <ul>
      {arrObj.map((detail, index) => (
        <li key={index} className={listItem}>
          <h3>{desc[index]}</h3>
          <div className={info}>
            <p>{detail}</p>
            <IoArrowForwardCircleOutline className={icon} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Card;
