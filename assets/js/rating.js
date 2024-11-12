const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', function() {
        resetStars(); // Reset all stars before highlighting new ones
        highlightStars(this.getAttribute('data-value'));
    });

    star.addEventListener('mouseout', resetStars);

    star.addEventListener('click', function() {
        rating = this.getAttribute('data-value'); // Set the rating to the clicked star's value
        document.getElementById('ratingValue').textContent = rating;
        document.getElementById('thankYouMessage').style.display = 'block';
        updateStarSelection();
    });
});

function highlightStars(value) {
    for (let i = 0; i < value; i++) {
        stars[i].classList.add('hovered');
    }
}

function resetStars() {
    stars.forEach(star => star.classList.remove('hovered'));
}

function updateStarSelection() {
    stars.forEach(star => star.classList.remove('selected')); // Remove selected state from all stars
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add('selected'); // Add selected state to the chosen stars
    }
}
