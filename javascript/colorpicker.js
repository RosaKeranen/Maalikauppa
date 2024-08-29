/*Tämä on väritestausta*/
function selectWall(wall) {
    $(wall).toggleClass('selectedWall');
}

function setColor(colorClass) {
    $('.selectedWall').toggleClass(colorClass);
}