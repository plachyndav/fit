"use strict";

(function() {
    var phone = document.querySelector(".js-phone");
    var phoneURls = [
        "https://www.dropbox.com/s/un8g080s3sunnzf/phone0.png?dl=1",
        "https://www.dropbox.com/s/ugsm5vcrj4hsbiy/phone1.png?dl=1",
        "https://www.dropbox.com/s/wc2n1bkhu6bkdgg/phone2.png?dl=1",
        "https://www.dropbox.com/s/17f3zf5x3hmp5qt/phone3.png?dl=1",
        "https://www.dropbox.com/s/6lq106c2iw95adh/phone4.png?dl=1"
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
