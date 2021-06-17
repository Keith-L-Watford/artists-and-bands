
var userArtist = "";
var userZipCode = "";

var testRadius = 15;
var testZipCode = 10001;
var testKeyword = "alicia key";
var ticketMasterKey = "&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc";
var tickerMasterURL = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${testKeyword}${ticketMasterKey}`;

// "&postalCode= " + testZipCode + "&radius=" + testRadius +

// var testWithZip = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&postalCode=10901&radius=100&unit=&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"
// temporailly defining the searched keyword until its connected to an input in HTML
// var test = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"



fetch(tickerMasterURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
            console.log(data)
            // console.log(data._embedded.events[0].url);
        });



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