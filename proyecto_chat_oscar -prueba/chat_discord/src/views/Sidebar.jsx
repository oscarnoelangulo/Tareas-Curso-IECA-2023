import React, { useState, useEffect } from "react";
import { Avatar, Tooltip } from "@mui/material";
import { ExpandMore, Add, Settings } from "@mui/icons-material";
import CanalEnSidebar from "../components/CanalEnSidebar";
import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc, getDocs, } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const Sidebar = ({ usuarioGlobal, setCanalActivo }) => {
  const [listaCanales, setListaCanales] = useState([]);
  
async function getCanales() {
  const canalesArr = [];
  const collectionRef = collection(firestore, "canales");
  const canalesCifrados = await getDocs(collectionRef);
  canalesCifrados.forEach((canalCifrado) => {
  canalesArr.push(canalCifrado.data());
  });

 setListaCanales (canalesArr);
 }

  function agregarCanal() {
    const nombreCanal = prompt("¿Cuál es el nombre del canal?");
    if (nombreCanal) {
      const docuRef = doc(firestore, `canales/${nombreCanal}`);
      setDoc(docuRef, {
        id: new Date().getTime(),
        nombre: nombreCanal,
      });

      getCanales();
    }
  }

  useEffect(() => {
    getCanales();
  }, []);


  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3> Chat</h3>
        <ExpandMore />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMore />
            <h4>Canales</h4>
          </div>
          <Tooltip title="Agregar canal" arrow>        
           <Add className="sidebar__addChannel" onClick={agregarCanal} />
          </Tooltip>
          
        </div>

        <div className="sidebar__channelsList">
          {listaCanales
            ? listaCanales.map((canal) => {
                return (
                  
                  <div onClick={() => setCanalActivo(canal.nombre)}>
                    
                      <CanalEnSidebar nombre={canal.nombre} id={canal.id} />
                  
                  </div>
                );
              })
            : null}
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar src={usuarioGlobal.photoURL} />
        <div className="sidebar__profileInfo">
          <h5>{usuarioGlobal.displayName}</h5>
        </div>
        <div className="sidebar__profileIcons">
        <Tooltip title="CERRAR SESIÓN" arrow>        
          <Settings onClick={() => signOut(auth)} />
        </Tooltip>

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
