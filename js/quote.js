window.addEventListener("load", getFact);

const quoteButton = document.querySelector(".new-quote");
quoteButton.addEventListener("click", getFact);

const endpoint = "https://meowfacts.herokuapp.com/";

async function getFact() {
    console.log("Test click works!");
    let text = await fetch(endpoint);
    let response = await text.text();

    console.log(response);
    let jsonResponse =JSON.parse(response);

    displayFact(jsonResponse.data)
}

function displayFact(text) {
    console.log("Displaying fact to screen");
    document.getElementById("js-quote-text").textContent = text;
    
}