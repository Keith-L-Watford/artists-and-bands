
var userArtist = "";
var userZipCode = "";

var ticketMasterKey = "&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc";
var tickerMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + testKeyword + ticketMasterKey;

// + "&postalCode=" + testZipCode
// var testZipCode = 19107;
var testKeyword = "jackson";

// test zipcode is Center City, Philadelphia
// temporailly defining the searched keyword until its connected to an input in HTML
var test = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"

console.log(test);




// fetch(tickerMasterURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//             console.log(data)
//         });



fetch(test)
.then(function (response) {
    return response.json();
})
.then(function (data) {
        console.log(data)
        console.log(data._embedded.events[0].url);

        // link to artists wikipedia
        console.log(data._embedded.attractions[0].externalLinks.wiki[0].url);

        // link to artists last.fm
        console.log(data._embedded.attractions[0].externalLinks.lastfm[0].url);

        // link to ticket masters artist profile
        console.log(data._embedded.attractions[0].url);

        // venue info
        console.log();
        console.log();
        console.log();
        console.log();
    });