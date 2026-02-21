
function exportPDF(orientation = 'portrait', columnsToExport = ['area', 'todo', 'person', 'date', 'status']) {
    const table = document.getElementById('dataTable');

    // Mapping Spaltenname → Index
    const columnMap = { area: 0, todo: 1, person: 2, date: 3, status: 4, actions: 5 };

    // 1️⃣ Alle Spalten zunächst einblenden
    table.querySelectorAll('th, td').forEach(cell => cell.classList.remove('hide-pdf'));

    // 2️⃣ Spalten, die NICHT exportiert werden sollen, ausblenden
    Object.keys(columnMap).forEach(key => {
        if (!columnsToExport.includes(key)) {
            const index = columnMap[key];
            table.querySelectorAll('tr').forEach(tr => {
                const cell = tr.children[index];
                if (cell) cell.classList.add('hide-pdf');
            });
        }
    });

    // 3️⃣ PDF erzeugen
    const element = document.getElementById("tableContainer");
    html2pdf().set({
        margin: 10,
        filename: "todo_table.pdf",
        html2canvas: {
            scale: 2,
            scrollY: 0,
            useCORS: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: orientation
        }
    }).from(element).save().then(() => {
        // 4️⃣ Nach PDF wieder alles einblenden
        table.querySelectorAll('th, td').forEach(cell => cell.classList.remove('hide-pdf'));
    });
}


function exportWord(columnsToExport = ['area','todo','person','date','status']) {
    const table = document.getElementById('dataTable');

    // 1️⃣ Temporäre Tabelle für Word erstellen
    const tempTable = table.cloneNode(true);

    // 2️⃣ Spalten, die NICHT exportiert werden sollen, entfernen
    const columnMap = { area: 0, todo: 1, person: 2, date: 3, status: 4};
    Object.keys(columnMap).forEach(key => {
        if (!columnsToExport.includes(key)) {
            const index = columnMap[key];
            tempTable.querySelectorAll('tr').forEach(tr => {
                if(tr.children[index]) tr.children[index].remove();
            });
        }
    });

    // 3️⃣ HTML in Word konvertieren
    const htmlString = `<html><body>${tempTable.outerHTML}</body></html>`;
    const converted = htmlDocx.asBlob(htmlString);

    // 4️⃣ Datei speichern
    saveAs(converted, 'todo_table.docx');
}
