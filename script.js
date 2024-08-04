let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search");
let result = document.getElementById("result");

let key = "72c4fc60";

let getMovie = () => {
  let movieName = movieNameRef.value;
  let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

  if (movieName.length <= 0) {
    result.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
  } else {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.Response === "True") {
          result.innerHTML = `
            <div class="info">
              <img src="${data.Poster}" class="poster" alt="Movie Poster">
              <div class="wrapper">
                <h2>${data.Title}</h2>
                <div class="rating">
                  <img src="star-icon.svg" alt="">
                  <p><strong>Rating:</strong> ${data.imdbRating}</p>
                </div>
                <h2>Plot:</h2>
                <p style="width:300px"> ${data.Plot}</p>
                <h2>Cast:</h2>
                <p style="width:300px"> ${data.Actors}</p>
              <div class="details">
                <p><strong>Rated:</strong> ${data.Rated}</p>
                <p><strong>Year:</strong> ${data.Year}</p>
                <p><strong>Runtime:</strong> ${data.Runtime}</p>
              </div>
              </div>
            </div>
          `;
        } else {
          result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
        }
      })
      .catch((error) => {
        result.innerHTML = `<h3 class="msg">Error Occurred: ${error.message}</h3>`;
        console.error("Fetch Error:", error);
      });
  }
};

// Arama butonuna tıklanma olayını dinleyin
searchBtn.addEventListener("click", getMovie);
