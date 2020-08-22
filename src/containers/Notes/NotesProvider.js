import React, { Component } from "react";

class NotesProvider extends Component {
    state = {
        notes: [],
        isLoading: false,
        reloadHasError: false,
        saveHasError: false,
    };

    componentDidCatch() {
        this.setState({ reloadHasError: true });
    }

    componentDidMount() {
        this.handleReload();
    }

    handleAddNote = (text) => {
        console.log("handleAddNote");
        this.setState((prevState) => {
            const notes = prevState.notes.concat({ id: uuidv1(), text });

            this.handleSave(notes);

            return { notes };
        });
    };

    handleMove = (direction, index) => {
        console.log("handleMove");
        this.setState((prevState) => {
            const newNotes = prevState.notes.slice();
            const removedNote = newNotes.splice(index, 1)[0];

            if (direction === "up") {
                newNotes.splice(index - 1, 0, removedNote);
            } else {
                newNotes.splice(index + 1, 0, removedNote);
            }

            this.handleSave(newNotes);

            return {
                notes: newNotes,
            };
        });
    };

    handleDelete = (id) => {
        console.log("handleDelete");
        this.setState((prevState) => {
            const newNotes = prevState.notes.slice();
            const index = newNotes.findIndex((note) => note.id === id);
            newNotes.splice(index, 1);

            this.handleSave(newNotes);

            return {
                notes: newNotes,
            };
        });
    };

    handleEdit = (id, text) => {
        this.setState((prevState) => {
            const newNotes = prevState.notes.slice();
            const index = newNotes.findIndex((note) => note.id === id);
            newNotes[index].text = text;

            this.handleSave(newNotes);

            return {
                notes: newNotes,
            };
        });
    };

    handleReload = () => {
        console.log("handleReload");
        this.setState({ isLoading: true, reloadHasError: false });
        NoteService.load()
            .then((notes) => {
                this.setState({ notes: notes, isLoading: false });
            })
            .catch(() => {
                this.setState({ isLoading: false, reloadHasError: true });
            });
    };

    handleSave = (notes) => {
        console.log("handleSave");
        this.setState({ isLoading: true, saveHasError: false });
        NoteService.save(notes)
            .then(() => {
                this.setState({ isLoading: false });
            })
            .catch(() => {
                this.setState({ isLoading: false, saveHasError: true });
            });
    };

    render() {
        return (
        );
    }
}

export default NotesProvider;
