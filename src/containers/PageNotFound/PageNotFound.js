import React from "react";
import { Link } from "react-router-dom";

import { Header, ButtonLink, Center } from "../../components";

const PageNotFound = () => (
    <Center>
        <Header>Ops!</Header>
        <p>Página não encontrada.</p>
        <ButtonLink to="/">Voltar para o início</ButtonLink>
    </Center>
);

export default PageNotFound;
