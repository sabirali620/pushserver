importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCeWExfD64PI3RtkyMYneSsJE0_q8r2F", // Replace with your Firebase API key
    authDomain: "sampleios-6b676.firebaseapp.com", // Replace with your Firebase Auth domain
    projectId: "sampleios-6b676", // Replace with your Firebase Project ID
    storageBucket: "sampleios-6b676.firebasestorage.app", // Replace with your Firebase Storage bucket
    messagingSenderId: "183336198531", // Replace with your Firebase messaging sender ID
    appId: "1:183336198531:web:5822732f5446f1af6e16b6" // Replace with your Firebase App ID
});


const messaging = firebase.messaging();

self.addEventListener('push', (event) => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'https://via.placeholder.com/128', // Replace with your notification icon
    });
});
