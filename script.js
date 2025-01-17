// Atur scroll ke atas saat halaman dimuat
window.addEventListener("beforeunload", function () {
  window.scrollTo(0, 0); // Pastikan posisi kembali ke atas
});

window.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0); // Paksa posisi scroll ke atas setelah DOM selesai dimuat

  // NAV SECT
  const title = document.getElementById("title");
  const navigation = document.getElementById("navigation");
  const hamburger = document.getElementById("hamburger");
  const sections = ["time-countdown", "streaming"];

  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px 0px -620px 0px ",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the section is in view, add the class to change text color
        hamburger.classList.remove("text-gray-900");
        hamburger.classList.add("text-white");
        title.classList.remove("text-gray-900");
        title.classList.add("text-white");
        navigation.classList.remove("text-gray-900");
        navigation.classList.add("text-white");
      } else {
        hamburger.classList.add("text-gray-900");
        hamburger.classList.remove("text-white");
        title.classList.add("text-gray-900");
        // If the section is not in view, remove the class
        title.classList.remove("text-white");
        navigation.classList.add("text-gray-900");
        navigation.classList.remove("text-white");
      }
    });
  }, observerOptions);

  // Observe each section
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      observer.observe(section);
    }
  });

  // HOME AND THANKYU SECT
  const bride = document.querySelectorAll(".bride");
  const brideImg = document.querySelector(".bride-img");
  const groom = document.querySelectorAll(".groom");
  const groomImg = document.querySelector(".groom-img");
  const mempelai = document.querySelector(".mempelai");

  const sections2 = ["home", "wedding-wishes", "thank-you"];

  const observerOptions2 = {
    root: null, // Use the viewport as the root
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
  };

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      for (let i = 0; i < bride.length; i++) {
        if (entry.isIntersecting) {
          // If the section is in view, add the class to change text color
          mempelai.classList.remove("scale-0");
          mempelai.classList.add("scale-100");
          brideImg.classList.remove("scale-20");
          brideImg.classList.add("scale-100");
          brideImg.classList.remove("opacity-0");
          brideImg.classList.add("opacity-100");
          groomImg.classList.remove("scale-20");
          groomImg.classList.add("scale-100");
          groomImg.classList.remove("opacity-0");
          groomImg.classList.add("opacity-100");
          bride[i].classList.remove("opacity-0");
          bride[i].classList.add("animate-fade");
          bride[i].classList.add("opacity-100");
          groom[i].classList.remove("opacity-0");
          groom[i].classList.add("animate-fade");
          groom[i].classList.add("opacity-100");
        } else {
          mempelai.classList.remove("scale-100");
          mempelai.classList.add("scale-0");
          brideImg.classList.add("scale-20");
          brideImg.classList.remove("scale-100");
          groomImg.classList.remove("scale-100");
          groomImg.classList.add("scale-20");
          brideImg.classList.add("opacity-0");
          brideImg.classList.remove("opacity-100");
          groomImg.classList.remove("opacity-100");
          groomImg.classList.add("opacity-0");
          bride[i].classList.remove("animate-fade");
          bride[i].classList.remove("opacity-100");
          bride[i].classList.add("opacity-0");
          groom[i].classList.remove("animate-fade");
          groom[i].classList.remove("opacity-100");
          groom[i].classList.add("opacity-0");
        }
      }
    });
  }, observerOptions2);

  sections2.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      observer2.observe(section);
    }
  });

  // Fungsi untuk membaca parameter query dari URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Mengambil parameter 'name' dari query string
  const guestName = getQueryParam("name");

  function formatName(name) {
    const words = name.split(" "); // Pisahkan nama berdasarkan spasi
    if (words.length > 2) {
      // Jika lebih dari dua kata, pindahkan kata ketiga ke baris baru
      return `${words.slice(0, 2).join(" ")}<br>${words.slice(2).join(" ")}`;
    }
    return name; // Jika hanya dua kata atau kurang, kembalikan apa adanya
  }

  // Tampilkan nama yang sudah diformat
  const formattedName = formatName(guestName);
  document.getElementById("guestName").innerHTML = formattedName;
});

//COUNTDOWN AND STREAMING
const countdown = document.getElementById("countdown");
const streamingTitle = document.querySelector(".streaming-title");
const descStream = document.getElementById("desc-streaming");

const sections3 = ["countdown", "streaming"];

const observerOptions3 = {
  root: null, // Use the viewport as the root
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
};

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countdown.classList.remove("scale-0");
      countdown.classList.add("scale-100");
      streamingTitle.classList.remove("scale-0");
      streamingTitle.classList.add("scale-100");
      descStream.classList.remove("opacity-0");
      descStream.classList.add("animate-fade");
    } else {
      countdown.classList.remove("scale-100");
      countdown.classList.add("scale-0");
      streamingTitle.classList.remove("scale-100");
      streamingTitle.classList.add("scale-0");
      descStream.classList.remove("animate-fade");
      descStream.classList.add("opacity-0");
    }
  });
}, observerOptions3);

sections3.forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    observer3.observe(section);
  }
});

