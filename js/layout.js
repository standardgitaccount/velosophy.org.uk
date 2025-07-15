document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => document.getElementById("header").innerHTML = data);

  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      const year = document.getElementById("year");
      if (year) year.textContent = new Date().getFullYear();
    });

  // Optional: apply labels as data attributes
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
    btn.setAttribute("data-label", labels[href] || "");
  });
}); 
