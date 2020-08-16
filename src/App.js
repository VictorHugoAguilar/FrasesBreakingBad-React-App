import React, { useState , useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
  color: #fff;
  margin-top: 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 0.7rem;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

const URL = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

function App() {

  // seteamos el state
  const [ frase , setFrase ] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(URL)
    const frase = await api.json();
    setFrase(frase[0]);
  }

  useEffect( ()=> {
      consultarAPI();
  }, [] );

  return (
    <Contenedor>
      <Frase frase={frase}/>
      <Boton
        onClick={ consultarAPI }
      >Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
