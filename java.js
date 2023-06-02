window.addEventListener('DOMContentLoaded', (event) => {
    setInterval(getSensorValues, 5000); // Fetch sensor values every 5 seconds
  });
  
  function getSensorValues() {
    fetch('http://shilamsq.com/sensor-data') // Replace with your actual URL
      .then(response => response.json())
      .then(data => {
        document.getElementById('value1').textContent = data.value1;
        document.getElementById('value2').textContent = data.value2;
      })
      .catch(error => console.error('Error:', error));
  }
  