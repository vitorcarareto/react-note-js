import React from "react";
import { v1 as uuidv1 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PageLayout } from "../../components";
import NoteService from "../../services/NoteService";
import Routes, { menu } from "../Routes";
import SettingsProvider from "../Settings/SettingsProvider";

class App extends React.Component {
    state = {
        isMenuOpen: false,
    };

    handleOpenMenu = () => {
        this.setState({ isMenuOpen: true });
    };

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false });
    };

    render() {
        const { isMenuOpen } = this.state;

        return (
            <Router>
                <SettingsProvider>
                    <PageLayout
                        isLoading={isLoading}
                        saveHasError={saveHasError}
                        onSaveRetry={() => {
                            this.handleSave(notes);
                        }}
                        onOpenMenu={this.handleOpenMenu}
                        isMenuOpen={isMenuOpen}
                        onCloseMenu={this.handleCloseMenu}
                        menu={menu}
                    >
                        <Routes
                            notes={notes}
                            reloadHasError={reloadHasError}
                            onRetry={this.handleReload}
                            onAddNote={this.handleAddNote}
                            onMove={this.handleMove}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />
                    </PageLayout>
                </SettingsProvider>
            </Router>
        );
    }
}

export default App;
