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

"use strict";
document.addEventListener("DOMContentLoaded", () => {
    //slider
    const sliderWindow = document.querySelector(".slider__block"),
        sliderWrapper = document.querySelector(".slider__wrapper"),
        slide = document.querySelectorAll(".slider__item"),
        next = document.querySelector(".slider__arrow_right"),
        prev = document.querySelector(".slider__arrow_left"),
        slider = document.querySelector(".slider"),
        dotsWrapper = document.createElement("div");
    let width = window.getComputedStyle(sliderWindow).width,
        scrolling = 0,
        dots = [],
        slides = 0;

    function deleteText(value) {
        return value.replace(/\D/g, "");
    }
    deleteText(width);
    sliderWrapper.style.width = deleteText(width) * slide.length + "px";
    sliderWrapper.style.transition = '0.5s all';
    slide.forEach(slide => {
        slide.style.width = deleteText(width) + 'px';
    });
    dotsWrapper.classList.add("slider__dots");
    slider.append(dotsWrapper);
    for (let i = 0; i < slide.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add("slider__dot");
        dots.push(dot);
        dotsWrapper.append(dot);
        if (i == 0) {
            dot.style.opacity = '1';
        }
        dot.setAttribute('data-slide', i);
    }
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const slide = e.target.getAttribute('data-slide');
            opacityOfDotsReset();
            dot.style.opacity = '1';
            scrolling = deleteText(width) * slide;
            sliderWrapper.style.transform = `translateX(${-scrolling}px)`;
        });
    });

    function opacityOfDotsReset() {
        dots.forEach(dot => {
            dot.style.opacity = '0.5';
        });
    }
    next.addEventListener("click", () => {

        if (scrolling == deleteText(width) * (slide.length - 1)) {
            scrolling = 0;
            slides = 0;
        } else {
            scrolling += +deleteText(width);
            slides += 1;
        }
        sliderWrapper.style.transform = `translateX(${-scrolling}px)`;
        opacityOfDotsReset();
        dots[slides].style.opacity = '1';

    });
    prev.addEventListener("click", () => {
        if (scrolling == 0) {
            scrolling = deleteText(width) * (slide.length - 1);
            slides = slide.length - 1;
        } else {
            scrolling += -deleteText(width);
            slides -= 1;
        }
        sliderWrapper.style.transform = `translateX(${-scrolling}px)`;
        opacityOfDotsReset();
        dots[slides].style.opacity = '1';
    });





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

    /*
    $('[data-modal=consultation]').on('click', function () {
        $('.modal, #call').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.modal, #call, #thanks, #order').fadeOut('slow');
    });
    
    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__subtitle').text($('.catalog-card__title').eq(i).text());
            $('.modal, #order').fadeIn('slow');
        });
    });
    /*
    function validetaForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста введите своё имя"
                },
                email: {
                    required: "Пожалуйста введите свою почту",
                    email: "Неправильно введён адрес почты"
                },
                phone: {
                    required: "Пожалуйста введите свой номер"
                }
            }
        });
    }
    validetaForm("#call form");
    validetaForm("#order form");
    validetaForm("#consultation-form");
    
    $("input[name=phone]").mask("(999) 999-9999");
    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#call, #order').fadeOut();
            $('.modal, #thanks').fadeIn('slow');
    
            $('form').trigger('reset');
        });
        return false;
    });*/
    //modal//

    const btnConsultation = document.querySelectorAll('[data-modal="consultation"]'),
        modal = document.querySelector(".modal"),
        modalCall = document.querySelector("#call"),
        modalOrder = document.querySelector("#order"),
        modalCLose = document.querySelectorAll(".modal__close"),
        btnSubmit = document.querySelectorAll(".button_submit"),
        btnCatalog = document.querySelectorAll(".button_mini"),
        cardTitle = document.querySelectorAll(".catalog-card__title"),
        modalSubtitle = document.querySelectorAll(".modal__subtitle");

    function openModal() {
        modal.classList.add("show", "fade");
        modalCall.classList.add("show", "fade");
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.remove("show", "fade");
        modalCall.classList.remove("show", "fade");
        modalOrder.classList.remove("show", "fade");
        document.body.style.overflow = "";
    }
    btnConsultation.forEach(item => {
        item.addEventListener("click", () => {
            openModal();
        });
    });
    modal.addEventListener("click", (e) => {
        if (e.target == modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });
    modalCLose.forEach(item => {
        item.addEventListener("click", () => {
            closeModal();
        });
    });

    btnCatalog.forEach((item, i) => {
        item.addEventListener("click", () => {
            modal.classList.add("show", "fade");
            modalOrder.classList.add("show", "fade");
            document.body.style.overflow = "hidden";
            modalSubtitle[1].textContent = cardTitle[i].textContent;
        });
    });
    const forms = document.querySelectorAll(".postForm");
    const msg = {
        load: "img/spinner/spinner.svg",
        succes: "Cпасибо! Наш менеджер свяжется с вами в ближайшее время!",
        fail: "Произошла ошибка",
        order: "Спасибо за Ваш заказ"
    };
    forms.forEach((item, i) => {
        formRequest(item, i);
    });

    function formRequest(forms, i) {
        forms.addEventListener("submit", (e) => {
            e.preventDefault();
            const statusMsg = document.createElement("img");
            statusMsg.src = msg.load;
            forms.appendChild(statusMsg);
            statusMsg.classList.add("center");
            const formData = new FormData(forms);
            fetch("php/form.php", {
                    body: formData,
                    method: "POST",
                }).then(data => data.text())
                .then((data) => {
                    if (i == 2) {
                        console.log(data);
                        openModalThanks(msg.order);
                        forms.reset();

                    } else {
                        console.log(data);
                        openModalThanks(msg.succes);
                        forms.reset();

                    }
                }).catch(() => {
                    console.log("fail");
                    openModalThanks(msg.fail);
                }).finally(() => {
                    statusMsg.remove();
                });
        });
    }
    //modalThanks
    function openModalThanks(massage) {
        const modalForm = document.querySelectorAll(".modal__form");
        modalForm.forEach(item => {
            item.classList.remove("show");
        });
        modal.classList.add("show");
        const modalThanks = document.createElement("div");
        modalThanks.classList.add("modal__form_mini", "show", "modal__form");
        modalThanks.innerHTML = `
    <div id="thanks">
      <div class="modal__close" data-close>&#10006;</div>
      <div class="modal__title">
        ${massage}
      </div>
    </div>`;
        document.querySelector(".modal").append(modalThanks);
        setTimeout(() => {
            modalThanks.classList.remove("show");
            closeModal();
        }, 3000);


    }
});