var searchButton = document.querySelector(".button");
var artistInput = document.querySelector("#artist-input");
// var zipInput = document.querySelector("#location-input");
var clearBtn = document.getElementById("clear")



var userArtist = "";
// var userZipCode = "";

var ticketMasterKey = "&apikey=26h0U7WteX49z1qSyZZko7MZWL0JtAtD";


function artistSearch(artist, zip) {
    var tickerMasterURL = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artist}${ticketMasterKey}`;
    console.log("artistSearch");
    console.log(artist);
    console.log(zip);

    fetch(tickerMasterURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            // console.log(data._embedded.events[0].url);

            for (var i = 0; i < data._embedded.events.length; i++) {
                var infoCard = document.getElementById("box").appendChild(document.createElement("button"));

                infoCard.className += "box is-active";
                infoCard.textContent = "Artist: " + data._embedded.events[i].name;


                // create buttons for artist searches
                var artistSear = JSON.parse(localStorage.getItem('searchedArtists'))
                infoCard.classList = "btn-info block";
                infoCard.setAttribute = ("data-artist", artistSear)
                infoCard.setAttribute = ("type", "submit");
                infoCard.setAttribute += ("id", "artist-" + artistSear)
                infoCard.idname
                // --------------------------------------------------

                var eventWho = data._embedded.events[i].name;
                var eventWhen = data._embedded.events[i].dates.start.localDate;

                // var eventName = document.querySelector("#artist");
                // eventName.innerHTML = "Artist: " + eventWho

                // var eventDate = document.querySelector("#date");
                // eventDate.innerHTML = "Date: " + eventWhen

                console.log(theVenue);

                // var ticketPrice = ; 
                for (var i = 0; i < data._embedded.events.length; i++) {
                    // console.log(theEvent[i]);

                    // Drilling into the fetched data and naming them
                    var theEvent = data._embedded.events[i].name;
                    var theDate = data._embedded.events[i].dates.start.localDate;

                    var venueName = data._embedded.events[i]._embedded.venues[0].name;
                    var venueAddress = data._embedded.events[i]._embedded.venues[0].address.line1;
                    var venueCity = data._embedded.events[i]._embedded.venues[0].city.name;
                    var venueCountry = data._embedded.events[i]._embedded.venues[0].country.name;
                    var theVenue = venueName + ", " + venueAddress + ", " + venueCity + ", " + venueCountry;
                    var thePrice = data._embedded.events[i].priceRanges[0].min;

                
                   // Creating a new container and then creating and appending our info into that container 
                    var theResultsBox = document.getElementById('search-list');
                    theResultsBox.innerHTML = "";

                    var theMiniBox = document.createElement("div")
                    theResultsBox.append(theMiniBox)
                    theMiniBox.className += "box"

                    var pTagArtist = document.createElement("p");
                    theMiniBox.appendChild(pTagArtist);
                    pTagArtist.textContent = "Artist: " + theEvent;

                    var pTagDate = document.createElement("p");
                    theMiniBox.appendChild(pTagDate);
                    pTagDate.textContent = "Date: " + theDate;

                    var pTagVenue = document.createElement("p");
                    theMiniBox.appendChild(pTagVenue);
                    pTagVenue.textContent = "Where: " + theVenue;

                    var pTagPrice = document.createElement("p");
                    theMiniBox.appendChild(pTagPrice);
                    pTagPrice.textContent = "Lowest Price: $" + thePrice;

                    
                    var tmasterLink = document.createElement("a");
                    var linktext = document.createTextNode("Click here for ticket availablity.");
                    tmasterLink.appendChild(linktext)
                    theMiniBox.appendChild(tmasterLink)
                    tmasterLink.href = data._embedded.events[0].url
                   
                }
            }

        });
}


// the click calls a function
// the function gathers the info
function addArtist(event) {
    event.preventDefault()
    console.log("you clicked me");
    console.log(artistInput.value);
    // console.log(zipInput.value);

    var currentArtist = artistInput.value
    // var currentZip = zipInput.value

    artistSearch(currentArtist)
    deezerSearch(currentArtist)
    storeHistory();
    imagePull(currentArtist);


}
// ------------------------------------------
// function createBtn(artist) {
//     // create buttons for artist searches
//     var artistSear = JSON.parse(localStorage.getItem('searchedArtists'))
//     infoCard.classList = "btn-info block";
//     infoCard.setAttribute = ("data-artist", artistSear)
//     infoCard.setAttribute = ("type", "submit");
//     infoCard.setAttribute = ("id", "artist-" + artistSear)
// }
// -----------------------------------------------


function storeHistory() {
    // variables to store storage keys for if statements
    var userSearch = artistInput.value.trim();

    if (!userSearch) {
        return;
    };

    var previousArtist = JSON.parse(localStorage.getItem("searchedArtists")) || [];
    previousArtist.push(userSearch);
    localStorage.setItem("searchedArtists", JSON.stringify(previousArtist));


    // clear search bar after clicking search button
    artistInput.value = "";
    console.log(previousArtist);
    //     removePrevious()
    // }
}

function loadHistory() {
    if (localStorage.getItem("searchedArtists")) {
        var previousArtist = JSON.parse(localStorage.getItem("searchedArtists"));
        console.log(previousArtist);
        for (let i = 0; i < previousArtist.length; i++) {
            // createBtn(previousArtist[i]);

        }
    }

    for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
        document.getElementsByClassName("button")[i].addEventListener('click', function () {
            var btnClicked = this.getAttibute("data-artist");
            artistSearch(btnClicked);
            console.log(btnClicked);
            // removePrevious()
        });

    }
}


searchButton.addEventListener("click", addArtist);
loadHistory();


function deezerSearch(artist) {
    var deezerURL = "https://api.deezer.com/search/artist/?q=" + artist + "&index=0&limit=1&output=json";
    // console.log(artist);
    fetch(deezerURL)
        .then(function (response) {
            return response.json();
       
        }).catch(function (error) {
            console.warn(error);

        })
}

function imagePull(artist) {
    var tmasterData;
    var deezerData;

    // Call the API
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${artist}${ticketMasterKey}`)
        .then(function (response) {
            return response.json();

        }).then(function (data) {
            console.log(data);
            // Store the post data to a variable
            tmasterData = data;

            // Fetch another API
            return fetch("https://api.deezer.com/search/artist/?q=" + artist + "&index=0&limit=1&output=json");

        }).then(function (response) {
            return response.json();

        }).then(function (userData) {
            console.log(userData);
            deezerData = userData;



            // establish variables for image pull
            // for (var i = 0; i < data._embedded.events.length; i++) {
                var tmasterName = tmasterData._embedded.events[0].name;
                var tmasterImage = tmasterData._embedded.events[0].images[0].url;
                var deezerName = deezerData.data[0].name;
                var deezerImage = deezerData.data[0].picture;
                // var deezerLink = deezerData.data[0].link;

                // if deezer artist === ticketmaster artist (true)
                if (deezerImage) {
                    // append the deezer image of artist to the html
                    // var deezerHead = document.createElement('img');
                    // deezerHead.src = deezerImage;
                    var domHead = document.querySelector("#imagehead");
                    domHead.src = deezerImage
                    var eventName = document.querySelector("#artist");
                    eventName.innerHTML = "Artist: " + deezerName
                    // domHead.appendChild(deezerHead);

                } else if (deezerImage = false) {
                    // var tmasterHead = document.createElement('img');
                    // tmasterHead.src = tmasterImage;
                    var domHead = document.querySelector("#imagehead");
                    domHead.scr = tmasterImage
                    // if deezer artist !== ticketmaster artist 
                } else if (deezerName !== tmasterName) {
                    // clear the image and remove the child
                    deezerHead.parentNode.removeChild(deezerHead);
                    tmasterHead.parentNode.removeChild(tmasterHead)
                }
                return result;
            // }
        }).catch(function (error) {
            console.log(error);
        });
}


