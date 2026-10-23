// Offer poster
var offer = document.getElementById("offer");
var offer_close = document.getElementById("offer_close");

if (offer && offer_close) {
    offer_close.addEventListener("click", function () {
        offer.style.display = "none";
    });
}


// Menu bar
var menubar = document.getElementById("menubar");
var menucontant = document.getElementById("menucontant");
var menu_close = document.getElementById("menu_close");

if (menubar && menucontant) {
    menubar.addEventListener("click", function () {
        menucontant.style.left = "0";
    });
}

if (menu_close && menucontant) {
    menu_close.addEventListener("click", function () {
        menucontant.style.left = "-100%";
    });
}

if (menucontant) {
    var nav_links = menucontant.querySelectorAll("a");

    nav_links.forEach(function (link) {
        link.addEventListener("click", function () {
            menucontant.style.left = "-100%";
        });
    });
}


// Hero Slider
var slidesContainer = document.querySelector(".hero-slides");
var heroSlides = document.querySelectorAll(".hero-slide");

var currentSlide = 0;
var totalSlides = heroSlides.length;

function showSlide() {
    if (slidesContainer && totalSlides > 0) {
        slidesContainer.style.transform =
            "translateX(-" + (currentSlide * 100) + "%)";
    }
}

function nextSlide() {
    if (totalSlides > 0) {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide();
    }
}

function prevSlide() {
    if (totalSlides > 0) {
        currentSlide =
            (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide();
    }
}

var nextButton = document.querySelector(".arrow.right");
var prevButton = document.querySelector(".arrow.left");

if (nextButton) {
    nextButton.addEventListener("click", nextSlide);
}

if (prevButton) {
    prevButton.addEventListener("click", prevSlide);
}
// Most Wanted - Like button
var likes = document.querySelectorAll(".like");

likes.forEach(function (like) {
    like.addEventListener("click", function () {
        if (like.src.includes("black-heart.png")) {
            like.src = "./images/like-image/red-heart.png";
        } else {
            like.src = "./images/like-image/black-heart.png";
        }
    });
});


// Collections page - Search and Filters
var products = document.getElementById("products");
var search = document.getElementById("search");

if (products && search) {

    var productlist = products.querySelectorAll("[data-category]");
    var filters = document.querySelectorAll(".filter");

    function filterProducts() {

        var searchText = search.value.toLowerCase().trim();

        var checkedCategories = [];
        var checkedTypes = [];
        var checkedCollections = [];

        filters.forEach(function (filter) {
            if (filter.checked) {

                if (
                    ["tops", "dress", "kurti", "jeans",
                     "skirt", "leggings"].includes(filter.value)
                ) {
                    checkedCategories.push(filter.value);
                }

                else if (
                    ["top-wear", "bottom-wear"].includes(filter.value)
                ) {
                    checkedTypes.push(filter.value);
                }

                else if (
                    ["new", "old"].includes(filter.value)
                ) {
                    checkedCollections.push(filter.value);
                }
            }
        });

        productlist.forEach(function (product) {

            var name = product.querySelector("h4").textContent.toLowerCase();

            var category = product.dataset.category;
            var type = product.dataset.type;
            var collection = product.dataset.collection;

            var matchesSearch = name.includes(searchText);

            var matchesCategory =
                checkedCategories.length === 0 ||
                checkedCategories.includes(category);

            var matchesType =
                checkedTypes.length === 0 ||
                checkedTypes.includes(type);

            var matchesCollection =
                checkedCollections.length === 0 ||
                checkedCollections.includes(collection);

            if (
                matchesSearch &&
                matchesCategory &&
                matchesType &&
                matchesCollection
            ) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Search while typing
    search.addEventListener("input", filterProducts);

    // Filter when checkboxes change
    filters.forEach(function (filter) {
        filter.addEventListener("change", filterProducts);
    });
}