document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const generalDetailsForm = document.getElementById("generalDetailsForm");
    const transactionDetailsForm = document.getElementById("transactionDetailsForm");
    const paymentMethodForm = document.getElementById("paymentMethodForm");
    const subscribeForm = document.getElementById("subscribeForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Login form submitted");
        });
    }

    if (generalDetailsForm) {
        generalDetailsForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("General Details form submitted");
        });
    }

    if (transactionDetailsForm) {
        transactionDetailsForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Transaction Details form submitted");
        });
    }

    if (paymentMethodForm) {
        paymentMethodForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Payment Method form submitted");
        });
    }

    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Subscribe form submitted");
        });
    }
});