import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../common/Header';
import Navbar from '../common/Navbar';
import MainCard from '../common/MainCard';

function Home() {
  const universities = useSelector((state) => state.reducer);

  return (
    <>
      <Navbar title="Universities" />
      <Header name="US Universities" view={`${universities.length} universities`} />
      <div className="countryContainer">
        {universities && universities.map((university) => (
          <MainCard key={university.id} university={university} />
        ))}
      </div>
    </>
  );
}

export default Home;
