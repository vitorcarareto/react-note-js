import React from "react";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import { v1 as uuidv1 } from "uuid";

import MenuItem from "./MenuItem";

import "./navigation-drawer.scss";

const NavigationDrawer = ({
    menu,
    isMenuOpen,
    onCloseMenu,
    history,
    location,
}) => (
    <div
        className={classNames("navigation-drawer", {
            "navigation-drawer--open": isMenuOpen,
        })}
    >
        <div className="navigation-drawer__head">
            <button
                className="navigation-drawer__head__button"
                onClick={onCloseMenu}
            >
                <i className="material-icons material-icons-round">close</i>
            </button>
        </div>
        <div className="navigation-drawer__menu">
            {menu.map((item) => (
                <MenuItem
                    key={uuidv1()}
                    isActive={location.pathname === item.path}
                    onClick={() => {
                        onCloseMenu();
                        history.push(item.path);
                    }}
                    icon={item.icon}
                    label={item.label}
                ></MenuItem>
            ))}
        </div>
    </div>
);

export default withRouter(NavigationDrawer);
