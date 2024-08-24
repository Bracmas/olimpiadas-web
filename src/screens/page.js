import { db } from "../../src/models/firebase";
import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import "./styles/login.css"
async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "e_informaticos"))

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data()})
    });
    return data;  
}


export function Pcs() {

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setUserData(data);
        }
        fetchData();
    }, []);
    return (

        <main className="flex min-h-screen flex col items-center justify-between p-24">
            <h1 className='h1'>
                Fetch a la DB
            </h1>
    <div>
    {userData.map((userData) => (
        <div key={userData.ID_equipo} className='jeisonPCS'>
        <p className='text-xl font-bold'>{userData.ID_equipo}</p>
        <p>{userData.año_compra}</p>
        <p>{userData.marca}</p>
        <p>{userData.modelo}</p>
        <p>{JSON.stringify(userData.pc_esp)}</p>
        <p>{JSON.stringify(userData.prox_mant)}</p>
        <p>{userData.tipo_equipo}</p>
        <p>{JSON.stringify(userData.ultimo_mant)}</p>
        </div>
    
    ))}
    </div>
</main>
    )
        
}
