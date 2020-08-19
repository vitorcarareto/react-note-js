import React from "react";

import { AppBar, NavigationDrawer } from "../";

import "./page-layout.scss";

const PageLayout = ({
    children,
    isLoading,
    saveHasError,
    onSaveRetry,
    onOpenMenu,
    isMenuOpen,
    onCloseMenu,
}) => {
    return (
        <div>
            <AppBar
                isLoading={isLoading}
                saveHasError={saveHasError}
                onSaveRetry={onSaveRetry}
                onOpenMenu={onOpenMenu}
            />
            <div className="container">{children}</div>
            <NavigationDrawer
                isMenuOpen={isMenuOpen}
                onCloseMenu={onCloseMenu}
            />
        </div>
    );
};

export default PageLayout;
