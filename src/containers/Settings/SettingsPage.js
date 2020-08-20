import React from "react";

import { Header } from "../../components";
import SettingsContext from "./SettingsContext";

import "./settings.scss";

const themes = [
    { key: "light", label: "Light" },
    { key: "dark", label: "Dark", colorPrimary: "#282a36" },
];

const SettingsPage = ({ toggleTheme }) => (
    <div>
        <Header centered>Temas</Header>
        <SettingsContext.Consumer>
            {({ theme: selectedTheme, toggleTheme }) => (
                <div className="themes">
                    {themes.map((theme) => (
                        <button
                            key={theme.key}
                            className="themes__item"
                            style={{ backgroundColor: theme.colorPrimary }}
                            onClick={() => {
                                toggleTheme(theme);
                            }}
                        >
                            <p>
                                {theme.label}
                                {theme.key === selectedTheme.key && (
                                    <i className="material-icons material-icons-round">
                                        check
                                    </i>
                                )}
                            </p>
                        </button>
                    ))}
                </div>
            )}
        </SettingsContext.Consumer>
    </div>
);

export default SettingsPage;
