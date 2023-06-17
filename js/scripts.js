let PokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

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
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(item) {
    PokemonRepository.loadDetails(item).then(function () {
      console.log(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
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
PokemonRepository.loadList().then(function () {
  PokemonRepository.getAll().forEach(function (pokemon) {
    PokemonRepository.addListItem(pokemon);
  });
});
