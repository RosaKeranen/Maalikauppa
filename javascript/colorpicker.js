/*Tämä on väritestausta*/
$(document).ready(function(){
    let selectedColor = '';

    // Kun värilaatikkoa klikataan, tallennetaan valittu väri
    $('.col[data-color]').click(function(){
        selectedColor = $(this).data('color');
        $('.col[data-color]').removeClass('selected');
        $(this).addClass('selected');
    });

    // Kun SVG:n seinää klikataan, vaihdetaan sen väri valittuun väriin
    $('polygon').click(function(){
        if(selectedColor) {
            $(this).css('fill', selectedColor);
        }
    });
});