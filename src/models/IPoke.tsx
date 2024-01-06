
export interface IPokes {
    name: string
    url: string
}

export interface IPokesData {
    count: number
    next: string
    previous: string | null
    results: IPokes[]
}

export interface IPoke {
    abilities: [
        ability: {
            name: string
        }
    ]
    name: string
    sprites: {
        other: {
            dream_world: {
                front_default: string
            }
        }
    }
}