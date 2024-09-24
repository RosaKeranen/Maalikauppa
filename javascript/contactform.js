function validateForm() {
    const nimi = document.getElementById('nimi').value.trim();
    const sahkoposti = document.getElementById('sahkoposti').value.trim();
    const viesti = document.getElementById('viesti').value.trim();

    // Sähköpostin muodon tarkistus
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sahkoposti)) {
        alert('Sähköpostiosoitteen muoto on viallinen, tarkista oikea muoto (esim. etunimi.sukunimi@yritys.fi)');
        return false;
    }

    // Nimen pituuden tarkistus
    if (nimi.length < 3) {
        alert('Nimen tulee olla vähintään 3 merkkiä pitkä.');
        return false;
    }

    // Viestien minimipituuden tarkistus
    if (viesti.length < 5) {
        alert('Viestisi on liian lyhyt. Kirjoita vähintään 5 merkkiä.');
        return false;
    }

    // Jos kaikki tarkistukset menevät läpi, palautetaan true
      // Jos validointi menee läpi:
    alert("Kiitos yhteydenotostasi, lomake on lähetetty!");
    return true;
}