/* eslint-env serviceworker */
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
    apiKey: "AIzaSyCQZ1DXyYkGMKx9KPy8RyoEseAfKQzGzoI",
    authDomain: "book-online-5ed85.firebaseapp.com",
    projectId: "book-online-5ed85",
    storageBucket: "book-online-5ed85.appspot.com",
    messagingSenderId: "964974765462",
    appId: "1:964974765462:web:b333348ce550cfe0b8e9b7",
    measurementId: "G-E4PLHKL2F0"
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});