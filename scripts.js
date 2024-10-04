window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.opacity = '0';
    } else {
        header.style.opacity = '1';
    }
});
