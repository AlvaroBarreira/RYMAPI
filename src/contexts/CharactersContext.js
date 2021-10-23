import { useState, useEffect, createContext } from "react";
import { getAllCharacters } from '../services/CharactersData';
import image from '../../src/rymbg.png';

const CharacterContext = createContext();

const CharacterData = ({children}) => {


    const [isLoading, setIsLoading] = useState(true);

    const [data, setData] = useState([]);

    const [errores, setErrores] = useState({});

    const [selected, setSelected] = useState({});

    const values = { 
        data, 
        errores, 
        isLoading, 
        setIsLoading, 
        setData,
        image, 
        selected,
        setSelected,
    };

    useEffect(() => {

        getAllCharacters(setData, setErrores)

    }, []);


    return (
        <CharacterContext.Provider value={values}>
            {children}
        </CharacterContext.Provider>
    )

}


export { CharacterData };
export default CharacterContext;
