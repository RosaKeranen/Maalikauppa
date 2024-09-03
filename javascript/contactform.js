const form = document.getElementById('contactForm');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Estä lomakkeen lähettäminen oletusarvoisesti

    const nimi = document.getElementById('nimi').value;
    const sahkoposti = document.getElementById('sahkoposti').value;
    const viesti = document.getElementById('viesti').value;

    const nimiError = document.getElementById('nimiError');
    const sahkopostiError = document.getElementById('sahkopostiError');
    const viestiError = document.getElementById('viestiError');

    // Nimen validointi
    if (nimi.trim() === '' || nimi.length < 3) {
        nimiError.textContent = 'Nimen tulee olla vähintään 3 merkkiä pitkä.';
        return;
    } else {
        nimiError.textContent = '';
    }

    // Sähköpostin validointi
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sahkoposti)) {
        sahkopostiError.textContent = 'Virheellinen sähköpostiosoite.';
        return;
    } else {
        sahkopostiError.textContent = '';
    }

    // Viestin validointi
    if (viesti.trim() === '') {
        viestiError.textContent = 'Viesti ei saa olla tyhjä.';
        return;
    } else {
        viestiError.textContent = '';
    }

    // Jos kaikki validoinnit menevät läpi, voit lähettää lomakkeen esimerkiksi AJAX-pyynnöllä
    // ...
    console.log('Lomake lähetetään:', nimi, sahkoposti, viesti);
});