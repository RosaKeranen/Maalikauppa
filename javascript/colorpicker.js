/*Tämä on väritestausta*/
function selectWall(wall) {
    $(wall).toggleClass('selectedWall');
}

function setColor(colorClass) {
    $('.selectedWall').attr('class', colorClass);
}

function resetColor() {
    $('#wall1').attr('class', 'cls-2');
    $('#wall2').attr('class', 'cls-3');
    $('#wall3').attr('class', 'cls-1');
}