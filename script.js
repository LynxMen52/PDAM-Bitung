// script.js

let isBillPaid = false;

function checkBill() {
    const billNumber = document.getElementById('bill-number').value;
    
    if (billNumber.trim() === "") {
        alert("Mohon masukkan nomor tagihan!");
        return;
    }
    
    if (billNumber === "12345") {
        document.getElementById('bill-info').classList.remove('hidden');
        document.getElementById('customer-name').innerText = "Budi Santoso";
        document.getElementById('customer-address').innerText = "Winenet";
        document.getElementById('water-usage').innerText = "20 m³";
        document.getElementById('total-bill').innerText = isBillPaid ? "Rp 0" : "Rp 100,000";
    } else {
        alert("Nomor tagihan tidak ditemukan!");
        document.getElementById('bill-info').classList.add('hidden');
    }
}

function payBill() {
    if (isBillPaid) {
        alert("Tagihan sudah dibayar!");
    } else {
        isBillPaid = true;
        alert("Pembayaran Berhasil!");
        document.getElementById('total-bill').innerText = "Rp 0"; 
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = (sidebar.style.left === "0px") ? "-250px" : "0px";
}
