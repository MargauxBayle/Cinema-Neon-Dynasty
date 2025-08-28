const reponse = await fetch("cinema.json");
const movies = await reponse.json();

//movies cards
function genererMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    const article = movies[i];
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description;
    const sectionFiches = document.querySelector(".fiches");
    const cinemaElement = document.createElement("article");

    const movieElement = document.createElement("h2");
    movieElement.innerText = article.movie;
    const imageElement = document.createElement("img");
    imageElement.src = article.image;
    const priceElement = document.createElement("p");
    priceElement.innerText = `Prix: ${article.price}€`;
    const dateElement = document.createElement("p");
    dateElement.innerText = `Date: ${article.date}`;
    const durationElement = document.createElement("p");
    durationElement.innerText = `Durée: ${article.duration} minutes`;
    const timeElement = document.createElement("p");
    timeElement.innerText = `Horaire: ${article.time}`;
    const ticketsSoldElement = document.createElement("p");
    ticketsSoldElement.innerText = `Places disponibles: ${
      80 - article.ticketsSold
    }`;

    sectionFiches.appendChild(imageElement);
    sectionFiches.appendChild(movieElement);
    sectionFiches.appendChild(priceElement);
    sectionFiches.appendChild(dateElement);
    sectionFiches.appendChild(durationElement);
    sectionFiches.appendChild(timeElement);
    sectionFiches.appendChild(ticketsSoldElement);
    sectionFiches.appendChild(descriptionElement);
    sectionFiches.appendChild(cinemaElement);
  }
}

genererMovies(movies);

//sort and filter

const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
  const moviesOrdonnes = Array.from(movies);
  moviesOrdonnes.sort(function (a, b) {
    return a.price - b.price;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererMovies(moviesOrdonnes);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
  const moviesFiltres = movies.filter(function (movie) {
    return movie.ticketsSold < 80;
  });
  document.querySelector(".fiches").innerHTML = "";
  genererMovies(moviesFiltres);
});

let maxBar = 80;
let currentBar = 0;
let progressBar;
let intervalId;

let initialisation = function () {
  progressBar = document.getElementById("progressBar");
  progressBar.value = currentBar;
  progressBar.max = maxBar;
};

let displayBar = function () {
  currentBar++;
  progressBar.value = currentBar;
};
