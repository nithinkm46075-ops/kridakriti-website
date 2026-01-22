const text = "KRIDAKRITI 2K26 ";
let index = 0;
const speed = 180;

function typeText() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, speed);
  }
}

window.onload = typeText;

// Scroll animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach(card => {
  observer.observe(card);
});

// COUNTDOWN TIMER
const eventDate = new Date("January 27, 2026 09:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".timer").innerHTML = "<h3>Event Started 🎉</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

/*      */
document.addEventListener("DOMContentLoaded", () => {
  // EVENTS DATA
  const eventsData = {
    "27": ["Nail Art", "Mehandi", "MakeOver", "Hair Style", "Essay Writing"],
    "28": ["Rangoli", "Face Painting", "Pot Painting", "Art & Craft Work", "Collage"],
    "29": ["Solo Dance", "Solo Singing", "Solo Ramp Walk", "Group Dance", "Group Singing", "Instrumental Play", "Duet Ramp Walk"],
    "30": ["Commerce Mela", "Chess", "Carrom Board", "Athletics(100m,200m,400m)", "Shot Put", "Relay Race"],
    "31": ["Volley Ball", "Throw Ball", "Kabaddi", "Kho - Kho"]
  };

  const buttons = document.querySelectorAll(".button-container button");
  const eventsContainer = document.getElementById("events-container");
  const eventsList = document.getElementById("events-list");
  const scannerContainer = document.getElementById("scanner-container");
  const qrImage = document.getElementById("qr-image");

  let hideTimeout;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const day = btn.dataset.day;

      // Remove active class from all buttons
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Show events container
      eventsContainer.style.display = "block";

      // Show QR container
      scannerContainer.style.display = "block";

      // Clear previous timeout
      if (hideTimeout) clearTimeout(hideTimeout);

      // Populate events list
      eventsList.innerHTML = "";
      eventsData[day].forEach(event => {
        const li = document.createElement("li");
        li.textContent = event;
        eventsList.appendChild(li);
      });

      // Set QR image for this day
      qrImage.src = `images/qr-${day}.png`;

      // Auto-hide after 6 seconds
      hideTimeout = setTimeout(() => {
        eventsContainer.style.display = "none";
        scannerContainer.style.display = "none";
        buttons.forEach(b => b.classList.remove("active"));
      }, 10000);
    });
  });
});
