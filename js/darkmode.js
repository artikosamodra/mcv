document.getElementById("btn-darkMode").addEventListener("click", function () {
  // Seleksi elemen <html>
  const htmlElement = document.documentElement;

  // Toggle kelas 'dark'
  htmlElement.classList.toggle("dark");

  // Dapatkan status terakhir setelah toggle
  const isDarkMode = htmlElement.classList.contains("dark");

  // Setel 'data-bs-theme' berdasarkan status terakhir
  htmlElement.setAttribute("data-bs-theme", isDarkMode ? "dark" : "light");

  // Merubah Icon Sun dan Moon pada Fitur Dark Mode
  const sunIcon = document.getElementById("sunIcon");
  const moonIcon = document.getElementById("moonIcon");
  sunIcon.style.display = sunIcon.style.display === "none" ? "inline" : "none";
  moonIcon.style.display =
    moonIcon.style.display === "none" ? "inline" : "none";

  const lottieMode = document.getElementById("lottie");
  lottieMode.classList.toggle("bg-dark");
  lottieMode.classList.toggle("bg-warning");
});


// Test
// Seleksi elemen tombol dan elemen yang tersembunyi
// const seeMoreButton = document.getElementById('seeMoreButton');
// const hiddenContent = document.getElementById('hiddenContent');

// // Tambahkan event listener untuk mengatur perilaku ketika tombol diklik
// seeMoreButton.addEventListener('click', function () {
//   // Toggle tampilan elemen tersembunyi
//   hiddenContent.style.display = hiddenContent.style.display === 'none' ? 'block' : 'none';
// });
