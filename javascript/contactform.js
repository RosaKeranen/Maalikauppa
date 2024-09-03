document.getElementById("yhteydenottolomake").addEventListener("submit", function(event) {
    event.preventDefault();

    let nimi = document.getElementById("nimi").value.trim();
    let sahkoposti = document.getElementById("sahkoposti").value.trim();
    let viesti = document.getElementById("viesti").value.trim();

    if (nimi.length < 3 || /\s/.test(nimi)) {
        alert("Nimi-kentässä on oltava vähintään 3 merkkiä, eikä se saa sisältää välilyöntejä.");
        return;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sahkoposti)) {
        alert("Sähköposti on virheellinen.");
        return;
    }

    if (viesti.length === 0) {
        alert("Viesti-kenttä ei saa olla tyhjä.");
        return;
    }

    alert("Lomake lähetetty onnistuneesti!");
    this.submit(); // Lomake lähetetään action_page.php:lle
});