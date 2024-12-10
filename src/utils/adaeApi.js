import { checkResponse } from "./utils";
import { APIkey } from "./constants";

const baseUrl = "https://api.fda.gov/animalandveterinary/event.json";

// Search form suggestions (No error handling added to this component to prevent constant influx of 404s from incomplete user inputs)
function getSuggestions(ingredientName) {
  const encodedIngredientName = encodeURIComponent(ingredientName);

  return fetch(
    `https://api.fda.gov/animalandveterinary/event.json?search=drug.active_ingredients.name:${encodedIngredientName}`
  )
    .then(checkResponse)
    .then((json) => {
      const results = (json.results || []).filter((result) => {
        return (
          result.drug &&
          result.drug.some((drug) =>
            drug.active_ingredients.some(
              (ingredient) =>
                typeof ingredient.name === "string" &&
                ingredient.name
                  .toLowerCase()
                  .includes(ingredientName.toLowerCase())
            )
          )
        );
      });

      return results;
    })
    .catch((err) => {
      console.error("Error fetching suggestions: ", err);
      return [];
    });
}

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

export { baseUrl, getSuggestions, getData, getTotalTreated, getTotalAffected };
