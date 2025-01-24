// Validasi formulir
document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Semua kolom harus diisi!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Email tidak valid!");
        return;
    }

    alert("Formulir berhasil dikirim!");
});

// Fungsi validasi email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}