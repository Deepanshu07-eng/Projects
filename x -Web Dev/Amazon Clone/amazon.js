let cartCount = 0;

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.querySelector(".search-input");
const searchSelect = document.querySelector(".search-select");
const cartBtn = document.getElementById("cartBtn");
const cartCountText = document.getElementById("cartCount");
const seeMoreLinks = document.querySelectorAll(".see-more");
const boxes = document.querySelectorAll(".box");

function runSearch() {
    const searchValue = searchInput.value.trim();
    const category = searchSelect.value;

    if (searchValue === "") {
        alert("Please enter something to search.");
    } else {
        alert(`You searched for "${searchValue}" in ${category}.`);
    }
}

searchBtn.addEventListener("click", runSearch);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        runSearch();
    }
});

cartBtn.addEventListener("click", function () {
    alert(`Your cart has ${cartCount} item(s).`);
});

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        const title = box.querySelector("h2").innerText;
        cartCount++;
        cartCountText.innerText = cartCount;
        alert(`${title} added to cart.`);
    });
});

seeMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const title = link.closest(".box-content").querySelector("h2").innerText;
        alert(`Showing more products for: ${title}`);
    });
});

console.log("amazon.js connected successfully");