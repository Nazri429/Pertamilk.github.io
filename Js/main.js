// Smooth scroll untuk navigasi di halaman
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Log sederhana saat halaman berhasil dimuat
window.onload = function () {
    console.log("Halaman Pertamilk berhasil dimuat!");
};