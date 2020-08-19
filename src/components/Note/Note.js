import React from "react";
import classNames from "classnames";

import "./note.scss";

class Note extends React.Component {
    state = {
        isEditing: false,
    };

    handleEdit = () => {
        this.setState({ isEditing: true });
    };
    handleCancel = () => {
        this.setState({ isEditing: false });
    };
    handleSave = () => {
        this.props.onEdit(this.props.note.id, this.input.value);
        this.setState({ isEditing: false });
    };

    render() {
        const { note, onDelete, onMove, index, total } = this.props;
        const { isEditing } = this.state;

        return (
            <div className="note">
                {isEditing ? (
                    <input
                        type="text"
                        className="note__input"
                        defaultValue={note.text}
                        onKeyPress={(event) => {
                            console.log(event.key);
                            console.log(event.charCode);
                            if (event.key === "Escape") {
                                this.handleCancel();
                            } else if (event.key === "Enter") {
                                this.handleSave();
                            }
                        }}
                        ref={(c) => {
                            this.input = c;
                        }}
                    />
                ) : (
                    <span className="note__text">{note.text}</span>
                )}

                {isEditing && (
                    <React.Fragment>
                        <button
                            className="note__button note__button--red"
                            onClick={this.handleCancel}
                        >
                            <i className="material-icons material-icons-round">
                                close
                            </i>
                        </button>

                        <button
                            className="note__button note__button--green"
                            onClick={this.handleSave}
                        >
                            <i className="material-icons material-icons-round">
                                check
                            </i>
                        </button>
                    </React.Fragment>
                )}

                <button
                    disabled={isEditing}
                    className="note__button"
                    onClick={() => {
                        this.handleEdit(note.id);
                    }}
                >
                    <i className="material-icons material-icons-round">edit</i>
                </button>

                <button
                    disabled={isEditing}
                    className="note__button"
                    onClick={() => {
                        onDelete(note.id);
                    }}
                >
                    <i className="material-icons material-icons-round">
                        delete
                    </i>
                </button>

                <button
                    className={classNames("note__button", {
                        "note__button--hidden": index === 0,
                    })}
                    onClick={() => {
                        onMove("up", index);
                    }}
                >
                    <i className="material-icons material-icons-round">
                        keyboard_arrow_up
                    </i>
                </button>

                <button
                    className={classNames("note__button", {
                        "note__button--hidden": index === total - 1,
                    })}
                    onClick={() => {
                        onMove("down", index);
                    }}
                >
                    <i className="material-icons material-icons-round">
                        keyboard_arrow_down
                    </i>
                </button>
            </div>
        );
    }
}

export default Note;
