// Menampilkan daftar produk/promosi di halaman
document.addEventListener("DOMContentLoaded", function () {
    const promoContainer = document.querySelector(".promo-container");

    const promos = [
        { title: "Promo Susu Segar", description: "Diskon 20% untuk pembelian kedua!" },
        { title: "Pertamilk Almond", description: "Beli 2 gratis 1 untuk semua rasa." },
    ];

    promos.forEach(promo => {
        const promoElement = document.createElement("div");
        promoElement.className = "promo-item";
        promoElement.innerHTML = `
            <h3>${promo.title}</h3>
            <p>${promo.description}</p>
        `;
        promoContainer.appendChild(promoElement);
    });
});