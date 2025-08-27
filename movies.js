const reponse = await fetch("cinema.json");
const movies = await reponse.json();

for (let i = 0; i < movies.length; i++) {
  const article = movies[i];
  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = article.description;
  const sectionFiches = document.querySelector(".fiches");
  const cinemaElement = document.createElement("article");
  const movieElement = document.createElement("h2");
  movieElement.innerText = article.movie;
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

  sectionFiches.appendChild(movieElement);
  sectionFiches.appendChild(priceElement);
  sectionFiches.appendChild(dateElement);
  sectionFiches.appendChild(durationElement);
  sectionFiches.appendChild(timeElement);
  sectionFiches.appendChild(ticketsSoldElement);
  sectionFiches.appendChild(descriptionElement);
  sectionFiches.appendChild(cinemaElement);
}
