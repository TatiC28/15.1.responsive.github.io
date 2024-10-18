// Array of text options to rotate
const carouselTexts = [
    '...vestibulum mollis, tortor ac congue commodo',
    '...quis vulputate dolor augue ut mauris',
    '...tincidunt in nibh vitae, scelerisque nunc'
  ];
  
  let currentIndex = 0;
  
  // Function to change the carousel text
  function changeText() {
    const textElement = document.getElementById('carouselText');
    textElement.innerText = carouselTexts[currentIndex];
    currentIndex = (currentIndex + 1) % carouselTexts.length;
  }
  
  // Ensure the DOM is fully loaded before starting the carousel
  document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize the first text and start the interval
    changeText();
    setInterval(changeText, 2000); // Change text every 2 seconds
  });
  