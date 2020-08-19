import React from "react";

import "./error.scss";

const Error = ({ onRetry }) => {
    return (
        <div className="error">
            <h1>Ops!</h1>
            <p>Ocorreu um erro inesperado no carregamento.</p>
            <button className="error__button" onClick={onRetry}>
                Tentar novamente
            </button>
        </div>
    );
};

export default Error;
