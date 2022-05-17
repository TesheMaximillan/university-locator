/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import DetailCard from '../common/DetialCard';

function Details() {
  const universities = useSelector((state) => state.reducer);
  const { id } = useParams();
  const university = universities.find((university) => university.id === +id);

  const { name, chapterID } = university;
  return (
    <div>
      <Navbar title="University Details" />
      <Header name={name} view={chapterID} />
      <DetailCard university={university} />
    </div>
  );
}

export default Details;
