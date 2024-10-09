// script.js

// Simulasikan data pelanggan yang diambil dari admin-script.js
let customers = [
    {id: "001", name: "Budi Santoso", address: "Winenet", waterUsage: 20, totalBill: 100000},
    {id: "002", name: "Ani Lestari", address: "Winenet", waterUsage: 30, totalBill: 150000},
    {id: "003", name: "Rudi Wijaya", address: "Winenet", waterUsage: 25, totalBill: 125000},
    {id: "004", name: "Anton Laksmana", address: "Winenet", waterUsage: 15, totalBill: 75000}
];

// Fungsi untuk memeriksa status pembayaran di localStorage
function getPaymentStatus(billNumber) {
    return localStorage.getItem(`bill_paid_${billNumber}`) === 'true';
}

// Fungsi untuk menyimpan status pembayaran di localStorage
function setPaymentStatus(billNumber, status) {
    localStorage.setItem(`bill_paid_${billNumber}`, status);
}

// Fungsi untuk memeriksa tagihan berdasarkan nomor pelanggan
function checkBill() {
    const billNumber = document.getElementById('bill-number').value;

    if (billNumber.trim() === "") {
        alert("Mohon masukkan nomor pelanggan!");
        return;
    }

    const customer = customers.find(c => c.id === billNumber);

    if (customer) {
        document.getElementById('bill-info').classList.remove('hidden');
        document.getElementById('customer-name').innerText = customer.name;
        document.getElementById('customer-address').innerText = customer.address;
        document.getElementById('water-usage').innerText = `${customer.waterUsage} m³`;
        
        const isBillPaid = getPaymentStatus(billNumber);
        document.getElementById('total-bill').innerText = isBillPaid ? "Rp 0" : `Rp ${customer.totalBill.toLocaleString('id-ID')}`;
    } else {
        alert("Nomor pelanggan tidak ditemukan!");
        document.getElementById('bill-info').classList.add('hidden');
    }
}

// Fungsi untuk membayar tagihan
function payBill() {
    const billNumber = document.getElementById('bill-number').value;

    if (billNumber.trim() === "") {
        alert("Mohon masukkan nomor pelanggan!");
        return;
    }

    if (getPaymentStatus(billNumber)) {
        alert("Tagihan sudah dibayar!");
    } else {
        setPaymentStatus(billNumber, true);
        alert("Pembayaran Berhasil!");
        document.getElementById('total-bill').innerText = "Rp 0"; 
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0px";
}
