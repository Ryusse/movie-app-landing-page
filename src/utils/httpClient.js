const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDNkMmVhY2YyMWU1NWVjZmRlMTIxZjU2NTUzZWYwYyIsInN1YiI6IjYxNWY0YmU4MWQzNTYzMDAyYmJkNzQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1oGA-i4D0-qq8ZDgchmW9fEBrnAufBnOb7jijwu7PJ8",
      "Content-Type": "application/json;charset-utf-8",
    },
  }).then((result) => result.json());
}
