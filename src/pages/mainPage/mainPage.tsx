import { useEffect, useState } from 'react'

import classes from './mainPage.module.sass'
import { asyncGetAllPoke } from '../../api/fetchPokes.tsx'
import { PokeCard } from '../../components/ui/pokeCard/pokeCard.tsx'
import { IPokes } from '../../models/IPoke.tsx'


export const MainPage = () => {
    const [ pokes, setPokes ] = useState<IPokes[]>([])
    const [ offset, setOffset ] = useState<number>(0)
    const [ limit, setLimit ] = useState<number>(8)
    const [ page, setPage ] = useState<number>(1)
    const [ maxPage, setMaxPage ] = useState<number | null>(null)

    useEffect(() => {
        asyncGetAllPoke(offset, limit).then(data => {
            setPokes(data.results)
            const allCount = Math.ceil(data.count / limit)
            console.log(allCount)
        })
    }, [])

    return (
        <div className={classes.mainPage}>
            <div className={'container'}>
                <div className={classes.mainPage__inner}>
                    <div className={classes.pokeList}>
                        {pokes.map(pokemon =>
                            <PokeCard key={pokemon.name} pokemon={pokemon}/>
                        )}
                    </div>
                    <div className={classes.pagination}>
                        <button>prev</button>
                        <p></p>
                        <button>next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}