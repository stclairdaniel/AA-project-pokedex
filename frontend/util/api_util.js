export const fetchAllPokemon = (success) => {
  $.ajax({
    type: "GET",
    url: "api/pokemon",
    success: success
  });
};
