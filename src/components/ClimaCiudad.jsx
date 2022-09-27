import { useEffect, useSelector, useState } from "react";

export const ClimaCiudad = ({ ciudad }) => {


    const [clima, setClima] = useState();
    const { seleccionada } = ciudad

//    console.log(seleccionada);

    if (seleccionada === '') {
        return <h1>CIUDAD NO VALIDA</h1>
    }

    useEffect(() => {
        fetchData();
    }, [seleccionada])

    const fetchData = async () => {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${seleccionada}&units=metric&appid=cf0da87edbf2563ac04932a8c97d238f`)
        const jResult = await result.json();
       // console.log(jResult.main);
        const nuevoClima = jResult.main;
        setClima(nuevoClima);
    }

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