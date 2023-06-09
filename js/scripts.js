let pokemonList = [
  //database of pokemon for pokedex//
  { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"], HP: 45 },
  { name: "Charmander", height: 0.6, type: ["Fire"], HP: 39 },
  { name: "Squirtle", height: 0.5, type: ["Water"], HP: 44 },
  { name: "Abra", height: 0.9, type: ["psychic"], HP: 25 },
];

/*for (let i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height <= 0.5) {
    document.write(
      pokemonList[i].name +
        " " +
        "(Height: " +
        pokemonList[i].height +
        ")" +
        " -That's a small size pokemon! " +
        "<br><br>"
    );
  } else if (pokemonList[i].height > 0.5 && pokemonList[i].height <= 0.8) {
    document.write(
      pokemonList[i].name +
        " " +
        "(Height: " +
        pokemonList[i].height +
        ")" +
        " -That's an avergae size pokemon! " +
        "<br><br>"
    );
  } else {
    document.write(
      pokemonList[i].name +
        " " +
        "(Height: " +
        pokemonList[i].height +
        ")" +
        " -That's a Big pokemon! " +
        "<br><br>"
    );
  }
}
*/

function myloopfunction(aList) {
  if (aList.height <= 0.5) {
    document.write(
      aList.name +
        " " +
        "(Height: " +
        aList.height +
        ")" +
        " -That's a small size pokemon! " +
        "<br><br>"
    );
  } else if (aList.height > 0.5 && aList.height <= 0.8) {
    document.write(
      aList.name +
        " " +
        "(Height: " +
        aList.height +
        ")" +
        " -That's an avergae size pokemon! " +
        "<br><br>"
    );
  } else {
    document.write(
      aList.name +
        " " +
        "(Height: " +
        aList.height +
        ")" +
        " -That's a Big pokemon! " +
        "<br><br>"
    );
  }
}
pokemonList.forEach(myloopfunction);
