import { FC, useEffect, useState } from 'react'

import classes from './pokeCard.module.sass'
import { asyncGetPoke } from '../../../api/fetchPokes.tsx'
import { IPoke, IPokes } from '../../../models/IPoke.tsx'

interface PokeCardProps {
    pokemon: IPokes
}


export const PokeCard: FC<PokeCardProps> = ({ pokemon }) => {
    const [ poke, setPoke ] = useState<IPoke | null>(null)

    console.log(pokemon)

    useEffect(() => {
        asyncGetPoke(pokemon.name).then(data => {
            console.log(data)
            setPoke(data)
        })
    }, [])

    console.log(poke)

    return (
        <div className={classes.pokeCard}>
            <img src={poke?.sprites.other.dream_world.front_default} alt="pokemonImage"/>
            <p>{poke?.name}</p>
        </div>
    )
}