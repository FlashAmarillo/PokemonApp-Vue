<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" 
                :key="pokemon.id" 
                @click="$emit('selection', pokemon.id)" >
                {{pokemon.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 200px;
    padding: 3px;
}

li:hover {
    background-color: rgba(255, 255, 255, 0.589);
    border: solid 1px rgb(108, 108, 238);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>