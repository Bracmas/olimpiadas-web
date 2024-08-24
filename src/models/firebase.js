
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'

const firebaseConfig = {
        apiKey: "AIzaSyAiGn9TcxgoVn5oBTZny9u-wDYMosH5nkY",
        authDomain: "olimpiadas-react.firebaseapp.com",
        projectId: "olimpiadas-react",
        storageBucket: "olimpiadas-react.appspot.com",
        messagingSenderId: "495775505766",
        appId: "1:495775505766:web:02dnnoeefa69d60ebe9573ca7"
      };
      
      // Initialize Firebase
      let app;
      if (firebase.apps.length === 0) {
          app = firebase.initializeApp(firebaseConfig)
      } else {
          app = firebase.app()
      }
      
      const db = firebase.firestore();
      const auth = firebase.auth();

export { auth, db }

