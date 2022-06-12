window.addEventListener('load', () => {
    var lista = $('.list_inside');
    lista.hide();

    var lista2 = $('.list_inside2');
    lista2.hide();

    var lista3 = $('.list_inside3');
    lista3.hide();

    var lista4 = $('.list_inside4');
    lista4.hide();

    var features_is_hide = true;
    var features2_is_hide = true;
    var company_is_hide = true;
    var company2_is_hide = true;
    var features = document.querySelector('#features');
    var features2 = document.querySelector('#features2');
    var company = document.querySelector('#company');
    var company2 = document.querySelector('#company2');

    features.addEventListener('click', () => {
        if (features_is_hide) {
            lista.show('fast');
            features_is_hide = false;
            $('#features_arrow').rotate(180);
            if (!company_is_hide) {
                lista2.hide('fast');
                company_is_hide = true;
                $('#company_arrow').rotate(360);
            }
        } else {
            lista.hide('fast');
            features_is_hide = true;
            $('#features_arrow').rotate(360);
        }
    });

    features2.addEventListener('click', () => {
        console.log('simon');
        if (features2_is_hide) {
            lista3.show('fast');
            features2_is_hide = false;
            $('#features2_arrow').rotate(180);
            if (!company2_is_hide) {
                lista4.hide('fast');
                company2_is_hide = true;
                $('#company2_arrow').rotate(360);
            }
        } else {
            lista3.hide('fast');
            features2_is_hide = true;
            $('#features2_arrow').rotate(360);
        }
    });


    company.addEventListener('click', () => {
        if (company_is_hide) {
            lista2.show('fast');
            company_is_hide = false;
            $('#company_arrow').rotate(180);
            if (!features_is_hide) {
                lista.hide('fast');
                features_is_hide = true;
                $('#features_arrow').rotate(360);
            }
        } else {
            lista2.hide('fast');
            company_is_hide = true;
            $('#company_arrow').rotate(360);
        }
    });

    company2.addEventListener('click', () => {
        if (company2_is_hide) {
            lista4.show('fast');
            company2_is_hide = false;
            $('#company2_arrow').rotate(180);
            if (!features2_is_hide) {
                lista3.hide('fast');
                features2_is_hide = true;
                $('#features2_arrow').rotate(360);
            }
        } else {
            lista4.hide('fast');
            company2_is_hide = true;
            $('#company2_arrow').rotate(360);
        }
    });

    var height = $(window).height();
    var bar = $('#bar');
    bar.height(height);

    var bar_oculta = true;

    var menu_mobile = $('#menu_mobile');
    var close_btn = $('#close_btn');

    menu_mobile.click(function () {
        if (bar_oculta) {
            bar.show('fast');
            bar_oculta = false;
        } else {
            bar_oculta.hide('fast');
            bar_oculta = true;
        }
    });

    close_btn.click(function () {
        bar.hide('fast');
        bar_oculta = true;
    })

    $(window).resize(function () {
        var ancho = $(window).width();
        if (ancho > 872) {
            bar.hide();
            bar_oculta = true;
        }

    });



});