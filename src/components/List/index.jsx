import React from "react";

import "./List.scss";

function List({ children, isLoading }) {
    return (
        <>
            {!isLoading ? (
                <ul className="launches__list">{children}</ul>
            ) : (
                <div>Загрузка...</div>
            )}
        </>
    );
}

export default List;
