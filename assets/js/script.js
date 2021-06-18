var searchButton = document.querySelector(".button");
var artistInput = document.querySelector("#artist-input");
var zipInput = document.querySelector("#location-input");



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

            for (var i = 0; i < 10; i++) {
                console.log(data._embedded.events[i].name);
                console.log(data._embedded.events[i]._embedded.venues[0].address.line1);
                console.log(data._embedded.events[i]._embedded.venues[0].city.name);
                console.log(data._embedded.events[i]._embedded.venues[0].country.name);
                console.log(data._embedded.events[i]._embedded.venues[0].postalCode);
                console.log(data._embedded.events[i].dates.start.localDate);


                var eventWho = data._embedded.events[i].name;
                var eventWhen = data._embedded.events[i].dates.start.localDate;

                var eventName = document.querySelector("#artist");
                eventName.innerHTML = "Artist: " + eventWho


                var eventDate = document.querySelector("#date");
                eventDate.innerHTML = "Date: " + eventWhen

                var theEvent = data._embedded.events[i].name;
                var theDate = data._embedded.events[i].dates.start.localDate;

                var venueName = data._embedded.events[i]._embedded.venues[0].name;
                var venueAddress = data._embedded.events[i]._embedded.venues[0].address.line1;
                var venueCity = data._embedded.events[i]._embedded.venues[0].city.name;
                var venueCountry = data._embedded.events[i]._embedded.venues[0].country.name;
                var theVenue = venueName + ", " + venueAddress + ", " + venueCity + ", " + venueCountry;
                var thePrice = data._embedded.events[i].priceRanges[0].min;


                console.log(theVenue);
                // var ticketPrice = ; 

                for (var i = 0; i < data._embedded.events.length; i++) {
                    // console.log(theEvent[i]);

                    var theResultsBox = document.getElementById('search-list');

                    var theMiniBox = document.createElement("div")
                    theResultsBox.append(theMiniBox)
                    theMiniBox.className += " box"

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


// the click calls a function
// the function gathers the info
function addArtist(event) {
    event.preventDefault()
    console.log("you clicked me");
    console.log(artistInput.value);
    console.log(zipInput.value);

    var currentArtist = artistInput.value
    var currentZip = zipInput.value

    artistSearch(currentArtist, currentZip)
}


searchButton.addEventListener("click", addArtist);


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