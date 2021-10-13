import React from "react";
import moment from "moment";

import "./ListItem.scss";

function ListItem({ item }) {
    return (
        item.success && (
            <li className="launches__item item">
                <div className="item__data">
                    <h2>Названиe миссии: {item.name}</h2>
                    <div className="item__date">
                        <strong>Дата запуска:</strong> {moment(new Date(item.date_utc)).format("DD.MM.YYYY, h:mm:ss")}
                    </div>
                    <div className="item__info">
                        <strong>Информация:</strong> {item.details}
                    </div>
                </div>
                {item.links.patch.small ? (
                    <div className="item__logo">
                        <img src={item?.links?.patch?.small} alt="" />
                    </div>
                ) : (
                    <div className="item__logo">Нет лого :(</div>
                )}
            </li>
        )
    );
}

export default ListItem;
