import React, { useState, useEffect, useCallback } from 'react';
import { capitalizeFirstLetter } from './utils';
import Pokeinfo from "./Pokeinfo";
import "./style.css";


const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const fetchPokemonData = useCallback(async () => {
  setLoading(true);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    getPokemon(data.results);
  } catch (error) {
    console.error('Erro ao buscar dados de pokémon:', error);
  } finally {
    setLoading(false);
  }
}, [url, setLoading]); 

  const getPokemon = async (res) => {
    const pokemonData = await Promise.all(
      res.map(async (item) => {
        try {
          const response = await fetch(item.url);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Erro ao buscar dados de pokémon:', error);
          return null; 
        }
      })
    );
  
    setPokeData((prevState) => {
      const updatedData = [...prevState, ...pokemonData.filter(item => item !== null)];
      updatedData.sort((a, b) => (a.id > b.id ? 1 : -1));
      return updatedData;
    });
  };
  

  useEffect(() => {
    const fetchData = async () => {
      await fetchPokemonData();
    };

    fetchData();
  }, [url, fetchPokemonData]);

  return (
    <>
      <h1 className='main-title'>Desafio React Consumir API: Explore o Mundo Pokémon</h1>
  
      <div className="container">
        <div className="left-content">
        

        {pokeData && pokeData.length > 0 ? (
          pokeData.map((item, index) => (
            <div key={index} className="card" onClick={() => setPokeDex(item)}>
            <h2>{item?.id ? `#${item.id}` : 'No ID'}</h2>
            {item?.sprites?.front_default && (
                <img src={item.sprites.front_default} alt="" />
              )}
            <h2>{item?.name ? capitalizeFirstLetter(item.name) : 'No Name'}</h2>
          </div>
        ))
) : (
  <h1>No Pokemon data available</h1>
)}
        </div>
  
        <div className="btn-group">
          {prevUrl && <button onClick={() => {
            setPokeData([]);
            setUrl(prevUrl);
          }}>Previous</button>}
  
          {nextUrl && <button onClick={() => {
            setPokeData([]);
            setUrl(nextUrl);
          }}>Next</button>}
        </div>
      </div>
  
      <div className="right-content">
        <Pokeinfo data={pokeDex} />
      </div>
  
      <footer>
        <p>&copy; Campinho Digital - Web Full Stack 2.2023 | Aprendiz - Alê Tavares</p>
      </footer>
    </>
  );
};

export default Main;


