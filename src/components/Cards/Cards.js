import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Cards.css';
import { useContext } from 'react';
import  CharacterContext from '../../contexts/CharactersContext';

function Cards({
    name,
    status,
    image,
    character,
}) {

    const { selected, setSelected } = useContext(CharacterContext);

    const [bgC, setBgC] = useState('gray')

    let history = useHistory();

    useEffect(() => {

        if (status === "Alive") {
            setBgC('rgba(37, 181, 97,1)')
        } else if (status === "Dead") {
            setBgC('rgba(231, 69, 69,1)')
        } else {
            setBgC('rgba(102, 102, 102,1)')
        }
        
    }, [status])

  
    

    return (

        
        <div className="rectangle1" onClick={() => {
            setSelected(character)
            history.push('/Character')
            console.log(selected)
        }
        }>
            <div className="rectangle2" ></div>
            <div className="elipse1" style={{ background: bgC }}>
                <div className="elipse2">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="rectangle3">
                <h1 className="text">{name}</h1>
                <h2 className="text2">{status}</h2>
            </div>
        </div>

    )
}

export default Cards
