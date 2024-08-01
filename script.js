//create-account.html
function createAccount(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('payerName', name);
    location.href = 'login.html';
}

//login.html
function login(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('payerName', name);
    location.href = 'homepage.html';
}

//forgot-password.html
function resetPassword(event) {
    event.preventDefault();
    location.href = 'index.html';
}

//ai-features.html
function addToFee(amount) {
    let fee = localStorage.getItem('fee') ? parseFloat(localStorage.getItem('fee')) : 0;
    fee += amount;
    localStorage.setItem('fee', fee.toFixed(2));
}

//blockchain-features.html
function addToFee(amount) {
    let fee = localStorage.getItem('fee') ? parseFloat(localStorage.getItem('fee')) : 0;
    fee += amount;
    localStorage.setItem('fee', fee.toFixed(2));
}

//transaction-details.html
document.addEventListener('DOMContentLoaded', function() {
    let fee = localStorage.getItem('fee') ? parseFloat(localStorage.getItem('fee')) : 0;
    let gst = fee * 0.09;
    let serviceCharge = fee * 0.02;
    let total = fee + gst + serviceCharge;

    document.getElementById('total-fee').value = fee.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('payer').value = localStorage.getItem('payerName');
});

function completeTransaction() {
    alert("TRANSACTION COMPLETED");
    location.href = 'index.html';
}

//payment-method.html
function selectPayment(method) {
    localStorage.setItem('paymentMethod', method);
    document.getElementById('pay-by').value = method;
    location.href = 'transaction-details.html';
}