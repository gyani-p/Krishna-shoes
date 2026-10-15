// Firebase web app configuration for the Krishna Shoes project.
// Web config values are expected to be present in client-side apps; security must be enforced by Firebase Auth and Rules.
export const firebaseConfig = {
  apiKey: "AIzaSyCyrAWzgvct5IkTe9e7Qbq_R3dpme3pFwU",
  authDomain: "krishna-shoes.firebaseapp.com",
  projectId: "krishna-shoes",
  storageBucket: "krishna-shoes.firebasestorage.app",
  messagingSenderId: "638226401819",
  appId: "1:638226401819:web:91f6d5e877f65ad6e606be",
  measurementId: "G-N5ZGY4S3E6"
};

// IMPORTANT: Replace this with the exact email of the authorized client admin before live deployment.
export const ADMIN_EMAIL = "laptopkothiya@gmail.com";
export const isFirebaseConfigured = () => Boolean(firebaseConfig.apiKey && !firebaseConfig.apiKey.includes("PASTE_") && firebaseConfig.projectId && !firebaseConfig.projectId.includes("PASTE_"));
