import { useState } from 'react';

export default function WeatherDisplay() {

    const [selectedWeather, setSelectedWeather] = useState();

    const onWeatherChange = (e) => {
        console.log(e.target.value);
        setSelectedWeather(e.target.value);
    }

    const weatherMessage = () => {
        switch(selectedWeather) {
            case "Sunny":
                return "Esta Sol";
            case "Raining":
                return "Esta chuva";
            case "Snowing":
                return "Esta Neve";
            default:
                return "";
        }
    }

    return <>
        <div>
            <select onChange={(e) => onWeatherChange(e)}>
                <option selected></option>
                <option>Sunny</option>
                <option>Raining</option>
                <option>Snowing</option>
            </select>
        </div>
        {selectedWeather && <p>{weatherMessage()}</p>}
    </>
}