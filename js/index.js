const userInput = document.getElementById("user-input");
const searchButton = document.getElementById("search-button");
const luckyButton = document.getElementById("lucky-button");

const searchOnGoogle = (textInput) => {
    if (!textInput.length) return;
    const url = `https://www.google.com/search?q=${textInput.replaceAll(" ", "+")}`;
    window.open(url, "_parent");
}

userInput.addEventListener("keydown", (e) => {
    if (e.key != "Enter") return;
    searchOnGoogle(userInput.value); 
});

searchButton.addEventListener("click", () => {
    searchOnGoogle(userInput.value);
});

luckyButton.addEventListener("click", () => {
    searchOnGoogle(userInput.value);
});