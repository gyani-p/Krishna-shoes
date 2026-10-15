import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore, collection, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { firebaseConfig, isFirebaseConfigured } from "./firebase-config.js";

// Realtime public data bridge. Firestore Security Rules must allow public READ only.
if (isFirebaseConfigured()) {
  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const state = { products: null, gallery: null, notifications: null, settings: null };
    const publish = () => {
      window.dispatchEvent(new CustomEvent("ks-store-data", { detail: {
        ...(state.products !== null ? { products: state.products } : {}),
        ...(state.gallery !== null ? { gallery: state.gallery } : {}),
        ...(state.notifications !== null ? { notifications: state.notifications } : {}),
        ...(state.settings !== null ? { settings: state.settings } : {})
      }}));
    };
    onSnapshot(collection(db, "products"), snap => { state.products = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(p => p.active !== false); publish(); }, err => console.warn("Products live sync unavailable:", err.message));
    onSnapshot(collection(db, "gallery"), snap => { state.gallery = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(x => x.active !== false).sort((a,b)=>(a.order||0)-(b.order||0)); publish(); }, err => console.warn("Gallery live sync unavailable:", err.message));
    onSnapshot(collection(db, "notifications"), snap => { state.notifications = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(n => n.active !== false).sort((a,b)=>(Number(b.createdAt||0)-Number(a.createdAt||0))); publish(); }, err => console.warn("Notifications live sync unavailable:", err.message));
    onSnapshot(doc(db, "settings", "store"), snap => { state.settings = snap.exists() ? snap.data() : {}; publish(); }, err => console.warn("Store settings live sync unavailable:", err.message));
  } catch (err) { console.warn("Firebase is not ready yet. Demo content remains visible.", err); }
}

// Local preview bridge: lets the admin panel and storefront share demo edits in the same browser/origin.
// This is NOT a substitute for Firebase in a real public deployment.
const KS_LOCAL_DEMO_KEY = "krishnaShoesDemoStoreV1";
function publishLocalDemo() {
  try {
    const data = JSON.parse(localStorage.getItem(KS_LOCAL_DEMO_KEY) || "{}");
    if (data && Object.keys(data).length) {
      window.dispatchEvent(new CustomEvent("ks-store-data", { detail: data }));
    }
  } catch (error) { console.warn("Could not read local preview data.", error); }
}
publishLocalDemo();
window.addEventListener("storage", event => {
  if (event.key === KS_LOCAL_DEMO_KEY) publishLocalDemo();
});
