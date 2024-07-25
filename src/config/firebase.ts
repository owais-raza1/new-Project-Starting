import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjP-dEjg1ClJ8CwXd5AuS9ewlAJHbZXUM",
  authDomain: "new-project-110e3.firebaseapp.com",
  projectId: "new-project-110e3",
  storageBucket: "new-project-110e3.appspot.com",
  messagingSenderId: "58365315179",
  appId: "1:58365315179:web:f166cb72723fbb05de092e",
  measurementId: "G-M524MX5Y7X",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const SignUpUser = async (userinfo: any) => {
  const { firstName, lastName, email, password } = userinfo;
  await createUserWithEmailAndPassword(auth, email, password);
  return addDoc(collection(db, "users"), {
    email,
    firstName,
    lastName,
  });
};

export const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const addProduct = async (product: any) => {
  const { title, description, price, image } = product;

  const storageRef = ref(storage, "products/" + image.name);

  await uploadBytes(storageRef, image);

  const url = await getDownloadURL(storageRef);

  await addDoc(collection(db, "products"), {
    title,
    description,
    price,
    image: url,
  });

  const docRef = doc(db, "products", );
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

export { app, db, onAuthStateChanged, auth };
