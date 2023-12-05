import React from "react";
import { Button } from "@mui/base";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import firebaseApp from "../firebase/credenciales";

const auth = getAuth(firebaseApp);
const gProvider = new GoogleAuthProvider();

const Login = () => {
  const logInGoogle = () => {
    signInWithRedirect(auth, gProvider);
  };

return (
    
    <div
      className="flex items-center justify-center h-screen bg-black"
      style={{ backgroundColor: "black" }}
      
    >
      <div className="login box-border p-4 border-8" style={{ maxWidth: "400px" }}>
        <div className="login_logo rounded-full overflow-hidden w-30 h-10 justify-center mt-4">
          <img
            className="object-cover w-full h-full"
            src="https://xsgames.co/randomusers/avatar.php?g=male"
            alt=""
          />
        </div>
        <div className="login_logo rounded-full overflow-hidden w-30 h-10 justify-center mt-4">
          <img
            className="object-cover w-full h-full"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt=""
          />
        </div>
        
        <strong>
        <Button
            className="Loginppal"
            style={{ fontSize: "medium", padding: "10px 85px" }} // Ajusta el tamaño del texto y el padding
            onClick={logInGoogle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#4CAF50";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.boxShadow = "";
            }}
          >
            Acceder con Google
        </Button>
        </strong>

        <div className="chat__input" ><h3 className="">Proyecto final | Curso Talento TECH  </h3>
        <strong>Oscar Noel Angulo Molina</strong>
        </div>
      </div>
    </div>
  );
};

export default Login;
