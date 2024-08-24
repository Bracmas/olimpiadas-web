import { Link, Route, Routes } from "react-router-dom";
import { Avisos } from "./screens/Avisos";
import { Pcs } from "./screens/page";
import { AuthProvider } from "./controllers/authContext";
import { Register } from "./screens/Registro";
import { Login } from "./screens/Login";
import { ProtectedRoute } from "./screens/ProtectedRoute";
import { CrearAviso } from "./screens/CrearAviso";
import './screens/styles/login.css'

// import { Chat } from "./screens/Chat";

export function App() {
  
  return(
  <>

  
  <nav className=".nav">

    <div className="nav-wrapper">
      <ul className="barreichon">

        <li ><Link to="/">Avisos</Link></li>

      <li ><Link to="/pcs">Lista de PC</Link></li>  
      <li>
        <Link to="/registro">Registro</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/crearaviso">Crear aviso</Link>
      </li>

      </ul>


      {/* <li>
        <Link to="/chat">Chat</Link>
      </li> */}
    </div>
</nav>
  <AuthProvider>
   <Routes>
    
    <Route path="/" element={
      <ProtectedRoute>
      <Avisos/>
      </ProtectedRoute>
      }/>
    <Route path="/pcs" element={
      <ProtectedRoute>
      <Pcs/>
      </ProtectedRoute>
      }/>
    {/* <Route path="/chat" element={
      <ProtectedRoute>
      <Chat/>
      </ProtectedRoute>
      }/> */}
    <Route path="/registro" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/crearaviso" element={<CrearAviso/>}/>



  </Routes>
  </AuthProvider>
</>
  )
}
export default App;