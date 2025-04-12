async function fetchPokemon() {
    try {
        const input = document.getElementById("pokemonInput").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        // console.log(response);
        if (!response.ok) {
            throw new Error("Pokemon not found");
        }
        const data = await response.json();
        // console.log(data);

        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.getElementById("pokemonSpriteImg");
        pokemonImg.src = pokemonSprite;
        pokemonImg.alt = `${data.name} sprite`;
        pokemonImg.style.display = "block";
    }
    catch (error) {
        console.error("Error fetching Pokemon data:", error);
    }
}