import React, { useState, useEffect, useRef } from "react";
import { AddCircle, Send } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import EncabezadoChat from "../components/EncabezadoChat";
import Mensaje from "../components/Mensaje";
import firebaseApp from "../firebase/credenciales";
import {  getFirestore,  doc, setDoc, collection, getDocs,} from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

const ChatScreen = ({ canalActivo, usuario }) => {
  const [inputMensaje, setInputMensaje] = useState("");
  const [listaMensajes, setListaMensajes] = useState([]);

  const anchor = useRef();
  const inputRef = useRef(null);

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (inputMensaje.trim() ===""){
      alert ("El mensaje no puede estar en blanco");
      return
    }
    const timestamp = new Date().getTime();

    const docuRef = doc(
      firestore,
      `canales/${canalActivo}/mensajes/${timestamp}`
    );



    setDoc(docuRef, {
      foto: usuario.photoURL,
      usuario: usuario.displayName,
      mensaje: inputMensaje,
      id: timestamp,
    });

    setInputMensaje("");
    getListaMensajes();
    anchor.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }

  useEffect(() => {
    const coleccionRef = collection(firestore, `canales/${canalActivo}/mensajes`);
  
    const unsubscribe = onSnapshot(coleccionRef, (snapshot) => {
      const mensajesArr = snapshot.docs.map((mensaje) => mensaje.data());
      setListaMensajes(mensajesArr);
      anchor.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  
    return () => unsubscribe();
  }, [canalActivo]);
  

  return (
    <>
    <div className="chat">
      <EncabezadoChat nombreCanal={canalActivo} />

      <div className="chat__messages" style={{ maxHeight: 'calc(100vh - 120px)', overflowY: 'auto' }}>
        {listaMensajes
          ? listaMensajes.map((mensaje) => {
              return <Mensaje mensajeFirebase={mensaje} />;
            })
          : null}
        <div ref={anchor} style={{ float: 'left', clear: 'both' }}></div>
      </div>

      <div className="chat__input">
        <AddCircle fontSize="large" />
        <form onSubmit={enviarMensaje}>
          <input
            ref={inputRef}
            type="text"
            disabled={canalActivo ? false : true}
            value={inputMensaje}
            onChange={(e) => setInputMensaje(e.target.value)}
            placeholder={`Enviar mensaje a # ${canalActivo || ""}`}
          />
          <button
            disabled={canalActivo ? false : true}
            className="chat__inputButton"
            type="submit"
            
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="chat__inputIcons">
          <Tooltip title="ENVIAR MENSAJE" arrow>
          <Send fontSize="large" onClick={enviarMensaje} />
          </Tooltip>
        </div>
      </div>
    </div>
    </>
  );
  
}

export default ChatScreen;
