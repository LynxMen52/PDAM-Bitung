// admin-script.js

function calculateTotalAdmin() {
    const waterUsage = document.getElementById('water-usage-admin').value;
    const pricePerCubicMeter = 5000;
    const totalPayment = waterUsage * pricePerCubicMeter;
    document.getElementById('total-payment-admin').innerText = totalPayment.toLocaleString('id-ID');
}

document.getElementById('water-usage-admin').addEventListener('input', calculateTotalAdmin);

function saveBill() {
    const customerName = document.getElementById('customer-name-admin').value;
    const waterUsage = document.getElementById('water-usage-admin').value;

    if (!customerName.trim() || !waterUsage) {
        alert("Mohon isi nama pelanggan dan jumlah pemakaian.");
        return;
    }

    const totalPayment = waterUsage * 5000;
    alert(`Tagihan untuk ${customerName} sebesar Rp ${totalPayment.toLocaleString('id-ID')} berhasil disimpan.`);
}
