import React from 'react';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';
import styles from './DetailCard.module.scss';

const { listItem, info, icon } = styles;

function Card() {
  const arrObj = ['University Name', 'City', 'State', 'Chapter ID', 'Mevr RD'];
  const desc = ['University Name', 'City', 'State', 'Chapter ID', 'Mevr RD'];
  return (
    <ul>
      {arrObj.map((detail, index) => (
        <li key={uuidv4()} className={listItem}>
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
