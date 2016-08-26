export const fetchAllPokemon = (success) => {
  $.ajax({
    type: "GET",
    url: "api/pokemon",
    success: success
  });
};

export const fetchPokemon = (success, pokemonID) => {
  $.ajax({
    type: "GET",
    url: `api/pokemon/${pokemonID}`,
    success: success
  });
};
