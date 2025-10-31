// =================================
// Challenge 1 - Favorite Movie List 
// =================================
const originalMovies = ["The Shawshank Redemption", "The Breakfast Club", "Pulp Fiction"];
let favoriteMovies = [...originalMovies];

const movieInput = document.getElementById("movieInput");
const movieOut = document.getElementById("movieOut");
const addMovieBtn = document.getElementById("addMovieBtn");
const resetMoviesBtn = document.getElementById("resetMoviesBtn");

function renderMovies() {
    let list = "";
    for (let i = 0; i < favoriteMovies.length; i++) {
        list += (i ? ", " : "") + favoriteMovies[i];
    }
    movieOut.textContent = list || "No favorite movies added yet.";
}
renderMovies();

addMovieBtn.addEventListener("click", () => {
    const title = movieInput.value.trim();
    if (title.length === 0) {
        movieOut.textContent = "Please enter a movie title.";
        return;
    }
    favoriteMovies.push(title);
    renderMovies();
    movieInput.value = "";
});

resetMoviesBtn.addEventListener("click", () => {
    favoriteMovies = [...originalMovies];
    renderMovies();
});