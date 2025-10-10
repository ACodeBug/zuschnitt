// kontakt.js
const kontaktInfo = {
    oeffnungszeiten: [
        "Mo: –",
        "Di: –",
        "Mi: 11:30 – 19:00",
        "Do: 08:00 - 16:00",
        "Fr: 11:30 – 19:00",
        "Sa: 11:30 – 19:00",
        "So: geschlossen"
    ],
    telefon: "+49 8171 219174",
    email: "albert.inform.me@gmail.com",
    web: "www.baywa-baumarkt.de"
};

function erstelleKontaktKarte(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const karte = document.createElement('div');
    karte.classList.add('karte');

    // Öffnungszeiten als Liste
    const oeffnungszeitenHtml = kontaktInfo.oeffnungszeiten
        .map(tag => `<li>${tag}</li>`)
        .join("");

    karte.innerHTML = `
        <h2>Kontakt & Öffnungszeiten</h2>
        <p><strong>Zuschnitt Öffnungszeiten für 06.10 - 12.10 :</strong></p>
        <ul>${oeffnungszeitenHtml}</ul>
        <p><strong>Telefon:</strong> <a href="tel:${kontaktInfo.telefon.replace(/\s+/g,'')}">${kontaktInfo.telefon}</a></p>
        <p><strong>E-Mail:</strong> <a href="mailto:${kontaktInfo.email}">${kontaktInfo.email}</a></p>
        <p><strong>Web:</strong> <a href="https://${kontaktInfo.web}" target="_blank">${kontaktInfo.web}</a></p>
    `;

    container.prepend(karte); // oben einfügen
}





