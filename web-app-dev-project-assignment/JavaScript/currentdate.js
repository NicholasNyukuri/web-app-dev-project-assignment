function updateDateTime() {
    let now = new Date();

    document.getElementById("datetime").innerHTML =
        now.toLocaleDateString() + " " + now.toLocaleTimeString();
}

updateDateTime(); // Display immediately

setInterval(updateDateTime, 1000); // Update every second