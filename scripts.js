function filterVenues() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const venueCards = document.querySelectorAll('.venue-card');

    venueCards.forEach(card => {
        const city = card.getAttribute('data-city').toLowerCase();
        const sport = card.getAttribute('data-sport').toLowerCase();

        if (city.includes(searchValue) || sport.includes(searchValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
