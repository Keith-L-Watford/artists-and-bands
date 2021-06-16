
var userArtist = "";
var userZipCode = "";

var ticketMasterKey = "&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc";
var tickerMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + testKeyword + ticketMasterKey;

// + "&postalCode=" + testZipCode

var testKeyword = "jackson";
var testZipCode = 19107;
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
    });