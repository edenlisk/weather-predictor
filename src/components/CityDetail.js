import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useSelector } from 'react-redux';

const CityDetail = () => {
  const navigate = useNavigate();
  const selected = useSelector((state) => state.selectedCity);
  const [selectedCityInfo] = useSelector((state) => state.weather.filter((item) => item.address === selected));
  // if (selectedCityInfo) console.log(selectedCityInfo);
  const renderSelectedCityInfo = () => {
    if (selectedCityInfo) {
      return (
        <ul className="list-group">
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>City Name:</span>
            <span>{selectedCityInfo.address}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Timezone:</span>
            <span>{selectedCityInfo.timezone}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Address:</span>
            <span>{selectedCityInfo.resolvedAddress}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Cloud Cover:</span>
            <span>{selectedCityInfo.days[0].cloudcover}</span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Wind Speed:</span>
            <span>
              {selectedCityInfo.days[0].windspeed}
              {' '}
              kmph
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Temperature:</span>
            <span>
              {selectedCityInfo.days[0].temp}
              °C
              {' '}
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Min Temperature:</span>
            <span>
              {selectedCityInfo.days[0].tempmin}
              °C
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Max Temperature:</span>
            <span>
              {selectedCityInfo.days[0].tempmax}
              °C
            </span>
          </li>
          <li className="list-group-item text-white d-flex justify-content-between">
            <span>Weather Description:</span>
            <span>{selectedCityInfo.days[0].description}</span>
          </li>
        </ul>
      );
    }
    return (
      <ul className="list-group">
        <li className="list-group-item">No Selected City</li>
      </ul>
    );
  };
  const handleClick = () => {
    navigate('/');
  };

  const getDay = () => {
    const d = new Date(selectedCityInfo.days[0].datetime);
    return d.toString().split(' ')[0];
  };

  // TODO : REMOVE HARD CODED DATA
  return (
    <div className="container mx-auto">
      <IoMdArrowRoundBack onClick={handleClick} />
      <div className="container text-white col-7">
        <div className="detail-top d-flex justify-content-between align-items-center px-2 border rounded-1">
          <div>
            <span className="fs-3">{selectedCityInfo ? getDay() : ''}</span>
            {/* <img src={selectedCityInfo ? selectedCityInfo.current.weather_icons[0] : ''}
             width="50" height="50" alt="Weather icon"/> */}
          </div>
          <div className="text-center">
            <span>{selectedCityInfo ? selectedCityInfo.address : null}</span>
            <br />
            <span>{selectedCityInfo ? `${selectedCityInfo.days[0].temp}°C` : null}</span>
          </div>
        </div>
        <div className="">
          <div className="mx-auto text-white">{renderSelectedCityInfo()}</div>
        </div>
      </div>
    </div>
  );
};

export default CityDetail;
