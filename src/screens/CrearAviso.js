
import { collection, addDoc,  } from 'firebase/firestore';
import { db } from "../models/firebase";

export function CrearAviso() {
const avisosCollection =  collection(db, 'avisos');
const avisosData = {
  autor: '',
  titulo:'',
  prioridad: '',
  texto: ''

  
};

// Add the document to the collection
const newDocRef = addDoc(avisosCollection,avisosData);
console.log('New document added with ID:', newDocRef.id)
}
