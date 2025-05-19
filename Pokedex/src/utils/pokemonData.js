export const generations = [
    { id: 1, name: 'Generation I', limit: 151, offset: 0 },
    { id: 2, name: 'Generation II', limit: 100, offset: 151 },
    { id: 3, name: 'Generation III', limit: 135, offset: 251 },
    { id: 4, name: 'Generation IV', limit: 107, offset: 386 },
    { id: 5, name: 'Generation V', limit: 156, offset: 493 },
    { id: 6, name: 'Generation VI', limit: 72, offset: 649 },
    { id: 7, name: 'Generation VII', limit: 88, offset: 721 },
    { id: 8, name: 'Generation VIII', limit: 96, offset: 809 },
    { id: 9, name: 'Generation IX', limit: 120, offset: 905 }
];

// offset: will tell us where to start fetching data from
// *to make sure we start from the right pokemon, we will do offest + 1 as the first ID is 1. *min = offset + 1
// Generation I starts from 1, Generation II starts from 152
// limit: will tell us how many pokemons to fetch in reference to their generation.
// max = offset + limit. ex: Generation I has 151 pokemons, so max = 0 + 151 = 151. Thus, capturing all pokemons from that generation.

// https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
// we want this to be dynamic, so we will use string literals: `https://pokeapi.co/api/v2/pokemon?limit=${generation.limit}&offset=${generation.offset}` 