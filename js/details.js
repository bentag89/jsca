const trackdata = document.querySelector(".songinfo");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("trackId");

console.log(id);


const url = "https://noroffcors.herokuapp.com/https://itunes.apple.com/search?term=radiohead" + id;

console.log(url);

async function getSongs() {

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        createHtml(data);
      
    }
    catch(error) {
        console.log(error);
        trackdata.innerHTML = message("Oops, something went wrong...", error);
    }   
}

getSongs();


function createHtml(data) {
    trackdata.innerHTML = "";

        trackdata.innerHTML += `<div class="information">
                              <h2>Album Name: </h2><p>${data.collectionName}</p>
                              <h2>Track Number: </h2><p>${data.trackNumber}</p>
                              <h2>Release Date: </h2><p>${data.releaseDate}</p></div>`;
}
