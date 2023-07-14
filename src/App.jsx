import "./App.css";
import React from 'react';

// COMPONENTS
import { ListaAlunos } from "./components/repetição/ListaAlunos";
import { Card } from './components/layout/Card';
import { Primeiro } from './components/basicos/Primeiro';
import { ComParametro } from './components/basicos/ComParametro';
import { Fragmento } from './components/basicos/Fragmento';
import { Aleatorio } from './components/basicos/Aleatorio';
import { Familia } from "./components/basicos/Familia";
import { FamiliaMembro } from "./components/basicos/FamiliaMembro";

export const App = (props) => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Card titulo="#06 - Repetição" color="#4f02a8">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="#05 - Componente com Filhos" color="#40B537">
                    <Familia sobrenome="Rocha">
                        <FamiliaMembro nome="Caio" />
                        <FamiliaMembro nome="Vinicius"/>
                        <FamiliaMembro nome="Arthur"/>
                        <FamiliaMembro nome="Agnes"/>
                        <FamiliaMembro nome="Marcia"/>
                        <FamiliaMembro nome="Paulo"/>
                        <FamiliaMembro nome="Andre"/>
                        <FamiliaMembro nome="Lucas"/>
                    </Familia>
                </Card>
                <Card titulo="#04 - Desafio Aleatório" color="#800080">
                    <Aleatorio
                        min={1}
                        max={100}
                    />
                </Card>

                <Card titulo="#03 - Fragmento" color="#40E0D0">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Componente com parametro" color="#1B1FAC">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Caio"
                        nota={10}
                    />
                </Card>

                <Card titulo="#01 - Componente inicial" color="#D2EE19">
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}
