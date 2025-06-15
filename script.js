
document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbzX-vVUBNueMcoBhZjAe4vjEejXuG6O9UmyOrQ3Jm8KDpI0LFq6J5thZXw5Ue-yDRPB/exec', {
        method: "POST",
        body: data
    }).then(res => res.text())
      .then(text => {
        document.getElementById("message").innerText = "✅ Order received. Wait for confirmation.";
        form.reset();
    }).catch(err => {
        document.getElementById("message").innerText = "❌ Something went wrong. Try again.";
    });
});
