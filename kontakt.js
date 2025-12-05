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
    telefon: "+49 8171 219165",
    email: "albert.inform.me@gmail.com",
    web: "www.baywa-baumarkt.de"
};
function getCurrentWeekRange() {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sonntag, 1 = Montag ...

    // Montag dieser Woche berechnen
    const monday = new Date(today);
    const diffToMonday = (currentDay === 0 ? -6 : 1 - currentDay);
    monday.setDate(today.getDate() + diffToMonday);

    // Samstag der gleichen Woche berechnen
    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);

    // Korrektur: KW anhand des Montags berechnen
    const kw = calcKW(monday);

    // Format: TT.MM
    const fmt = d => d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });

    return {
        kw,
        von: fmt(monday),
        bis: fmt(saturday)
    };
}

// ISO-Kalenderwoche berechnen
function calcKW(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = (d.getUTCDay() + 6) % 7;
    d.setUTCDate(d.getUTCDate() - dayNum + 3);
    const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
    const diff = (d - firstThursday) / 86400000;
    return 1 + Math.floor(diff / 7);
}

const week = getCurrentWeekRange();
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
    <p><strong>Zuschnitt Öffnungszeiten für ${week.von} - ${week.bis} (KW ${week.kw}):</strong></p>
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


















