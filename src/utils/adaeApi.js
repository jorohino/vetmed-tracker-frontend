import { checkResponse } from "./utils";
import { APIkey } from "./constants";

const baseUrl = "https://api.fda.gov/animalandveterinary/event.json";

// General data retrieval
function getData(ingredientName, species = "") {
  const encodedIngredientName = encodeURIComponent(ingredientName);
  const encodedSpecies = species
    ? `+AND+animal.species:${encodeURIComponent(species)}`
    : "";

  return fetch(
    `${baseUrl}?search=drug.active_ingredients.name:${encodedIngredientName}${encodedSpecies}&api_key=${APIkey}`
  )
    .then(checkResponse)
    .catch((err) => {
      console.error("API Fetch Error:", err);
      throw err;
    });
}
// Total animals treated by ingredient (+/- species filter)
function getTotalTreated(ingredientName, species = "") {
  const encodedIngredientName = encodeURIComponent(ingredientName);
  const encodedSpecies = species
    ? `+AND+animal.species:${encodeURIComponent(species)}`
    : "";

  return fetch(
    `${baseUrl}?search=drug.active_ingredients.name:${encodedIngredientName}${encodedSpecies}&count=number_of_animals_treated&api_key=${APIkey}`
  )
    .then(checkResponse)
    .then((res) =>
      res.results.reduce(
        (total, result) => total + result.term * result.count,
        0
      )
    )
    .catch((err) => {
      console.error("API Fetch Error: ", err);
      throw err;
    });
}

// Total animals affected by reaction from ingredient (+/- species filter)
function getTotalAffected(ingredientName, reaction, species = "") {
  const encodedIngredientName = encodeURIComponent(ingredientName);
  const encodedSpecies = species
    ? `+AND+animal.species:${encodeURIComponent(species)}`
    : "";
  const encodedReaction = encodeURIComponent(reaction);

  return fetch(
    `${baseUrl}?search=drug.active_ingredients.name:${encodedIngredientName}${encodedSpecies}+AND+reaction.veddra_term_name:${encodedReaction}&count=number_of_animals_affected&api_key=${APIkey}`
  )
    .then(checkResponse)
    .then((res) =>
      res.results.reduce(
        (total, result) => total + result.term * result.count,
        0
      )
    )
    .catch((err) => {
      console.error("API Fetch Error: ", err);
      throw err;
    });
}

export { baseUrl, getData, getTotalTreated, getTotalAffected };
