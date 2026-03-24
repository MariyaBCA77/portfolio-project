const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("https://portfolio-project-0brl.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => response.json())
    .then(data => {
        alert("✅ " + data.message);
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("❌ Something went wrong");
    });
});