document.querySelector("button").addEventListener("click", function() {
    var text = document.querySelector("input").value;
    var table = document.querySelector("table tbody");
    var newRow = table.insertRow(table.rows.length);
    var newCell = newRow.insertCell(0);
    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCell.appendChild(newCheckbox);
    newCell = newRow.insertCell(1);
    newCell.innerHTML = text;
    document.querySelector("input").value = "";
})

document.addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT" && event.target.checked) {
        event.target.parentNode.parentNode.style.textDecoration = "line-through";
    } else if (event.target.tagName === "INPUT" && !event.target.checked) {
        event.target.parentNode.parentNode.style.textDecoration = "none";
    }
})

document.addEventListener("click", function(event) {
    if (event.target.tagName === "TD" && event.target.parentNode.cells[0].querySelector("input").checked) {
        event.target.parentNode.parentNode.remove();
    }
})

document.addEventListener("change", function(event) {
    if (event.target.tagName === "INPUT" && event.target.checked) {
        event.target.parentNode.parentNode.cells[2].innerHTML = "Complete";
    } else if (event.target.tagName === "INPUT" && !event.target.checked) {
        event.target.parentNode.parentNode.cells[2].innerHTML = "Pending";
    }
})


document.querySelector("table").addEventListener("keydown", function(event) {
    if (event.key === "Enter" && event.target.tagName === "INPUT") {
        var text = event.target.value;
        var table = document.querySelector("table tbody");
        var newRow = table.insertRow(table.rows.length);
        var newCell = newRow.insertCell(0);
        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCell.appendChild(newCheckbox);
        newCell = newRow.insertCell(1);
        newCell.innerHTML = text;
        event.target.value = "";
        event.preventDefault();
    }
})



document.querySelector("button").addEventListener("click", function() {
    document.querySelector("input").click();
})

