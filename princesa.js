document.querySelectorAll('.stars').forEach(starContainer => {
    const stars = starContainer.querySelectorAll('.star');
    
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        
        // Remove "selected" class from all stars
        stars.forEach(s => s.classList.remove('selected'));
        
        // Add "selected" class to the clicked star and those before it
        for (let i = 0; i < rating; i++) {
          stars[i].classList.add('selected');
        }
        
        // Save rating (optional)
        starContainer.setAttribute('data-rating', rating);
      });
    });
  });