// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF1du9QjcFc-ju2YJ4W6Qv2F4bpxjU_9I",
  authDomain: "wild-photography.firebaseapp.com",
  projectId: "wild-photography",
  storageBucket: "wild-photography.appspot.com",
  messagingSenderId: "432205320877",
  appId: "1:432205320877:web:dc9613579bd4b5333f6c24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth