document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project img');

    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            const projectPage = img.getAttribute('data-project');
            window.location.href = projectPage;
        });
    });
});