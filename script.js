document.getElementById("alertButton").addEventListener("click", function () {
    alert("Hello, user!");
    // Hardcoded alert message without considering localization
});

// Inline styles applied dynamically (bad practice for maintainability)
document.getElementById("content").style.color = "blue";
document.getElementById("content").style.fontSize = "12px";

// Fails to validate or sanitize user input
document.querySelector("input").addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(`User typed: ${value}`); // No validation or escape for malicious input
});
