let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const table = document.getElementById("studentTable");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;
    let year = document.getElementById("year").value;

    let genderElement = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }

    if (phone === "" || phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    if (course === "") {
        alert("Please select a course.");
        return;
    }

    if (year === "") {
        alert("Please select your year.");
        return;
    }

    if (genderElement === null) {
        alert("Please select your gender.");
        return;
    }

    let gender = genderElement.value;

    let student = {
        name: name,
        email: email,
        phone: phone,
        course: course,
        year: year,
        gender: gender
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    message.innerHTML =
        "Registration successful! Welcome, " + name + ".";

    form.reset();

    displayStudents();
});


function displayStudents() {

    table.innerHTML = "";

    students.forEach(function(student) {

        let row = document.createElement("tr");

        row.innerHTML =
            "<td>" + student.name + "</td>" +
            "<td>" + student.email + "</td>" +
            "<td>" + student.phone + "</td>" +
            "<td>" + student.course + "</td>" +
            "<td>" + student.year + "</td>" +
            "<td>" + student.gender + "</td>";

        table.appendChild(row);
    });
}


displayStudents();