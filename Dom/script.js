document.getElementById('clone-btn').addEventListener('click', function() {
    // Get the card element
    const card = document.querySelector('.card');
    
    // Clone the card element
    const clone = card.cloneNode(true);
    
    // Append the clone to the container
    document.getElementById('cards-container').appendChild(clone);
});