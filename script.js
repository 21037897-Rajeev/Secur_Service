//create-account.html
function createAccount(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('payerName', name);
    location.href = 'login.html';
}

//login.html
function login() {
    const name = document.getElementById('name').value;
    localStorage.setItem('username', name);
    location.href = 'index.html';
}

//forgot-password.html
function resetPassword() {
    const name = document.getElementById('name').value;
    localStorage.setItem('username', name);
    location.href = 'index.html';
}

//index.html
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('show the name').innerText = `${username}`;
    }
});

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
    
    


    const paymentMethod = localStorage.getItem('paymentMethod');
    if (paymentMethod) {
        document.getElementById('payment-method').innerText = paymentMethod;
    }
    
});

function completeTransaction() {
    location.href = 'transaction-completed.html';
}

//payment-method.html
function selectPayment(method) {
    localStorage.setItem('paymentMethod', method);
        location.href = 'transaction-details.html';
    }

// Search functionality
function search() {
    const query = document.querySelector('.search-form input').value.toLowerCase();
    const elements = document.querySelectorAll('.searchable');

    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query)) {
            element.style.backgroundColor = 'yellow';
        } else {
            element.style.backgroundColor = '';
        }
    });
}

document.querySelector('.search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    search();
});



