var ticketMasterKey = "&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc";
var tickerMasterURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + searchedKeyword + ticketMasterKey;

var test = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=jackson&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc"
// temporailly defining the searched keyword until its connected to an input in HTML
var searchedKeyword = "jackson";

console.log(tickerMasterURL);

// fetch(tickerMasterURL)
//     .then((res) => res.json()
//     .then((data) => {
//         console.log(data);
//     }))


fetch(tickerMasterURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
            console.log(data)
        });