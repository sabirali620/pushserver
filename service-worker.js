self.addEventListener('message', (event) => {
    const { title, message } = event.data;

    // Show a notification
    self.registration.showNotification(title, {
        body: message,
        icon: 'https://via.placeholder.com/128', // Replace with your icon URL
    });
});
