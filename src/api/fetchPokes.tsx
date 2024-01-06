import axios from 'axios'
import { IPoke, IPokesData } from '../models/IPoke.tsx'

const BASE_URL = `https://pokeapi.co/api/v2/pokemon`

export const asyncGetAllPoke = async (offset: number, limit: number): Promise<IPokesData> => {
    try {
        const response = await axios.get(`${BASE_URL}/?offset=${offset}&limit=${limit}`)
        return response.data
    }
    catch (e) {
        return Promise.reject(e)
    }
}


export const asyncGetPoke = async (name: string): Promise<IPoke> => {
    try {
        const response = await axios.get(`${BASE_URL}/${name}`)
        console.log(response)
        return response.data
    }
    catch (e) {
        return Promise.reject(e)
    }
}