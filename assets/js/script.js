/*Скролл к пунктам меню*/
/*! function($) {
    $(document).on('click', 'a[href^=#]', function() {
        $('html, body').animate({ scrollTop: $('a[name="' + this.hash.slice(1) + '"]').offset().top}, 1000);
        return false;
    });
}(jQuery);*/

/*Кнопка для скролла "Наверх"*/
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        }
        else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 400);
    });
});


/*testing for touch-screen*/
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if (isMobile.any()) {
    $('.container__product_hover').removeClass('container__product_hover').addClass('container__product_hover_touch');
}

/*Автоматическое заполнение некоторых атрибутов*/
var stripCaption = document.querySelectorAll('.strip');
var product_id = document.querySelectorAll('.product_id');
var attrib = [];

for (var i = 0; i < stripCaption.length; i++) {
    attrib[i] = product_id[i].innerHTML;
    stripCaption[i].setAttribute('data-strip-caption', attrib[i]);
    product_id[i].setAttribute('data-name', attrib[i]);
}

/*Определения контейнера для mixitup*/
var mixer = mixitup(".container");
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});
var containerEl = document.querySelector('.container');

var mixer = mixitup(containerEl);


/**/
// In this example, we must bind a 'change' event handler to
// our checkboxes, then interact with the mixer via
// its .filter() API methods.

var containerEl = document.querySelector('.container');
var checkboxGroup = document.querySelector('.checkbox-group');
var checkboxes = checkboxGroup.querySelectorAll('input[type="checkbox"]');

var mixer = mixitup(containerEl);

checkboxGroup.addEventListener('change', function() {
    var selectors = [];

    // Iterate through all checkboxes, pushing the
    // values of those that are checked into an array

    for (var i = 0; i < checkboxes.length; i++) {
        var checkbox = checkboxes[i];

        if (checkbox.checked) selectors.push(checkbox.value);
    }

    // If there are values in the array, join it into a string
    // using your desired logic, and send to the mixer's .filter()
    // method, otherwise filter by 'all'

    var selectorString = selectors.length > 0 ?
        selectors.join(',') : // or '.' for AND logic
        'all';

    mixer.filter(selectorString);
});


/*Поиск*/
