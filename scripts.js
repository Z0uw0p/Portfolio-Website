// Hide and show the header on scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > lastScrollY) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
});

// Modal for project details
const modal = document.getElementById('project-modal');
const modalContent = document.getElementById('modal-body');
const closeModal = document.getElementsByClassName('close')[0];

document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const projectId = img.getAttribute('data-project');
        // Load project details based on image clicked
        modalContent.innerHTML = `<h2>Project ${projectId} Details</h2><p>Here’s a description and details of the project.</p>`;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent successfully!');
        // Here you would add form submission code (e.g., email service or API)
    } else {
        alert('Please fill in all fields.');
    }
});
