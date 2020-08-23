import React from "react";

import { Header } from "../../components";
import withSettings from "./withSettings";

import "./settings.scss";

const themes = [
    { key: "light", label: "Light" },
    { key: "dark", label: "Dark", navBar: { backgroundColor: "#282a36" } },
    {
        key: "classic",
        label: "Classic",
        navBar: { backgroundColor: "#795548" },
    },
    {
        key: "white",
        label: "White",
        navBar: { backgroundColor: "#fff", color: "#000" },
    },
];

const SettingsPage = ({ selectedTheme: selectedTheme, toggleTheme }) => (
    <div>
        <Header>Temas</Header>
        <div className="themes">
            {themes.map((theme) => (
                <button
                    key={theme.key}
                    className="themes__item"
                    style={theme.navBar}
                    onClick={() => {
                        toggleTheme(theme);
                    }}
                >
                    <p>
                        {theme.label}
                        {theme.key === theme.key && (
                            <i className="material-icons material-icons-round">
                                check
                            </i>
                        )}
                    </p>
                </button>
            ))}
        </div>
    </div>
);

export default withSettings(SettingsPage);
