const url = "https://noroffcors.herokuapp.com/https://itunes.apple.com/search?term=radiohead";
const infoDiv = document.querySelector(".info");

const getData = async () => {
    const response = await fetch(url);

    const data = await response.json();

    const result = data.results;

    console.log(result);

    infoDiv.innerHTML = "";

    for (let i = 0; i < result.length; i++) {

        if (i === 20) {
            break;
        }

        infoDiv.innerHTML += `<div class="information">
                              <a href="details.html?trackId=${result[i].trackId}">
                              <p>${result[i].trackName}</p></a></div>`;
    }
};

getData();