//GALLERY TITLE
const sections4 = ["gallery", "location"];
const galleryTitle = document.querySelector(".gallery-title");
const weddingLocation = document.querySelector(".wedding-location");

const observerOptions4 = {
  root: null, // Use the viewport as the root
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.1,
};

const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      galleryTitle.classList.remove("scale-0");
      galleryTitle.classList.add("scale-100");
      weddingLocation.classList.remove("scale-0");
      weddingLocation.classList.add("scale-100");
    } else {
      galleryTitle.classList.remove("scale-100");
      galleryTitle.classList.add("scale-0");
      weddingLocation.classList.remove("scale-100");
      weddingLocation.classList.add("scale-0");
    }
  });
}, observerOptions4);

sections4.forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    observer4.observe(section);
  }
});

//
const sections5 = ["wedding-wishes"];
const wishesTitle = document.querySelector(".wishes-title");

const observerOptions5 = {
  root: null, // Use the viewport as the root
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      wishesTitle.classList.remove("scale-0");
      wishesTitle.classList.add("scale-100");
    } else {
      wishesTitle.classList.remove("scale-100");
      wishesTitle.classList.add("scale-0");
    }
  });
}, observerOptions5);

sections5.forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    observer5.observe(section);
  }
});

// THANK YOU SECt
const sections6 = ["thank-you"];
const thankyou = document.querySelector(".apreciate");
const thankyou2 = document.querySelector(".apreciate2");

const observerOptions6 = {
  root: null, // Use the viewport as the root
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.5,
};

const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      thankyou.classList.remove("scale-0");
      thankyou.classList.add("scale-100");
      thankyou.classList.add("animate-fade");
      thankyou2.classList.remove("scale-0");
      thankyou2.classList.add("scale-100");
      thankyou2.classList.add("animate-fade");
    } else {
      thankyou.classList.add("scale-0");
      thankyou.classList.remove("scale-100");
      thankyou.classList.remove("animate-fade");
      thankyou2.classList.add("scale-0");
      thankyou2.classList.remove("scale-100");
      thankyou2.classList.remove("animate-fade");
    }
  });
}, observerOptions6);

sections6.forEach((sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    observer6.observe(section);
  }
});

// MUSIC
const audio = document.getElementById("audio");
const musicIcon = document.getElementById("musicIcon");
const iconElement = document.getElementById("icon");

// Status awal
let isPlaying = false;

// Fungsi untuk play musik
function playMusic() {
  audio.play();
  iconElement.classList.remove("fa-pause");
  iconElement.classList.add("fa-compact-disc"); // Ubah ke icon pause
  musicIcon.classList.remove("animate-spin-pause"); // Aktifkan animasi putar
  isPlaying = true;
}

// Fungsi untuk pause musik
function pauseMusic() {
  audio.pause();
  iconElement.classList.remove("fa-compact-disc");
  iconElement.classList.add("fa-pause"); // Ubah kembali ke compact disk
  // musicIcon.classList.add("animate-spin-pause"); // Hentikan animasi putar
  isPlaying = false;
}

// Event listener untuk klik icon
musicIcon.addEventListener("click", () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

// Script untuk membuka undangan dan mengizinkan scroll
document.getElementById("buka-undangan").addEventListener("click", function () {
  document.body.style.overflow = "auto"; // Izinkan scroll
  // setTimeout(() => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" }); // Scroll ke konten
  // Memberi waktu untuk memastikan overflow diterapkan

  const musicIcon = document.getElementById("musicIcon");
  musicIcon.classList.remove("scale-0");
  musicIcon.classList.remove("opacity-0");
  musicIcon.classList.add("scale-100");
  musicIcon.classList.add("opacity-100");
  // musicIcon.classList.add("flex");
  playMusic();
});

//NAVBAR fn
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("close-menu");

// Open menu
hamburger.addEventListener("click", () => {
  menu.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  // Apply transition
  setTimeout(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    sidebar.classList.remove("translate-x-full");
    sidebar.classList.add("translate-x-0");
  }, 10);
});

/// Close menu
overlay.addEventListener("click", closeSidebar);
closeMenu.addEventListener("click", closeSidebar);

function closeSidebar() {
  // Reverse transition
  overlay.classList.remove("opacity-100");
  overlay.classList.add("opacity-0");
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("translate-x-full");

  // Hide menu after transition ends
  setTimeout(() => {
    menu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
}

//when scroll show
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("backdrop-blur-sm", "text-white");
    navbar.classList.add("bg-[#e9e5e0]", "text-gray-100");
  } else {
    navbar.classList.remove("bg-transparent", "text-gray-100");
    navbar.classList.add("bg-transparent");
  }
});
// NAVBAR fn

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
    div.className = "bg-white px-4 pt-1 pb-3 rounded-lg shadow";

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
      <h4 class="font-semibold">${wish.name}</h4>
      <h5 class=" text-black mt-2">${wish.message}</h5>
      <h6 class="text-gray-300  mt-2">${formattedDate} pukul ${formattedTime}</h6>
    `;
    return div;
  }
});
