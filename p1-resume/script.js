// =========================================
// DHRUMI TAILOR PORTFOLIO - JAVASCRIPT
// =========================================

// ---------- Dark / Light Mode ----------

const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {
    themeToggle.textContent =
        document.body.classList.contains("dark-mode")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
}

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton();

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode")
            ? "dark"
            : "light"
    );

    updateThemeButton();
});


// ---------- Smooth Scrolling ----------

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ---------- Contact Form Validation ----------

const form = document.getElementById("contactForm");

if (form) {
    const successMessage =
        document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            successMessage.classList.add("d-none");
            return;
        }

        form.classList.add("was-validated");
        successMessage.classList.remove("d-none");
    });

    form.addEventListener("reset", function () {
        form.classList.remove("was-validated");
        successMessage.classList.add("d-none");
    });
}
