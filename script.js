document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const studentsList = document.getElementById("students-list");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const age = document.getElementById("age").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const email = document.getElementById("email").value;
        const itKnowledge = document.getElementById("itKnowledge").value;
        const group = document.querySelector('input[name="group"]:checked').value;
        const languages = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(function (checkbox) {
            languages.push(checkbox.value);
        });

        // Create a student item
        const studentItem = document.createElement("div");
        studentItem.classList.add("student-item");
        studentItem.innerHTML = `
            <p>Name: ${firstName} ${lastName}</p>
            <p>Age: ${age}</p>
            <p>Phone Number: <span class="phone-data">${phoneNumber}</span></p>
            <p>Email: <span class="email-data">${email}</span></p>
            <p>IT Knowledge: ${itKnowledge}</p>
            <p>Group: ${group}</p>
            <p>Languages of Interest: ${languages.join(", ")}</p>
            <button class="showData">Show Personal Data</button>
            <button class="hideData" style="display: none;">Hide Personal Data</button>
            <button class="deleteStudent">Delete Student</button>
        `;

        studentsList.prepend(studentItem);

        // Display a popup message
        const alertMessage = document.createElement("span");
        alertMessage.innerText = `Student (${firstName} ${lastName}) Created`;
        studentsList.insertBefore(alertMessage, studentItem);
        setTimeout(function () {
            alertMessage.style.display = "none";
        }, 5000);

        // Reset form
        contactForm.reset();
    });

    studentsList.addEventListener("click", function (e) {
        const studentItem = e.target.parentElement;

        if (e.target.classList.contains("showData")) {
            const dataButton = e.target;
            const emailData = studentItem.querySelector('.email-data');
            const phoneData = studentItem.querySelector('.phone-data');

            if (dataButton.textContent === "Show Personal Data") {
                emailData.style.display = "block";
                phoneData.style.display = "block";
                dataButton.textContent = "Hide Personal Data";
                studentItem.querySelector('.hideData').style.display = "inline-block";
            } else {
                emailData.style.display = "none";
                phoneData.style.display = "none";
                dataButton.textContent = "Show Personal Data";
                studentItem.querySelector('.hideData').style.display = "none";
            }
        } else if (e.target.classList.contains("hideData")) {
            const emailData = studentItem.querySelector('.email-data');
            const phoneData = studentItem.querySelector('.phone-data');

            emailData.textContent = "****";
            phoneData.textContent = "****";
            studentItem.querySelector('.showData').textContent = "Show Personal Data";
            studentItem.querySelector('.hideData').style.display = "none";
        } else if (e.target.classList.contains("deleteStudent")) {
            studentsList.removeChild(studentItem);
        }
    });

    const itKnowledgeRange = document.getElementById("itKnowledge");
    const knowledgeValue = document.getElementById("knowledgeValue");

    itKnowledgeRange.addEventListener("input", function () {
        knowledgeValue.textContent = itKnowledgeRange.value;
    });
});
