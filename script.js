document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const studentsList = document.getElementById("students-list");
    const rangeInput = document.getElementById("range");
    const rangeValue = document.getElementById("range-value");

    // Update the range value on slider change
    rangeInput.addEventListener("input", function () {
        rangeValue.textContent = rangeInput.value;
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const surname = document.getElementById("surname").value;
        const age = document.getElementById("age").value;
        const telephone = document.getElementById("telephone").value;
        const email = document.getElementById("email").value;
        const range = rangeInput.value;
        const group = document.querySelector('input[name="group"]:checked').value;
        const languages = [...document.querySelectorAll('input[name="languages"]:checked')].map(input => input.value).join(", ");

        // Create a new student item
        const studentItem = document.createElement("div");
        studentItem.classList.add("student-item");

        // Populate student data
        studentItem.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Surname:</strong> ${surname}<br>
            <strong>Age:</strong> ${age}<br>
            <strong>Telephone Number:</strong> ${telephone}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Range:</strong> ${range}<br>
            <strong>Group:</strong> ${group}<br>
            <strong>Languages:</strong> ${languages}
        `;

        // Add the student item to the top of the list
        studentsList.insertBefore(studentItem, studentsList.firstChild);

        // Display the data in the console
        console.log("Name:", name);
        console.log("Surname:", surname);
        console.log("Age:", age);
        console.log("Telephone Number:", telephone);
        console.log("Email:", email);
        console.log("Range:", range);
        console.log("Group:", group);
        console.log("Languages:", languages);

        // Reset the form
        form.reset();
    });
});
