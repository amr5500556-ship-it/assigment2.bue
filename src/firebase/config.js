import{initializeApp}from 'firebase/app'
import{getAuth}from 'firebase/auth'
import{getFirestore}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDTW5DAvjmK2vdKETwC7i4DFNRgeo53xkg",
  authDomain: "blog-123a1.firebaseapp.com",
  projectId: "blog-123a1",
  storageBucket: "blog-123a1.firebasestorage.app",
  messagingSenderId: "53066694040",
  appId: "1:53066694040:web:97ceec607eddada4c5bfed"
};
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
