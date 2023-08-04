const baseUrl = "https://pokeapi.co/api/v2";

fetch(`${baseUrl}/pokemon-species/magikarp`)
.then(response => response.json())
    .then(speciesData => {
        const pokemonName = speciesData.name;
        const pokemonNameElement = document.getElementById("pokemonName");
        pokemonNameElement.textContent = pokemonName;

        // Fetch Magikarp sprite data
        fetch(`${baseUrl}/pokemon/magikarp`)
            .then(response => response.json())
            .then(pokemonData => {
                const pokemonSpriteUrl = pokemonData.sprites.front_default;
                const pokemonSpriteElement = document.getElementById("pokemonSprite");
                pokemonSpriteElement.src = pokemonSpriteUrl;
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    })      
.catch(error => {
    console.error('Fetch error:', error);
});