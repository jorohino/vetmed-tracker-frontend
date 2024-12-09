import { checkResponse } from "./utils";
import { APIkey } from "./constants";

const baseUrl = "https://api.fda.gov/animalandveterinary/event.json";

export const getData = (APIkey) => {
  return fetch(`${baseUrl}?search=`);
};
