import React from "react";

export function ComParametro(props) {
    console.log(props)
    const status = props.nota >= 7 ? "Aprovado" : "Recuperação"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>O aluno <strong>{props.aluno}</strong> tem nota: {props.nota} e esta <strong>{status}</strong></p>

        </div>
    )
}