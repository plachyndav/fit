"use strict";

(function() {
    var phone = document.querySelector(".js-phone");
    var phoneURls = [
        "http://localhost:8080/img/phone0.png",
        "http://localhost:8080/img/phone1.png",
        "http://localhost:8080/img/phone2.png",
        "http://localhost:8080/img/phone3.png",
        "http://localhost:8080/img/phone4.png"
    ];
    var togglesList = document.querySelector(".js-toggles-list");
    var toggles = togglesList.querySelectorAll(".js-toggle");

    function clearToggles(toggles) {
        toggles.forEach(function(item) {
            item.classList.remove("toggles__button--active");
        });
    }

    togglesList.addEventListener("click", function(e) {
        if (e.target.classList.contains("js-toggle")) {
            clearToggles(toggles);
            e.target.classList.add("toggles__button--active");
            var b = Array.prototype.indexOf.call(toggles, e.target);
            phone.src = phoneURls[b];
        }
    });
})();
