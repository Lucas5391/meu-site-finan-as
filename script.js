document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.getElementById("mensagem-confirmacao").classList.remove("hidden");

    setTimeout(() => {
        document.getElementById("mensagem-confirmacao").classList.add("hidden");
        document.getElementById("contact-form").reset();
    }, 3000);
});