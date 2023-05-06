import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAW65booV1vSa9JF28yJB9IEE3G1faZHzc",
  authDomain: "tienda-de-ropa-a10c9.firebaseapp.com",
  projectId: "tienda-de-ropa-a10c9",
  storageBucket: "tienda-de-ropa-a10c9.appspot.com",
  messagingSenderId: "8178874322",
  appId: "1:8178874322:web:4ed15fb8bb1bdcdd7dba0b",
};

const app = initializeApp(firebaseConfig);


export const initFirebase = () => app