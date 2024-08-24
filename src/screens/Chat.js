// import { useState, useRef } from "react";
// import { useAuth } from '../controllers/authContext'
// import { auth, db, } from "../models/firebase";
// import { addDoc, collection, getDocs, QuerySnapshot } from "firebase/firestore";

//SIN USAR, SNIPPET DE PRUEBA
//SIN USAR, SNIPPET DE PRUEBA
//SIN USAR, SNIPPET DE PRUEBA
//SIN USAR, SNIPPET DE PRUEBA



// export function Chat() {

// const { signup, logout } = useAuth();
//     return (
//         <div className="App">
//           <header>
//             <h1>⚛️🔥💬</h1>
//             <button onClick={logout}></button>
//           </header>
    
//           <section>
//             {auth ? <ChatRoom /> : signup}
//           </section>
    
//         </div>
//       );
//     }
    
// export function ChatRoom() {
//     const dummy = useRef();
//     async function fetchDataFromMessages() {
//         const querySnapshot = await getDocs(collection(db, "messages"))
//     const data = [];
//     querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data()})
//     });
//     return data;  
// }
  
//     const [messages] = collection(db, "messages", { idField: 'id' });
  
//     const [formValue, setFormValue] = useState('');
  
  
//     const sendMessage = async (e) => {
//       e.preventDefault();
  
//       const { uid, photoURL } = auth.currentUser;
  
//       await fetchDataFromMessages.add({
//         text: formValue,
//         uid,
//         photoURL
//       })
  
//       setFormValue('');
//       dummy.current.scrollIntoView({ behavior: 'smooth' });
//     }
  
//     return (<>
//       <main>
  
//         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
//         <span ref={dummy}></span>
  
//       </main>
  
//       <form onSubmit={sendMessage}>
  
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
//         <button type="submit" disabled={!formValue}>🕊️</button>
  
//       </form>
//     </>)
//   }
  
  
//   export function ChatMessage(props) {
//     const { text, uid, photoURL } = props.message;
  
//     const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
//     return (<>
//       <div className={`message ${messageClass}`}>
//         <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
//         <p>{text}</p>
//       </div>
//     </>)
//   }
