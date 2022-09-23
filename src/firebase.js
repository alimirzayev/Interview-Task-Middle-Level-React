import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfiguration = {
    apiKey: "AIzaSyC7XPNTsMDEK09eyOY6VhaSoiDv-93Y8jg",
    authDomain: "mapbox-7fd95.firebaseapp.com",
    projectId: "mapbox-7fd95",
    storageBucket: "mapbox-7fd95.appspot.com",
    messagingSenderId: "546072390616",
    appId: "1:546072390616:web:ffb4f23a395d5558c9a0ad",
    measurementId: "G-SXMGQV5SW1"
}

const app = initializeApp(firebaseConfiguration);
export const db = getDatabase(app);