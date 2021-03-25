import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDFaxLw2IFS5l2-4VSeMrm0qNt9l1EvMns",
    authDomain: "auth-development-9d322.firebaseapp.com",
    projectId: "auth-development-9d322",
    storageBucket: "auth-development-9d322.appspot.com",
    messagingSenderId: "718652582461",
    appId: "1:718652582461:web:a6cac188eff203b1f99854"

})

export const auth = app.auth();
export default app;