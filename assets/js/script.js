var searchButton = document.querySelector(".button");
var artistInput = document.querySelector("#artist-input");
var zipInput = document.querySelector("#location-input");


// var theResultsBox = document.getElementById('search-list');
// var theMiniBox = document.createElement("div");

var userArtist = "";
var userZipCode = "";

var testRadius = 15;
var testZipCode = 10001;
var testKeyword = "alicia keys";
var ticketMasterKey = "&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc";


// "&postalCode= " + testZipCode + "&radius=" + testRadius +

// var testWithZip = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&postalCode=10901&radius=100&unit=&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"
// temporailly defining the searched keyword until its connected to an input in HTML
// var test = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"

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


                var eventName = document.querySelector("#artist");
                eventName.innerHTML = "Artist: " + eventWho


                var eventDate = document.querySelector("#date");
                eventDate.innerHTML = "Date: " + eventWhen


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
                }
            }

        });
}

// searchHistory()

// the click calls a function
// the function gathers the info
function addArtist(event) {
    event.preventDefault()
    console.log("you clicked me");
    console.log(artistInput.value);
    console.log(zipInput.value);

    var currentArtist = artistInput.value
    var currentZip = zipInput.value

    // // I think HERE is where the local storage stuff can happen
    // var searchedHistory = document.getElementById("history");
    // var listEl = document.createElement("li");
    // searchedHistory.appendChild(listEl);
    // listEl.textContent = artistInput.value;

    artistSearch(currentArtist, currentZip)
    deezerSearch(currentArtist)
    storeHistory();

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

// remove previous search results
// var removePrevious = function () {
//         theResultsBox.innerHTML = "";              

//     } 



searchButton.addEventListener("click", addArtist);
loadHistory();


// fetch(testWithZip)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//         console.log(data)
//             var i;
//             for (i = 0; i < 100; i++) { 
//                 console.log(data._embedded.events[i].name);
//                 console.log(data._embedded.events[i]._embedded.venues[0].address.line1);
//                 console.log(data._embedded.events[i]._embedded.venues[0].city.name);
//                 console.log(data._embedded.events[i]._embedded.venues[0].state.name);
//                 console.log(data._embedded.events[i]._embedded.venues[0].postalCode);
//             }
//         // // // Artist Info
//         //     // Aritst/event name
//         // // console.log(data._embedded.events[0].name);

//         // // link to ticket masters artist profile
//         // console.log(data._embedded.events[0]._embedded.attractions[0].url);

//         // // // venue info
//         // //     // Street Address
//         // console.log(data._embedded.events[0]._embedded.venues[0].address.line1);
//         // //     // City
//         // console.log(data._embedded.events[0]._embedded.venues[0].city.name);
//         // //     // State (abreviated - can replace 'stateCode' with 'name' to get the full name of the state.)
//         // console.log(data._embedded.events[0]._embedded.venues[0].state.stateCode);
//         // //     // Zip code
//         // console.log(data._embedded.events[0]._embedded.venues[0].postalCode);
//         // //     // Venue website
//         // console.log(data._embedded.events[0]._embedded.venues[0].url);

//         // Possible external links, - note not all artists/events have external links
//             // link to artists wikipedia
//         // console.log(data._embedded.events[0]._embedded.attractions[0].externalLinks.wiki[0].url);
//             // link to artists last.fm
//         // console.log(data._embedded.events[0]._embedded.attractions[0].externalLinks.lastfm[0].url);
// });

function deezerSearch(artist) {
    var deezerURL = "https://api.deezer.com/search/artist/?q=" + artist + "&index=0&limit=1&output=json";
    // console.log(artist);
    fetch(deezerURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var imagehead = document.createElement('img');
            imagehead.src = "";
            imagehead.src = data.data[0].picture;
            var aliciasHead = document.querySelector("#imagehead");
            aliciasHead.appendChild(imagehead)
            // var aliciaLink = document.querySelector("#venue");

            // aliciaLink.innerHTML = data.data[0].link;
            // data.data[0].link.href = URL;
            // document.getElementById("#link").href = URL;

            //     var deezer = document.querySelector("#musicLink")
            //     deezer.innerHTML = "Link to Music: " + data.
            // })
            // for (var i = 0; i < 2; i++) {
            //     console.log(data.data[0].picture);
            //     console.log(data.data[0].tracklist);
            // for (var i = 0; i <data.data[0].picture.length; i++) {


        })
}
//     //                 for (var i = 0; i <data.data[0].picture.length; i++) {
//     //                     var imagehead = document.getElementById("box").appendChild(document.createElement("img"));

//     //                     imagehead.className += "box is-active";
//     //                     imagehead.textContent = "<img src=" + value.picture + ">";
//     //                 }


//     //             }   
//     //         }
// }  
// var deezer = document.querySelector("#musicLink")
//                 // deezer.innerHTML = "Link to Music: " + data.