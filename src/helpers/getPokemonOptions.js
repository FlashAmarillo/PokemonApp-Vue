import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
    
    const pokemonsArr = Array.from( Array(650) ); //crea un arreglo de 650 posiciones
    
    return pokemonsArr.map((_, index) => index +1);


}

const getPokemonOptions = async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5 );

    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4));
    
    return pokemons;
}

const getPokemonNames = async ([a,b,c,d] = []) => {   
    
    //hacemos la peticion
    try {
        //arreglo de promesas
        const promiseArr = [
            pokemonApi(`/${a}`),
            pokemonApi(`/${b}`),
            pokemonApi(`/${c}`),
            pokemonApi(`/${d}`)
        ]
        const [p1, p2, p3, p4] = await Promise.all( promiseArr );
        return [
            { name: p1.data.name, id: p1.data.id},
            { name: p2.data.name, id: p2.data.id},
            { name: p3.data.name, id: p3.data.id},
            { name: p4.data.name, id: p4.data.id}
        ]
    } catch (error) {
        console.log(error)
    }
}

export default getPokemonOptions;