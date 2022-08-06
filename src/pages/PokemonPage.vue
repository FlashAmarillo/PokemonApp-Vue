<template>

    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h2>¿Quien es este Pokémon?</h2>

        <PokemonImage 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon" 
        />

        <PokemonOption 
            :pokemons="pokemonArr" 
            @selection="checkAnswer" 
        />

        <template v-if="showAnswer" class="fade-in">
            <h2>{{message}}</h2>
            <button @click="newGame">Nuevo Juego</button>
        </template>
    </div>


</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOption from '@/components/PokemonOption.vue'
import getPokemonOptions from '../helpers/getPokemonOptions'



export default {
    components: { PokemonImage, PokemonOption },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            //creamos un numero aleatorio de 0 a 3
            const rndInt = Math.floor( Math.random() * 4 );
            this.pokemon = this.pokemonArr[ rndInt ];
        },
        checkAnswer( selectedId) {
            this.showPokemon = true;
            this.showAnswer = true;
            if(this.pokemon.id === selectedId) {
                this.message = `Correcto! 😁 es ${this.pokemon.name}!`;
            } else {
                this.message = `Oops, era ${this.pokemon.name}😭`;
            }
        }, 
        newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this.pokemon = null;
            this.pokemonArr = [];
            this.mixPokemonArray();
        }
    },
    mounted() { //metodo del ciclo de vida de los componentes
        // llamamos nuestro método que definimos
        this.mixPokemonArray()
    }
}
</script>
