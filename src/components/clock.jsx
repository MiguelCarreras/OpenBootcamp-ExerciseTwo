import React, { useState, useEffect } from 'react';

const Clock = (props) => {

    const initialState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San Jose',
    };

    const tick = () => {
        setstate((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(), 
                edad
            }
        }); 
    };

    const [state, setstate] = useState(initialState)

    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000
        );
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <h2>
                Hora Actual: { state.fecha.toLocaleDateString() }
            </h2>
            <h3>{ state.nomber } { state.apellidos }</h3>
            <h1>{ state.edad }</h1>
        </div>
    );
}

export default Clock;
