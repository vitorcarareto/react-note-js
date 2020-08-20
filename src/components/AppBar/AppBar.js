import React from "react";

import SettingsContext from "../../containers/Settings/SettingsContext";

import "./app-bar.scss";

const AppBar = ({ isLoading, saveHasError, onSaveRetry, onOpenMenu }) => {
    return (
        <SettingsContext.Consumer>
            {({ theme }) => (
                <div
                    className="app-bar"
                    style={{ backgroundColor: theme.colorPrimary }}
                >
                    <div className="app-bar__container">
                        <button
                            className="app-bar__action"
                            onClick={onOpenMenu}
                        >
                            <i className="material-icons material-icons-round">
                                menu
                            </i>
                        </button>
                        <span className="app-bar__brand">Note.js</span>
                        {isLoading && (
                            <button className="app-bar__action app-bar__action--rotation">
                                <i className="material-icons material-icons-round">
                                    refresh
                                </i>
                            </button>
                        )}
                        {saveHasError && (
                            <button
                                className="app-bar__action app-bar__action--danger"
                                onClick={onSaveRetry}
                            >
                                <i className="material-icons material-icons-round">
                                    cloud_off
                                </i>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </SettingsContext.Consumer>
    );
};

export default AppBar;
