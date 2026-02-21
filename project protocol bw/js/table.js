// Tabelle rendern
function renderTable() {
    const tbody = document.querySelector("#dataTable tbody");
    tbody.innerHTML = "";

    rows.forEach((row, index) => {
        const imagesHTML = row.images.map((img, i) => `
            <div style="position:relative; display:inline-block;">
                <img src="${img}" />
                <button onclick="removeImage(${index}, ${i})" style="position:absolute; top:0; right:0;">❌</button>
            </div>
        `).join("");

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.area}</td>
            <td>${imagesHTML}</td>
            <td>${row.person}</td>
            <td>${row.date}</td>
            <td>${row.status}</td>
            <td class="no-pdf">
                <button onclick="editRow(${index})">✏️</button>
                <button onclick="deleteRow(${index})">❌</button>
            </td>
            
        `;
        tbody.appendChild(tr);
    });
}

// Zeile löschen
function deleteRow(index) {
    rows.splice(index, 1);
    renderTable();
}

// Zeile bearbeiten
function editRow(index) {
    const row = rows[index];
    document.getElementById("area").value = row.area;
    document.getElementById("person").value = row.person;
    document.getElementById("date").value = row.date;
    document.getElementById("status").value = row.status;

    editingIndex = index;
}

// Einzelnes Bild löschen
function removeImage(rowIndex, imageIndex) {
    rows[rowIndex].images.splice(imageIndex, 1);
    renderTable();
}
