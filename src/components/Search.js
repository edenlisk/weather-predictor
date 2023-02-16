import React, { useRef, useState } from 'react';
import HomePage from "./HomePage";
import CitiesList from "./CitiesList";


const Search = ({weatherInfo}) => {
    // const searchField = useRef();
    const [searchField, setSearchField] = useState('');

    const filteredWeatherInfo = weatherInfo.filter(city => city.address.toLowerCase().includes(searchField.toLowerCase()));
    const handleSearch = (e) => {
        setSearchField(e.target.value);
    }

    const home = () => {
        return (
            <div>
                <div><HomePage /></div>
                <div className="container text-white py-2 stats d-flex justify-content-center gap-5 align-items-center">
                    <span>UPDATES BY MAJOR CITIES</span>
                    <input onChange={handleSearch} className="search-field" type="text" placeholder="Type your city"/>
                </div>
                <div className="container cities-cards"><CitiesList weatherInfo={filteredWeatherInfo} /></div>
            </div>
        )
    }

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     const searchedCity = searchField.current.value.toLowerCase();
    //     searchField.current.value = '';
    // }

    return (
        <div>{home()}</div>
    )

}

export default Search;
