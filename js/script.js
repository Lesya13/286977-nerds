//обратная связь
var link = document.querySelector(".address-btn");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".js-btn-close");
var overlay = document.querySelector(".feedback-overlay");
var submit = popup.querySelector(".feedback-btn");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var storage_user = localStorage.getItem("login");
var storage_email = localStorage.getItem("email");

link.addEventListener("click", function (a) {
a.preventDefault();
popup.classList.add("feedback-show");
overlay.classList.add("feedback-overlay-show");
storage_user && storage_email ? (login.value = storage_user, email.value = storage_email, text.focus()) : login.focus();
});

close.addEventListener("click", function (a) {
a.preventDefault();
popup.classList.remove("feedback-show");
popup.classList.remove("feedback-error");
overlay.classList.remove("feedback-overlay-show");
});

submit .addEventListener("click", function (a) {
login.value && email.value && text.value ? (localStorage.setItem("login", login.value), localStorage.setItem("email", email.value)) : (a.preventDefault(), popup.classList.remove("feedback-error"),popup.offsetWidth = popup.offsetWidth, popup.classList.add("feedback-error"));
});

window.addEventListener("keydown", function (a) {
27 === a.keyCode && popup.classList.contains("feedback-show") && (popup.classList.remove("feedback-show"), popup.classList.remove("feedback-error"), overlay.classList.remove("feedback-overlay-show"));
});

overlay.addEventListener("click", function (a) {
popup.classList.contains("feedback-show") && (popup.classList.remove("feedback-show"), popup.classList.remove("feedback-error"), overlay.classList.remove("feedback-overlay-show"));
});

//Переменные окна "добавлено в корзину"
var basket = document.querySelector(".modal-cart");
var linksBuy = document.querySelectorAll(".product-popular__btn-buy");
var basketClose = basket.querySelector(".js-close-cart");
var continueShop = basket.querySelector(".modal-cart__btn--js");

// Настройка карты
function initMap() {
    var mapDiv = document.querySelector('.google-maps');
    var myLatLng = {
        lat: 59.938810,
        lng: 30.323400
    };
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 15
    });
    var image = "img/map-marker.png";
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}