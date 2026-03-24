// Get form
const form = document.getElementById("contactForm");

// Add submit event
form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Send data to backend
    fetch("http://localhost:5000/contact", {
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

        // Clear form after submit
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("❌ Something went wrong");
    });
});