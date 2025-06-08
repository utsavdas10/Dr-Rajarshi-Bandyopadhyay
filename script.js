document.addEventListener('DOMContentLoaded', function() {
    // Select all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the ".hidden-content" div that is a sibling of the button's parent
            const content = this.previousElementSibling;
            
            if (content && content.classList.contains('hidden-content')) {
                // Toggle the display
                const isHidden = window.getComputedStyle(content).display === 'none';
                content.style.display = isHidden ? 'block' : 'none';

                // Change the button text
                this.textContent = isHidden ? 'Read Less' : 'Read More';
            }
        });
    });
});