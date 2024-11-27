document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.photo-gallery');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gallery.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(gallery);
});