import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQaO0I1gS3ndZc4ZXskpdgBPlRsxxNncI",
  authDomain: "whatsapp-clone-2-79a6f.firebaseapp.com",
  projectId: "whatsapp-clone-2-79a6f",
  storageBucket: "whatsapp-clone-2-79a6f.appspot.com",
  messagingSenderId: "557086093286",
  appId: "1:557086093286:web:daf0a0919f52059fd87027",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
