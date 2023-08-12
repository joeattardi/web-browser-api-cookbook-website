const observer = new IntersectionObserver(entries => {
  // There are multiple images per row, so there are multiple
  // entries.
  entries.forEach(entry => {
    // Once the element becomes partially visible, apply the animated transition
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');

      // No need to observe this element any further
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.25 }); // Fires when images become 25% visible

// Select all images tagged with the `animate` class and observe
// them.
document.querySelectorAll('img.animate').forEach(image => {
  observer.observe(image);
});
