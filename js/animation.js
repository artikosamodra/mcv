// Ambil elemen HTML yang akan menampilkan animasi Lottie
const lottieContainer = document.getElementById('lottie-container');

// Tentukan path ke file JSON animasi Lottie
const animationPath = 'assets/animation/hero-animation.json';

// Buat instance Lottie dan mainkan animasi
const anim = lottie.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath,
});