import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import MainCard from '../common/MainCard';
import styles from './routes.module.scss';

function Home() {
  const universities = useSelector((state) => state.reducer);
  const { title, countryContainer } = styles;

  return (
    <>
      <Navbar title="Universities" />
      <Header name="US Universities" view={`${universities.length} universities`} />
      <h3 className={title}>STATS BY UNIVERSITY</h3>
      <div className={countryContainer}>
        {universities && universities.map((university) => (
          <MainCard key={university.id} university={university} />
        ))}
      </div>
    </>
  );
}

export default Home;
