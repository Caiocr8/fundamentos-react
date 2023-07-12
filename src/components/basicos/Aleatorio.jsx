import React from 'react'

export const Aleatorio = (props) => {
    const {min , max} = props
    let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;


    return (
        <div>
            <h1>Número Aleatorio entre {props.min} e {props.max}</h1>
            <h2>O número aleatorio sorteado foi: {aleatorio}</h2>
        </div>
    )
}
