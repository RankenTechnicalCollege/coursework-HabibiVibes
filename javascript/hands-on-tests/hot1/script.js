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

// =================================
// Challenge 2 - Age Verification
// =================================
const ageInput = document.getElementById("ageInput");
const ageOut = document.getElementById("ageOut");
document.getElementById("verifyAgeBtn").addEventListener("click", () => {
    const raw = ageInput.value.trim();
    const num = Number(raw);

    if (raw == "" || Number.isNaN(num)) {
        ageOut.textContent = "Please enter your age!";
        return;
    }

    if (!Number.isInteger(num)) {
        ageOut.textContent = "Please enter your age!";
        return;
    }

    if (num < 1 || num > 200) {
        ageOut.textContent = "Age is out of range!";
        return;
    }

    if (num >= 21) {
        ageOut.textContent = "Welcome to the venue!";
    } else {
        ageOut.textContent = "You must be at least 21 years old to enter.";
    }
});

// =================================
// Challenge 3 - Song Lyrics
// =================================
const lyricOut = document.getElementById("lyricOut");
document.getElementById("lyricBtn").addEventListener("click", () => {
    const raw = document.getElementById("lyricNum").value.trim();
    const n = Number(raw);

    if (raw === "" || Number.isNaN(n)) {
        lyricOut.textContent = "Please enter a number!";
        return;
    }

    if (!Number.isInteger(n) || n < 1 || n > 3) {
        lyricOut.textContent = "Your didn't enter a valid number!";
        return;
    }

    let msg = "";
    if (n === 1) msg = "One is the loneliest number that you'll ever do.";
    else if (n === 2) msg = "Two can be as bad as one, it's the loneliest number since the number one.";
    else if (n === 3) msg = "There is no three.";

    lyricOut.textContent = msg;
});

// =================================
// Challenge 4 - Odd Numbers (1-100)
// =================================
const oddOut = document.getElementById("oddOut");
document.getElementById("oddBtn").addEventListener("click", () => {
    let out = [];
    for (let i = 1; i <= 100; i += 2) {
        out.push(i);
    }
    oddOut.textContent = out.join(", ");
});
document.getElementById("clearOddBtn").addEventListener("click", () => (oddOut.textContent = ""));

// =================================
// Challenge 5 - Multiples of x (1-100)
// =================================
const mult15Out = document.getElementById("mult15Out");

const ch5Section = document.getElementById("ch5").querySelector(".row");
const inputX = document.createElement("input");
inputX.type = "number";
inputX.id = "multiInput";
inputX.placeholder = "Enter a number";
ch5Section.prepend(inputX);

document.getElementById("mult15Btn").addEventListener("click", () => {
    const x = Number(inputX.value);
    if (Number.isNaN(x) || x <= 0) {
        mult15Out.textContent = "Please enter a valid positive number!";
        return;
    }
    let out = [];
    for (let i = 1; i <= 100; i++) {
        if (i % x === 0) {
            out.push(i);
        }
    }
    mult15Out.textContent = out.join(", ") || `No multiples of ${x} found between 1 and 100.`;
});

document.getElementById("clear15Btn").addEventListener("click", () => {
    mult15Out.textContent = "";
    inputX.value = "";
});