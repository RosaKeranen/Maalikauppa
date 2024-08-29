/*Tämä on väritestausta*/
// Hae kaikki värilaatikot ja seinät
const colorBoxes = document.querySelectorAll('.col-sm-4 .col');
const walls = document.querySelectorAll('polygon');

// Lisää tapahtumankäsittelijä jokaiseen värilaatikkoon
colorBoxes.forEach(box => {
  box.addEventListener('click', () => {
    // Hae värilaatikon data-color-attribuutin arvo (jos se on olemassa)
    const color = box.dataset.color || getComputedStyle(box).backgroundColor;

    // Aseta valittu väri kaikille seinille (tämän voit muokata valitsemaan tietyn seinän)
    walls.forEach(wall => {
      wall.style.fill = color;
    });
  });
});