document.addEventListener("DOMContentLoaded", e => {
    let dates_footer;

    dates_footer = document.querySelector("footer p time");

    const version = new Date().getFullYear();
    dates_footer.innerText = version;




    /* animation des images */
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.querySelector('img').style.filter = 'brightness(0) invert(1)';
            link.querySelector('.overlay').style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            link.querySelector('img').style.filter = 'none';
            link.querySelector('.overlay').style.opacity = '0';
        });
    });
}); 