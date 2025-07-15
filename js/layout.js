document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then(response => response.text())
    .then(data => document.getElementById("header").innerHTML = data);

  // Load footer and set year
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      const yearSpan = document.getElementById("year");
      if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
      }
    });

  // Set button labels (optional enhancement)
  const labels = {
    "blog.html": "Blog",
    "detailing.html": "Detailing",
    "driving.html": "Driving",
    "maintenance.html": "Maintenance",
    "photography.html": "Photography",
    "reviews.html": "Reviews"
  };

  document.querySelectorAll(".btn-grid").forEach(btn => {
    const href = btn.getAttribute("href");
    const label = labels[href];
    if (label) {
      btn.innerHTML = `<span class="btn-label">${label}</span>`;
    }
  });
});

