// Functionality to toggle the visibility of additional information
document.getElementById('toggle-details').addEventListener('click', function() {
    const moreInfoSection = document.getElementById('more-info');
    
    if (moreInfoSection.classList.contains('hidden')) {
        moreInfoSection.classList.remove('hidden');
        this.textContent = 'Hide More Info';
    } else {
        moreInfoSection.classList.add('hidden');
        this.textContent = 'Show More Info';
    }
});
