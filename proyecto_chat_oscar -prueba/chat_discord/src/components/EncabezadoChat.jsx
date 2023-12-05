import React from "react";

const EncabezadoChat = ({nombreCanal}) => {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash"> #</span>
          {nombreCanal}
        </h3>
      </div>

    </div>
  );
}

export default EncabezadoChat;
