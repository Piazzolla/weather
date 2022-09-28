import { useEffect, useSelector, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const ClimaCiudad = ({ ciudad }) => {

    const apiId = import.meta.env.VITE_API_ID; 
    const [clima, setClima] = useState();
    const { seleccionada } = ciudad;
    //console.log(seleccionada);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${seleccionada}&units=metric&appid=${apiId}`;
    const { data } = useFetch(url);
    //console.log(data);
    const { main } = !!data && data;
    if (seleccionada === '') {
        return <h1>CIUDAD NO VALIDA</h1>
    }

    useEffect(() => {
        setClima(main);
    }, [main])

    return (
        <>
            <h3> Clima para la ciudad </h3>
            <div>
                <h4>Temperatura actual: {clima?.temp}C</h4>
                <h4>Sensacion termica: {clima?.feels_like}C</h4>
                <h4>Maxima: {clima?.temp_max}C</h4>
                <h4>Minima: {clima?.temp_min}C</h4>
                <h4>Humedad: {clima?.humidity}%</h4>
            </div>
        </>
    )
}
