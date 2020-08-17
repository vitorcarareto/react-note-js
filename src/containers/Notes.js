import React from "react";

import NewNote from "../components/NewNote";
import NoteList from "../components/NoteList";
import Error from "../components/Error";

const Notes = ({
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

export default Notes;
