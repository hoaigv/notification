// firebase.js
import { initializeApp } from '@firebase/app';
import { getMessaging, getToken } from '@firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyCQZ1DXyYkGMKx9KPy8RyoEseAfKQzGzoI",
  authDomain: "book-online-5ed85.firebaseapp.com",
  projectId: "book-online-5ed85",
  storageBucket: "book-online-5ed85.appspot.com",
  messagingSenderId: "964974765462",
  appId: "1:964974765462:web:b333348ce550cfe0b8e9b7",
  measurementId: "G-E4PLHKL2F0"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
const setupNotifications = async () => {
  try {
    // Request permission for notifications
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // Get the FCM token
      const token = await getToken(messaging,{
        vapidKey: "BCA4VQM5AekvigryNP-vzxvfiDporSo9A7w77MXlMumvtMM2vNVDy4oHUwEaumQ9PvppDeQRqFsHki0Fcap7nic",
      });
      console.log('FCM Token:', token);
    } else {
      console.log('Notification permission denied.');
    }
    // Handle foreground notifications
    
  } catch (error) {
    console.error('Error setting up notifications:', error);
  }
};


export { messaging, setupNotifications };