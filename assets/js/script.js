
var userArtist = "";
var userZipCode = "";

// var testZipCode = 19107;
var testKeyword = "jackson";
var ticketMasterKey = "&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc";
var tickerMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + testKeyword + ticketMasterKey;
// + "&postalCode=" + testZipCode

// test zipcode is Center City, Philadelphia
// temporailly defining the searched keyword until its connected to an input in HTML
var test = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"
// var testWithZip = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&postalCode=19107&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"


// console.log(tickerMasterURL);
// console.log(test);





fetch(tickerMasterURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
            console.log(data)
            console.log(data._embedded.events[0].url);

 // // link to artists wikipedia
        console.log(data._embedded.attractions.externalLinks.wiki.url);

        });



fetch(test)
.then(function (response) {
    return response.json();
})
.then(function (data) {
        console.log(data)
        console.log(data._embedded.events[0].url);

        // // link to artists wikipedia
        // console.log(data._embedded.attractions[0].externalLinks.wiki.url);

        // // link to artists last.fm
        // console.log(data._embedded.attractions[0].externalLinks.lastfm[0].url);

        // // link to ticket masters artist profile
        // console.log(data._embedded.attractions[0].url);

        // // venue info
        //     // Street Address
        // console.log(data._embedded.venues[0].address);
        //     // City
        // console.log(data._embedded.venues[0].city.name);
        //     // State (abreviated - can replace 'stateCode' with 'name' to get the full name of the state.)
        // console.log(data._embedded.venues[0].state.stateCode);
        //     // Zip code
        // console.log(data._embedded.venues[0].postalCode);
        //     // Venue website
        // console.log(data._embedded.venues[0].url);
    });