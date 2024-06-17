document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      event.preventDefault(); // Prevent form submission
    }
  });