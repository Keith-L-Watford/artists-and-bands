var ticketMasterKey = "&apikey=uuD6hzdyqgKtPGThGyiUbWE3EVpVuaAc";
var tickerMasterURL = "http://app.ticketmaster.com/discovery/v1/events.json?keyword=" + searchedKeyword + ticketMasterKey;

// temporailly defining the searched keyword until its connected to an input in HTML
var searchedKeyword = "Fall out boy";

fetch(tickerMasterURL)
    .then((res) => res.json()
    .then((data) => {
        console.log(data);
    }))