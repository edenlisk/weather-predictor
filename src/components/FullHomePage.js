import React, {useEffect} from "react";
import Search from "./Search";
import {useDispatch, useSelector} from "react-redux";
import {retrieveWeather} from "../redux/weather";


const FullHomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(retrieveWeather());
    }, [dispatch]);

    const weatherData = useSelector((state) => state.weather)

    return <Search weatherInfo={weatherData} />
}

export default FullHomePage;