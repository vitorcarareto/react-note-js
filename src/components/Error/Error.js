import React from "react";

import { Header, Button, Center } from "../";

const Error = ({ onRetry }) => {
    return (
        <Center>
            <Header>Ops!</Header>
            <p>Ocorreu um erro inesperado no carregamento.</p>
            <Button onClick={onRetry}>Tentar novamente</Button>
        </Center>
    );
};

export default Error;
