import React from 'react'
import alunos from '../../data/alunos'

export const ListaAlunos = (props) => {

    const alunosJSX = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} &gt; {aluno.nota}
            </li>
        )
    })
  return (
    <div>
        <ul style={{listStyle: 'none'}}>
            {alunosJSX}
        </ul>
    </div>
  )
}
