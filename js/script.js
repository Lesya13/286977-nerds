var link = document.querySelector(".address-btn"),
    popup = document.querySelector(".feedback"),
    close = document.querySelector(".js-btn-close"),
    form = popup.querySelector("form"),
    lining = popup.querySelector(".lining"),
    login = popup.querySelector("[name=login]"),
    email = popup.querySelector("[name=email]"),
    text = popup.querySelector("[name=text]"),
    storageName = localStorage ? localStorage.getItem("login") : "",
    storageEmail = localStorage ? localStorage.getItem("email") : "";


// Функция сброса классов (для закрытия модального окна)
var exit = function (event) {
    event.preventDefault();
    popup.classList.remove("feedback-show");
    form.classList.remove("feedback-bounce");
    form.classList.remove("feedback-error");
};

// Открытие модального окна и действия в нём и с ним
link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("feedback-show");
    form.classList.add("feedback-bounce");

    if (storageName && storageEmail) {
        login.value = storageName;
        email.value = storageEmail;
        text.focus();
    } else {
        login.focus();
    };

    // Дрожание модального окна при попытке отправки незаполненной формы и запись значений в localStorage валидных имени и почты
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!login.value || !email.value || !text.value) {
            form.classList.remove("feedback-error");
            form.offsetWidth = form.offsetWidth;
            form.classList.add("feedback-error");
        } else if (localStorage) {
            localStorage.setItem("login", login.value);
            localStorage.setItem("email", email.value);
        }
    });

    // Закрытие модального окна по клику вне его и по крестику
    window.addEventListener("keydown", function (event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("feedback-show")) {
                exit(event);
            }
        }
    });
    
        close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("feedback-show");
        popup.classList.remove("lining");
        popup.classList.remove("feedback-error");
      });
    
    
    
    lining.addEventListener("click", exit, true);
    close.addEventListener("click", exit, true);
});
