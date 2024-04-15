document.addEventListener("DOMContentLoaded", e => {
    let dates_footer;

    dates_footer = document.querySelector("footer p time");

    const version = new Date().getFullYear();
    dates_footer.innerText = version;
});