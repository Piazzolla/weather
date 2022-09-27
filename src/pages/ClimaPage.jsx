import { useState } from "react";
import { ClimaCiudad } from "../components/ClimaCiudad";

const ciudades = ['Mendoza','Ushuaia', 'Comodoro Rivadavia', 'Buenos Aires', 'Salta'];

export const ClimaPage = () => {


    const onButtonClick = ({target}) => {
        console.log(target.innerHTML);
        setSelectedCity({ seleccionada: target.innerHTML })
    }

    const [selectedCity, setSelectedCity] = useState({ seleccionada: ciudades[0] });
    return (
        <>
            <div className="selector-ciudad">
                <h1>Clima</h1>
                <br/>
                <h2>Seleccione ciudad</h2>
                <ul>
                    {
                        ciudades.map((ciudad, index) =>
                            <li key={index}>
                                <button
                                className={ ciudad === selectedCity.seleccionada? 'selected':'' } 
                                onClick={onButtonClick}
                                // {() => setSelectedCity({ seleccionada: event.target.innerHTML })}
                                >{ciudad}</button>
                            </li>
                        )
                    }
                </ul>

                <ClimaCiudad key={selectedCity} ciudad={selectedCity} />
            </div>
        </>
    )
}
