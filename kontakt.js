// kontakt.js
const kontaktInfo = {
    oeffnungszeiten: [
        "Mo: 08:00–16:30",
        "Di: 08:00–16:30",
        "Mi: 08:00–16:30",
        "Do: 11:30–18:00",
        "Fr: 11:30–18:00",
        "Sa: 11:30–18:00",
        "So: geschlossen"
    ],
    telefon: "+49 8171 219174",
    email: "info@holz-zuschnitt.de",
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
        <p><strong>Zuschnitt Öffnungszeiten für 22.09 - 27.09 :</strong></p>
        <ul>${oeffnungszeitenHtml}</ul>
        <p><strong>Telefon:</strong> <a href="tel:${kontaktInfo.telefon.replace(/\s+/g,'')}">${kontaktInfo.telefon}</a></p>
        <p><strong>E-Mail:</strong> <a href="mailto:${kontaktInfo.email}">${kontaktInfo.email}</a></p>
        <p><strong>Web:</strong> <a href="https://${kontaktInfo.web}" target="_blank">${kontaktInfo.web}</a></p>
    `;

    container.prepend(karte); // oben einfügen
}
