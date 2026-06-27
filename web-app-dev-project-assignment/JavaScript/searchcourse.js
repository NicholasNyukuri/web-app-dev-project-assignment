document.getElementById("searchInput").addEventListener("keyup", function() {

    let value = this.value.toLowerCase();

    let courses = document.querySelectorAll(".card");

    courses.forEach(course => {
        let text = course.textContent.toLowerCase();

        if (text.includes(value)) {
            course.parentElement.style.display = "";
        } else {
            course.parentElement.style.display = "none";
        }
    });
});