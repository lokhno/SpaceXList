import React from "react";

import LaunchesList from "./LaunchesList";
import Filter from "../../components/Filter";
import "./Main.scss";

function Main() {
    return (
        <>
            <div className="launches">
                <div className="launches__header">
                    <h1>List of launches </h1>
                    <Filter />
                </div>
                <LaunchesList />
            </div>
        </>
    );
}

export default Main;
