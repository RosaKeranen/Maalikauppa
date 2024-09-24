document.addEventListener("DOMContentLoaded", function () {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html">Kotkantien maalaus ja tapetointi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Kotisivu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="palvelut.html">Palvelut</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="varitestaus.html">Väritestaus</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="galleria.html">Galleria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="yhteystiedot.html">Yhteystiedot</a>
        </li>
      </ul>
    </div>
  </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});


function openImage(imageSrc) {
  window.open(imageSrc, "_blank", "width=800,height=600");
}

