import React from "react";
import { Route, Switch } from "react-router-dom";

import AboutPage from "./About/AboutPage";
import withNotes from "./Notes/NotesPage";
import withSettings from "./Settings/SettingsPage";
import PageNotFound from "./PageNotFound/PageNotFound";

export const menu = [
    { icon: "notes", label: "Listas de Notas (em breve)", path: "/list" },
    { icon: "sticky_note_2", label: "Notas", path: "/" },
    { icon: "settings", label: "Configurações", path: "/settings" },
    { icon: "info", label: "Sobre", path: "/about" },
];

const Routes = () => (
    <Switch>
        <Route path="/" exact component={withNotes} />
        <Route path="/settings" component={withSettings} />
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
    </Switch>
);

export default Routes;
