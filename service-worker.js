self.addEventListener('install', (event) => {
    alert('Service Worker installed.');
});

self.addEventListener('activate', (event) => {
    alert('Service Worker activated.');
});

self.addEventListener('notificationclick', (event) => {
    alert('Notification clicked:');
    event.notification.close();
});
