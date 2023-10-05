document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const studentsList = document.getElementById("students-list");
    const rangeInput = document.getElementById("range");
    const rangeValue = document.getElementById("range-value");
    const alertMessage = document.getElementById("alert-message");

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

        // Create a button for showing/hiding personal data
        const showPersonalDataButton = document.createElement("button");
        showPersonalDataButton.textContent = "Show personal data";

        // Function to handle show/hide personal data button click
        showPersonalDataButton.addEventListener("click", function () {
            const personalData = studentItem.querySelector(".personal-data");

            if (personalData.style.display === "none" || !personalData.style.display) {
                // Show personal data
                personalData.style.display = "block";
                showPersonalDataButton.textContent = "Hide personal data";
            } else {
                // Hide personal data
                personalData.style.display = "none";
                showPersonalDataButton.textContent = "Show personal data";
            }
        });

        // Create a button for deleting the student
        const deleteStudentButton = document.createElement("button");
        deleteStudentButton.textContent = "Delete student";

        // Function to handle delete student button click
        deleteStudentButton.addEventListener("click", function () {
            // Remove the student item from the list
            studentsList.removeChild(studentItem);

            // Show a confirmation message
            const deleteMessage = document.createElement("span");
            deleteMessage.textContent = `Student (${name} ${surname}) has been successfully deleted.`;
            alertMessage.appendChild(deleteMessage);
            alertMessage.style.display = "block";

            // Hide the message after 5 seconds
            setTimeout(function () {
                alertMessage.removeChild(deleteMessage);
                alertMessage.style.display = "none";
            }, 5000);
        });

        // Create a div for personal data
        const personalData = document.createElement("div");
        personalData.classList.add("personal-data");
        personalData.style.display = "none";
        personalData.innerHTML = `
            <strong>Email:</strong> ****<br>
            <strong>Telephone Number:</strong> ****<br>
        `;

        // Display student data
        studentItem.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Surname:</strong> ${surname}<br>
            <strong>Age:</strong> ${age}<br>
            <strong>Range:</strong> ${range}<br>
            <strong>Group:</strong> ${group}<br>
            <strong>Languages:</strong> ${languages}
        `;

        // Append show personal data, delete student button, and personal data div
        studentItem.appendChild(showPersonalDataButton);
        studentItem.appendChild(deleteStudentButton);
        studentItem.appendChild(personalData);

        // Show the alert message
        alertMessage.textContent = `Student (${name} ${surname}) Created`;
        alertMessage.style.display = "block";

        // Hide the alert message after 5 seconds
        setTimeout(function () {
            alertMessage.style.display = "none";
        }, 5000);

        // Add the student item to the top of the list
        studentsList.insertBefore(studentItem, studentsList.firstChild);

        // Reset the form
        form.reset();
    });
});
