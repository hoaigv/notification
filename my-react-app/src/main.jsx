
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { register } from './firebase/serviceWorker.js';

createRoot(document.getElementById('root')).render(
  
    <App />
 
)

register();