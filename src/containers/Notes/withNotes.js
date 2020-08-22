import React, { createContext } from "react";

import NotesContext from "./NotesContext";

const withNotes = (Component) => (props) => (
    <NotesContext.Consumer>
        {(createContext) => <Component {...props} {...context} />}
    </NotesContext.Consumer>
);

export default withNotes;
