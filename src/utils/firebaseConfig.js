// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore, query, where, doc, getDoc}  from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6B0T5Y_PrTFT_8ms79Od_1KqedHkNv3c",
  authDomain: "proyectreact-7b939.firebaseapp.com",
  projectId: "proyectreact-7b939",
  storageBucket: "proyectreact-7b939.appspot.com",
  messagingSenderId: "399386264773",
  appId: "1:399386264773:web:ab5c3b2f23cffb71429cac"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const firestoreFetch = async (id) => {
  let q;  
  if (id) {
    q = query(collection(db, "products"), where("categoryId", "==", id));

  } else {
    q = query(collection(db, "products"));
  }
  const querySnapshot = await getDocs(q);

  const dataFromFirestore = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
  return dataFromFirestore
  
}

export const firestoreOneFetch = async (item) => {
  const docRef = doc(db, "products", item);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {id: docSnap.id, ...docSnap.data()};
  } else {
    console.log("No such document!");
  }
}