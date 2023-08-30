document.addEventListener("DOMContentLoaded", function () {
    fetch("data2.json")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#usage-table tbody");
            data.forEach(item => {
                const row = document.createElement("tr");
                const dateCell = document.createElement("td");
                const usageTimeCell = document.createElement("td");

                dateCell.textContent = new Date(item.date).toLocaleDateString();
                usageTimeCell.textContent = item.usageTime.toFixed(2);

                row.appendChild(dateCell);
                row.appendChild(usageTimeCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading data:", error));
});
