// notificationHelpers.js
export const toastNotification = ({ title, description, status }) => {
    // Implement your toast notification logic
    alert(`Toast Notification: ${title} - ${description} - ${status}`);
  };
  
  export const sendNativeNotification = ({ title, body }) => {
    // Implement your native notification logic
    alert(`Native Notification: ${title} - ${body}`);
  };