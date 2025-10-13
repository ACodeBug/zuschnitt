// kontakt.js
const kontaktInfo = {
    oeffnungszeiten: [
        "Mo: –",
        "Di: –",
        "Mi: –",
        "Do: –",
        "Fr: –",
        "Sa: –",
        "So: –"
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
        <p><strong>Zuschnitt Öffnungszeiten für 13.10 - 02.11 :</strong></p>
        <p><strong>A. Didkovskyi – Urlaub</strong></p>
        <p class="text-muted" style="font-size: 0.95em;">
        Ich bin derzeit im Urlaub 🌴.<br>
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







