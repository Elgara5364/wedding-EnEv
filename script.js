// Atur scroll ke atas saat halaman dimuat
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0); // Pastikan posisi kembali ke atas
});

window.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0); // Paksa posisi scroll ke atas setelah DOM selesai dimuat
});

// Script untuk membuka undangan dan mengizinkan scroll
document.getElementById("buka-undangan").addEventListener("click", function () {
  document.body.style.overflow = "auto"; // Izinkan scroll
  // setTimeout(() => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" }); // Scroll ke konten
  // Memberi waktu untuk memastikan overflow diterapkan
});

//COUNTDOWN TIME FUNC
const targetDate = new Date("2025-01-25T16:00:00");

// Fungsi untuk memperbarui countdown
function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  const countdownElement = document.getElementById("countdown");
  const countdownLabelElement = document.getElementById("countdown-label");

  // Hitung hari, jam, menit
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Tentukan format tampilan
  if (timeDifference <= 0) {
    countdownElement.textContent = "0";
    countdownLabelElement.textContent = "Waktu Habis";
    clearInterval(interval);
  } else if (days > 0) {
    countdownElement.textContent = days;
    countdownLabelElement.textContent = "Hari lagi";
  } else if (hours > 0) {
    countdownElement.textContent = hours;
    countdownLabelElement.textContent = "Jam lagi";
  } else if (minutes > 0) {
    countdownElement.textContent = minutes;
    countdownLabelElement.textContent = "Menit lagi";
  }
}

// Jalankan fungsi setiap 1 detik
const interval = setInterval(updateCountdown, 1000);

// Panggil sekali di awal untuk memastikan tampilan langsung diperbarui
updateCountdown();

//COUNTDOWN TIME FUNC

//GALERRY FUNC

const slider = document.getElementById("slider");
const slides = slider.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 8000; // 8 detik
let autoSlideInterval;

// Fungsi untuk pindah ke slide tertentu
function goToSlide(index) {
  slider.scrollTo({
    left: slider.offsetWidth * index,
    behavior: "smooth",
  });
  currentIndex = index;
}

// Fungsi untuk pindah ke slide berikutnya
function nextSlide() {
  const nextIndex = (currentIndex + 1) % totalSlides; // Jika di akhir, kembali ke awal
  goToSlide(nextIndex);
}

// Fungsi untuk pindah ke slide sebelumnya
function prevSlide() {
  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Jika di awal, kembali ke akhir
  goToSlide(prevIndex);
}

// Tombol navigasi manual
nextButton.addEventListener("click", () => {
  nextSlide();
  clearInterval(autoSlideInterval); // Hentikan auto-slide sementara
  startAutoSlide(); // Restart auto-slide
});

prevButton.addEventListener("click", () => {
  prevSlide();
  clearInterval(autoSlideInterval); // Hentikan auto-slide sementara
  startAutoSlide(); // Restart auto-slide
});

// Mulai auto-slide
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, intervalTime);
}

// Hentikan auto-slide saat halaman di-unload
window.addEventListener("unload", () => clearInterval(autoSlideInterval));

// Inisialisasi
startAutoSlide();
goToSlide(currentIndex);

// Elemen-elemen
const form = document.getElementById("wishForm");
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const charCount = document.getElementById("charCount");
const wishesSection = document.getElementById("wishesSection");

// Update sisa karakter
messageInput.addEventListener("input", () => {
  const remaining = 300 - messageInput.value.length;
  charCount.textContent = `Huruf yang Tersisa: ${remaining}`;
});

// Tambah pesan baru
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah refresh halaman

  // Ambil nilai dari input
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  const timestamp = new Date().toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  // Ambil inisial dari nama
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Buat elemen untuk pesan baru
  const wishCard = document.createElement("div");
  wishCard.className =
    "bg-white p-4 rounded-lg shadow-md flex items-start space-x-4";
  wishCard.innerHTML = `
        <div class="flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-full">
          ${initials}
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-800">${name}</h2>
          <p class="text-gray-600 mt-2">${message}</p>
          <p class="text-sm text-gray-400 mt-4">${timestamp}</p>
        </div>
      `;

  // Tambahkan pesan ke section
  wishesSection.prepend(wishCard);

  // Reset form
  // form.reset();
  charCount.textContent = "Huruf yang Tersisa: 300";
});

// https://wedding-enev-default-rtdb.asia-southeast1.firebasedatabase.app/:null

// CONNECT TO FIREBASE

//send data to database and fetch data from database
document.addEventListener("DOMContentLoaded", function () {
  const wishForm = document.getElementById("wishForm");
  const wishesSection = document.getElementById("wishesSection");

  // Load existing wishes when page loads
  loadWishes();

  // Handle form submission
  wishForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("nameInput");
    const messageInput = document.getElementById("messageInput");

    const wishData = {
      name: nameInput.value,
      message: messageInput.value,
      timestamp: new Date().toISOString(),
    };

    try {
      // Send data to Firebase Realtime Database using REST API
      const response = await fetch(
        "https://wedding-enev-default-rtdb.asia-southeast1.firebasedatabase.app/wishes.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(wishData),
        }
      );

      if (response.ok) {
        // Clear form
        wishForm.reset();
        // Reload wishes to show new entry
        loadWishes();
      } else {
        throw new Error("Failed to send wish");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send your wish. Please try again.");
    }
  });

  // Function to load and display wishes
  async function loadWishes() {
    try {
      const response = await fetch(
        "https://wedding-enev-default-rtdb.asia-southeast1.firebasedatabase.app/wishes.json"
      );
      const wishes = await response.json();

      // Convert the object to an array
      const wishesArray = Object.keys(wishes).map((key) => ({
        id: key,
        ...wishes[key],
      }));

      // Sort the array by timestamp in descending order
      wishesArray.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      // Clear current wishes
      wishesSection.innerHTML = "";

      // Display sorted wishes
      wishesArray.forEach((wish) => {
        const wishElement = createWishElement(wish);
        wishesSection.appendChild(wishElement);
      });
    } catch (error) {
      console.error("Error loading wishes:", error);
    }
  }

  // Function to create wish element
  function createWishElement(wish) {
    const div = document.createElement("div");
    div.className = "bg-white px-4 rounded-lg shadow";

    // Parse the timestamp
    const date = new Date(wish.timestamp);

    // Format the date and time
    const formattedDate = date.toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Include the formatted date and time in the HTML

    div.innerHTML = `
      <h3 class="font-semibold text-lg">${wish.name}</h3>
      <p class="text-sm text-black/90 mt-2">${wish.message}</p>
      <p class="text-gray-300 text-[10px] mt-2">${formattedDate} pukul ${formattedTime}</p>
    `;
    return div;
  }
});
