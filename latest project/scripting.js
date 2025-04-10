const movieNameRef = document.getElementById("movieName");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");
key="fbeda953";

// const addToWatchlist = (movie) => {
//   let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
//   watchlist.push(movie);
//   localStorage.setItem('watchlist', JSON.stringify(watchlist));
//   renderWatchlist();
// };

// const renderWatchlist = () => {
//   let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
//   const watchlistDiv = document.getElementById('watchlist');
//   watchlistDiv.innerHTML = '<h3>My Watchlist</h3>';
//   if (watchlist.length === 0) {
//     watchlistDiv.innerHTML += '<p>Your watchlist is empty</p>';
//   } else {
//     watchlist.forEach((movie) => {
//       watchlistDiv.innerHTML += `<div>${movie.Title} - ${movie.Year}</div>`;
//     });
//   }
// };

const getMovie = () => {
  const movieName = movieNameRef.value;
  const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;
  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter Movie Name</h3>`;
  } else {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.Response == "True") {
          console.log(data);
          console.log(data.Poster);
          console.log(data.Title);  
          console.log(data.imdbRating);
          console.log(data.Rated);
          console.log(data.Year);
          console.log(data.Runtime);
          console.log(data.Genre);
          console.log(data.Plot);
          console.log(data.Actors);
          console.log(data.Director);
          result.innerHTML = `
            <div class="info">
                <img src="${data.Poster}" class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                        <h4>IMDB Rating:</h4>
                        <img src="star-icon.svg">
                        <h4>${data.imdbRating}/10</h4>
                    </div>
                    <div class="details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                    </div>
                    <div class="genre">
                        <div>${data.Genre.split(",").join("</div><div>")}</div>
                    </div>
                  </div>
            </div>
            <h3>Plot:</h3>
            <p>${data.Plot}</p>
            <h3>Cast:</h3>
            <p>${data.Actors}</p>
        `;
        } else {
          result.innerHTML = `<h3 class="msg">${data.error()}</h3>`;
        }
      });

  }
};
searchBtn.addEventListener("click", getMovie);
window.addEventListener("load", getMovie);
window.addEventListener('load', renderWatchlist);

// <button onclick="addToWatchlist(${JSON.stringify(data)})">Add to Watchlist</button>