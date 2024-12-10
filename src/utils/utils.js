export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else if (res.status === 404) {
    console.warn("No results found for the query.");
    return { results: [] };
  } else {
    console.error(`Unexpected error: ${res.status}, ${res.statusText}`);
    throw new Error(`Error: ${res.status}`);
  }
}
