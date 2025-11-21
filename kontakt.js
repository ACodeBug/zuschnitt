// kontakt.js
const kontaktInfo = {
    oeffnungszeiten: [
        "Mo: ab 16:30",
        "Di: –",
        "Mi: –",
        "Do: –",
        "Fr: 08:00 - 16:00",
        "Sa: 11:30 - 19:30",
        "So: –"
    ],
    telefon: "+49 8171 219165",
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
        <p><strong>Zuschnitt Öffnungszeiten für 17.11 - 22.11 (KW 47):</strong></p>
        <p><strong>A. Didkovskyi – Einsatzplan</strong></p>
        Bei Fragen nutzen Sie bitte die unten angegebene E-Mail-Adresse<br>
        oder das Feld <strong>„Ich möchte…“</strong> für eine direkte Nachricht.
        </p>
        <ul>${oeffnungszeitenHtml}</ul>
        <p><strong>Telefon:</strong> <a href="tel:${kontaktInfo.telefon.replace(/\s+/g,'')}">${kontaktInfo.telefon}</a></p>
        <p><strong>E-Mail:</strong> <a href="mailto:${kontaktInfo.email}">${kontaktInfo.email}</a></p>
        <p><strong>Web:</strong> <a href="https://${kontaktInfo.web}" target="_blank">${kontaktInfo.web}</a></p>
    `;

    container.prepend(karte); // oben einfügen
}











