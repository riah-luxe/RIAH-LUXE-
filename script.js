document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Welcome to RIAH LUXE! Our online shopping experience is coming soon.");
        });
    });

});