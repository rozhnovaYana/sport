/*$(document).ready(function () {
    $('.slider__block').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/left.png"></img> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/right.png"></img></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true
            }
        }, ],

    });
});*/
const slide = document.querySelectorAll(".slider__img"),
    arrow = document.querySelectorAll(".slider__arrow"),
    dot = document.querySelectorAll(".slider__dot");
arrow[1].addEventListener("click", () => {
    nextSlide();

});
arrow[0].addEventListener("click", () => {
    prevSlide();

});
dot.forEach((item, i) => {
    item.addEventListener("click", () => {
        dot.forEach(item => {
            item.classList.remove("slider__dot_active");
        });
        item.classList.add("slider__dot_active");
        slide.forEach((item, i) => {
            if (item.classList.contains("slider__active")) {
                item.classList.remove("slider__active", "fade");
            }

        });
        slide[i].classList.add("slider__active", "fade");
    });
});

function prevSlide() {
    let num;
    slide.forEach((item, i) => {
        if (item.classList.contains("slider__active")) {
            item.classList.remove("slider__active", "fade");
            num = i;
        }

    });
    if (num == 0) {
        num = 3;
    }
    slide[num - 1].classList.add("slider__active", "fade");
}

function nextSlide() {
    let num;
    slide.forEach((item, i) => {
        if (item.classList.contains("slider__active")) {
            item.classList.remove("slider__active", "fade");
            num = i;
        }

    });
    if (num == 2) {
        num = -1;
    }
    slide[num + 1].classList.add("slider__active", "fade");
}
const catalogLinkDescr = document.querySelectorAll(".catalog-card__link"),
    catalogBack = document.querySelectorAll(".catalog-card__back"),
    catalogItem = document.querySelectorAll(".catalog-card__item"),
    catalogList = document.querySelectorAll(".catalog-card__list"),
    catalogTab = document.querySelectorAll(".catalog__item"),
    catalogCard = document.querySelectorAll(".catalog-cards"),
    catalogTabs = document.querySelector(".catalog__list");

function showTabMenu(i) {
    catalogTab[i].classList.add("catalog__item_active");
    catalogCard[i].classList.add("catalog-cards_active", "fade");
}

function hideTabMenu() {
    catalogTab.forEach((item) => {
        item.classList.remove("catalog__item_active");
    });
    catalogCard.forEach((item) => {
        item.classList.remove("catalog-cards_active", "fade");
    });
    catalogList.forEach(item => {
        item.classList.remove("catalog-card__list_active");
    });

    catalogItem.forEach(item => {
        item.classList.add("catalog-card__item_active");
    });

}

catalogTab.forEach((item, i) => {
    item.addEventListener("click", () => {
        hideTabMenu();
        showTabMenu(i);
    });

});
catalogLinkDescr.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        catalogItem[i].classList.remove("catalog-card__item_active");
        catalogList[i].classList.add("catalog-card__list_active");
    });
});
catalogBack.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        catalogList[i].classList.remove("catalog-card__list_active");
        catalogItem[i].classList.add("catalog-card__item_active");
    });
});
//modal//
const btnConsultation = document.querySelectorAll('[data-modal="consultation"]'),
    modal = document.querySelector(".modal"),
    modalCall = document.querySelector("#call"),
    modalThanks = document.querySelector("#thanks"),
    modalOrder = document.querySelector("#order"),
    modalCLose = document.querySelectorAll(".modal__close"),
    btnSubmit = document.querySelectorAll(".button_submit"),
    btnCatalog = document.querySelectorAll(".button_mini");
btnConsultation.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.add("show", "fade");
        modalCall.classList.add("show", "fade");
        document.body.style.overflow = "hidden";
    });
});
modalCLose.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.remove("show", "fade");
        modalCall.classList.remove("show", "fade");
        modalThanks.classList.remove("show", "fade");
        modalOrder.classList.remove("show", "fade");
        document.body.style.overflow = "";
    });
});

btnSubmit.forEach(item => {
    item.addEventListener("click", () => {
        modalThanks.classList.add("show", "fade");
        modalCall.classList.remove("show", "fade");
        modalOrder.classList.remove("show", "fade");

    });
});
btnCatalog.forEach(item => {
    item.addEventListener("click", () => {
        modal.classList.add("show", "fade");
        modalOrder.classList.add("show", "fade");
        document.body.style.overflow = "hidden";
    });
});