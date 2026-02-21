let rows = [];
let editingIndex = null;

// Zeile hinzufügen / bearbeiten
async function handleAddRow() {
    const area = document.getElementById("area").value;
    const person = document.getElementById("person").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    const imageFiles = document.getElementById("imageInput").files;
    let images = [];

    for (let i = 0; i < imageFiles.length; i++) {
        const resized = await resizeImage(imageFiles[i], 0.2);
        images.push(resized);
    }

    const row = { area, person, date, status, images };

    if (editingIndex !== null) {
        rows[editingIndex] = row;
        editingIndex = null;
    } else {
        rows.push(row);
    }

    renderTable();
    clearForm();
}

// Form zurücksetzen
function clearForm() {
    document.getElementById("area").value = "";
    document.getElementById("person").value = "";
    document.getElementById("date").value = "";
    document.getElementById("status").value = "";
    document.getElementById("imageInput").value = "";
}
// Beim Laden der Seite
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const formatted = today.toLocaleDateString('de-DE'); // TT.MM.JJJJ
    document.getElementById("inputDate").value = formatted;
});