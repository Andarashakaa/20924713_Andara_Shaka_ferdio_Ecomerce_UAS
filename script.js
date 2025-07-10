// script.js - untuk semua halaman

console.log("Website Green Thrift Loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Fully Loaded di halaman:", window.location.pathname);

  // Jika tombol BELI ada, pasang handler
  const beliBtn = document.getElementById("beli-btn");
  if (beliBtn) {
    beliBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Fitur BELI belum tersedia.");
    });
  }

  // Jika tombol KIRIM ada, pasang handler
  const kirimBtn = document.getElementById("kirim-btn");
  if (kirimBtn) {
    kirimBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Fitur KIRIM belum tersedia.");
    });
  }
});

// Optional: Tampilkan alert di landing saja
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
  console.log("Ini halaman landing");
}

if (window.location.pathname.includes("produk.html")) {
  console.log("Ini halaman daftar produk");
}

if (window.location.pathname.includes("kontak.html")) {
  console.log("Ini halaman kontak");
}
if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
  alert("Selamat datang di Green Thrift!");
}
