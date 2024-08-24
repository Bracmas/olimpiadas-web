import { db } from "../models/firebase";
import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import "./styles/login.css"


async function fetchDataFromAvisos() {
    const querySnapshot = await getDocs(collection(db, "avisos"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()})
    });
    return data;  
}


export function Avisos() {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromAvisos();
            setUserData(data);
        }
        fetchData();
    }, []);
    return (
        <main className="flex min-h-screen flex col items-center justify-between p-24">
           <div className="profileScreen--fadeblack">
            <h1 className='h1'>
                Fetch a Avisos
            </h1>
    <div >
    {userData.map((userData) => (
        <div key={userData.ID} className='jeison'>
        <p className='NombreAutor'>Autor: {userData.autor} </p>
        <p className="priority">Prioridad: {userData.prioridad}</p>
        <p className="titulardo">Titulo: {userData.titulo}</p>
        <p className="textitoide">Mensaje: {userData.texto}</p>
        </div>
    
    ))}
    </div>
    </div>
</main>
    )
        
}
