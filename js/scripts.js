let PokemonRepository = (function () {
  let pokemonList = [
    //database of pokemon for pokedex//
    { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"], HP: 45 },
    { name: "Charmander", height: 0.6, type: ["Fire"], HP: 39 },
    { name: "Squirtle", height: 0.5, type: ["Water"], HP: 44 },
    { name: "Abra", height: 0.9, type: ["psychic"], HP: 25 },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addListItem(pokemon) {
    let pokemonDeck = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonDeck.appendChild(listpokemon);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

/*function myloopfunction(pokemon) {
  console.log(pokemon);
  if (pokemon.height <= 0.5) {
    document.write(
      pokemon.name +
        " " +
        "(Height: " +
        pokemon.height +
        ")" +
        " -That's a small size pokemon! " +
        "<br><br>"
    );
  } else if (pokemon.height > 0.5 && pokemon.height <= 0.8) {
    document.write(
      pokemon.name +
        " " +
        "(Height: " +
        pokemon.height +
        ")" +
        " -That's an avergae size pokemon! " +
        "<br><br>"
    );
  } else {
    document.write(
      pokemon.name +
        " " +
        "(Height: " +
        pokemon.height +
        ")" +
        " -That's a Big pokemon! " +
        "<br><br>"
    );
  }
}

PokemonReposity.getAll().forEach(myloopfunction);
*/

PokemonRepository.getAll().forEach(function (pokemon) {
  PokemonRepository.addListItem(pokemon);
});
