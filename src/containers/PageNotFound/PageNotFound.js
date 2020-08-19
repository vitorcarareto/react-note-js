import React from "react";

import NotFound from "../../images/notfound.gif";
import { Header, ButtonLink, Center } from "../../components";

const PageNotFound = () => (
    <Center>
        <Header>Ops!</Header>
        <div>
            <img src={NotFound} alt="Página não encontrada." width="200" />
        </div>
        <p>Página não encontrada.</p>
        <ButtonLink to="/">Voltar para o início</ButtonLink>
    </Center>
);

export default PageNotFound;
