import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import Homepage from './home';
import img from '../asset/covid.png';
import { fetchApi } from '../redux/api/api';

const Display = () => {
  const Dispatch = useDispatch();
  const { tracker, status } = useSelector((state) => state.covidTracker);
  useEffect(() => {
    if (status === null) {
      Dispatch(fetchApi());
    }
  });
  const [search, setSearch] = useState('');
  return (
    <div className="banner">
      <div className="headerdetails">
        <img className="banner1" src={img} alt="" />
        <h1>International New Confirmed Covid-19 Cases</h1>
      </div>
      <div className="searchdiv">
        <h2 className="searchtitle">
          Search by Country
          <FaSearch />
        </h2>
        <input className="search" type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="search" />
      </div>
      <div className="home">
        {tracker.filter((searchcountry) => searchcountry.country.toLowerCase().includes(search.toLowerCase())).map((virus1) => (
          <NavLink state={virus1} to="/details">
            <Homepage
              key={uuidv4()}
              country={virus1.country}
              cases={virus1.cases}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Display;
