import React from 'react';
import styled from '@emotion/styled';

// StyleComponent
const ContenedorFrase = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width:800px;
    @media( min-width: 992px){
        margint-top: 10rem;
    }
    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        font-weight: bold;
        color: #666;
        margin-top: 2rem;
    }
`;
// SFC
const Frase = ({ frase }) => {
    // Extraemos los datos
    const { quote, author } = frase;
    // Comprobamos que tenemos datos en el objeto de entrada
    if (Object.keys(frase).length === 0) {
        return null;
    }
    // Retornamos el componente
    return (
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>{author}</p>
        </ContenedorFrase>
    );
}
// Exportamos el componente
export default Frase;