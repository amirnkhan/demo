import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCMMEfE9aFUfeaH-6P7qixSO1iIk_KJdew",
authDomain: "fir-f3119.firebaseapp.com",
projectId: "fir-f3119",
storageBucket: "fir-f3119.appspot.com",
messagingSenderId: "449809265739",
appId: "1:449809265739:web:6174718da13d11a72f49ce",
measurementId: "G-572Q8DD1SH"

};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


