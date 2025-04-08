// ===============================
// 🎯 Start Button Functionality
// ===============================
function enterPortfolio() {
    // Show welcome popup
    alert("Welcome to Developer World 💻✨");

    // After 1 second, redirect to portfolio homepage
    setTimeout(() => {
        window.location.href = "home.html"; // This is your homepage
    }, 1000);
}

// ===============================
// 🖱️ Custom Cursor Movement
// ===============================
document.addEventListener("mousemove", (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});


