import React from "react";

import { NewNote, NoteList, Error } from "../../components";
import withNotes from "./withNotes";

const NotesPage = ({
    notes,
    reloadHasError,
    onRetry,
    onAddNote,
    onMove,
    onDelete,
    onEdit,
}) => {
    if (reloadHasError) {
        return <Error onRetry={onRetry} />;
    } else {
        return (
            <React.Fragment>
                <NewNote onAddNote={onAddNote} />
                <NoteList
                    notes={notes}
                    onMove={onMove}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            </React.Fragment>
        );
    }
};

export default withNotes(NotesPage);
