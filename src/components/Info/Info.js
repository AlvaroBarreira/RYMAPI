import React from 'react'
import './Info.css';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import  CharacterContext from '../../contexts/CharactersContext';

function Info() {

    const { selected } = useContext(CharacterContext);

    let history = useHistory();

    return (
        <>
        <div id="container">	
	
            <div className="product-details">

                <h1 className="txt">{selected.name} </h1>
             
                <h2 className="txt1">Status: {selected.status} </h2>

                <h2 className="txt2">Gender: {selected.gender} </h2>

                <h2 className="txt3">Species: {selected.species} </h2>

            </div>


            <div className="product-image">

                <img src={selected.image} />
           
            </div>

        </div>

        <button className="btn" onClick={()=> {
            history.push('/')
        }}>
            <p className="btn-txt">Volver</p>
        </button>
        </>
    )
}

export default Info
