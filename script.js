document.addEventListener("DOMContentLoaded", function() {
    
    // Existing script for on-scroll animations
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    // --- NEW SCRIPT FOR SERVICE PAGE "READ MORE" BUTTON ---
    const readMoreBtn = document.querySelector('.read-more-btn');
    const hiddenContent = document.querySelector('.hidden-content');

    if (readMoreBtn && hiddenContent) {
        readMoreBtn.addEventListener('click', function() {
            // Check if the content is currently shown
            const isContentVisible = hiddenContent.style.display === 'block';

            if (isContentVisible) {
                // Hide it
                hiddenContent.style.display = 'none';
                this.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
                this.classList.remove('expanded');
            } else {
                // Show it
                hiddenContent.style.display = 'block';
                this.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
                this.classList.add('expanded');
            }
        });
    }
});