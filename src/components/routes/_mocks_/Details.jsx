/* eslint-disable react/prop-types */
import React from 'react';
import Header from '../../common/Header';
import Navbar from '../../common/Navbar';
import DetailCard from '../../common/DetialCard';
import styles from '../routes.module.scss';

const { title, detailTitle } = styles;

function Details() {
  const university = { id: '1', unvName: 'name', chapterID: 'chatperId' };
  const { name } = university;

  return (
    <div>
      <Navbar title="University Location" />
      <Header name={name} view="area code" />
      <h3 className={`${title} ${detailTitle}`}>University Location Details</h3>
      <DetailCard university={university} />
    </div>
  );
}

export default Details;
