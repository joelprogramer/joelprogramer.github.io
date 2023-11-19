document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    sendMessage(name, email, message);
});

function sendMessage(name, email, message) {
    fetch('https://example.com/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Meddelande skickat:', data);
        alert('Meddelande skickat!');
    })
    .catch(error => {
        console.error('Fel vid skickande av meddelande:', error);
        alert('Något gick fel. Försök igen senare.');
    });
}
