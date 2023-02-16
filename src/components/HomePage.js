import React from 'react';
import Search from "./Search";
import { HiMicrophone } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import CitiesList from './CitiesList';

const HomePage = () => (
  <div className="">
    <div className="container homepage-nav d-flex text-white justify-content-between align-items-center">
      <p className="fs-4">Weather Predictor</p>
      <p className="fs-4">Wednesday</p>
      <div className="d-flex my-auto gap-2">
        <HiMicrophone className="fs-5" />
        <FiSettings className="fs-5" />
      </div>
    </div>
    <div className="container homepage-top d-flex justify-content-between">
      <div className="homepage-top-left w-50">
        <div className="overlay"/>
      </div>
      <div className="homepage-top-right w-50">
        <div className="overlay-right">
          <div className="text-white text-end pt-5 pe-3">
            GET THE REAL-TIME
            <br />
            {' '}
            WEATHER UPDATES
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
