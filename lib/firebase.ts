import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzCEV351JUY2EBYC45-c0oHQWQ_F35Egk",
  authDomain: "ufill-admissions-documents.firebaseapp.com",
  projectId: "ufill-admissions-documents",
  storageBucket: "ufill-admissions-documents.firebasestorage.app",
  messagingSenderId: "638501564562",
  appId: "1:638501564562:web:aa6c700a86316f7995364b",
  measurementId: "G-ZCYY0WWPZF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Storage with better settings
export const storage = getStorage(app, "gs://ufill-admissions-documents.appspot.com");

// Optional: Reduce timeout for faster fail
// storage.maxUploadRetryTime = 10000; // 10 seconds instead of default 120 seconds
// storage.maxOperationRetryTime = 10000;

export default app;