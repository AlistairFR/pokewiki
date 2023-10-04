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
    <div>
        <h1 className='text-capitalize'>{pokemonData ? pokemonData.name : 'Chargement...'}</h1>
        {pokemonData && (
            <img
                src={pokemonData.sprites.front_default}
                alt={`Sprite de ${pokemonData.name}`}
            />
        )}
    </div>
  );
}

export default PokePage;
