import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveWeather } from '../redux/weather';
import City from './City';

const CitiesList = ({weatherInfo}) => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(retrieveWeather());
  // }, [dispatch]);
  // const weatherInfo = useSelector((state) => state.weather);
  // if (weatherInfo.length > 0) console.log(weatherInfo);
  // TODO : REMOVE DATA FROM OLD API
  return (
    <div className="d-flex container flex-wrap mx-4">
      {weatherInfo.map((city) => (
        <City
          key={city.address}
          city={city.address}
          temp={city.days[0].temp}
          conditions={city.days[0].conditions}
        />
      ))}
    </div>
  );
};

export default CitiesList;
