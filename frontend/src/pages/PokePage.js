import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokePage() {
  let { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Récupérer les données du pokemon
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Stocker les données dans l'état local
        setPokemonData(data);
      });
  }, [id]);

  return (
    <div className='bg-deepred vh-100 vw-100'>
        <h1 className='text-capitalize bg-white'>{pokemonData ? pokemonData.name : 'Chargement...'}</h1>
        {pokemonData && (
            <img
                className='bg-white'
                src={pokemonData.sprites.front_default}
                alt={`Sprite de ${pokemonData.name}`}
            />
        )}
    </div>
  );
}

export default PokePage;
