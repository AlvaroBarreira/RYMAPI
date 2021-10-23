import { useContext, useState } from 'react';
import  CharacterContext from '../../contexts/CharactersContext';
import Loader from 'react-loader-spinner';
import Cards from '../Cards/Cards'
import Search from '../Search/Search'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './Characters.css';

const Characters = () => {

    const {data, isLoading, setIsLoading } = useContext(CharacterContext);

    const [search, setSearch] = useState('');

    const characterFilter = data.filter((name) => {
        if (name.name.toLowerCase().includes(search.toLowerCase())) {
            return (
                name
            )
        }  
    })

    console.log(characterFilter.length)

    setTimeout(() => setIsLoading(false), 2000)


    return (  
        <>

            <Search 
                search={search} 
                setSearch={setSearch} 
            />

            <div   
                className="cards-container" 
                style={isLoading ? { gridTemplateColumns: "repeat(1,1fr)" } : { gridTemplateColumns: "repeat(2,1fr)" }
                }>

                {
                    isLoading ? (

                        <div className="svg-container">
                            <Loader
                                type="TailSpin"
                                color="#5fb984"
                                height={200}
                                width={200}

                            />
                        </div>
                    ) : characterFilter.length > 0 ? (

                        characterFilter.map((char) => (

                            <Cards
                                key={char.id}
                                name={char.name}
                                status={char.status}
                                image={char.image}
                                character={char}

                            />

                        ))
                    ) : (
                        <p>
                            No se encontro personajes con la busqueda{' '}

                        </p>
                    )}
            </div>

        </>
    )
}

export default Characters;

