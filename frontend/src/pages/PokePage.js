import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PokePage() {
    // Récupérer l'id du pokemon
    let { id } = useParams()
    useEffect(() => {
        // Récupérer les données du pokemon
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }, [id])

    return (
    <div>PokePage</div>
    )
}

export default PokePage