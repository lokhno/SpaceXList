import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { launchesActionCreators } from "../../store/reducers/launches/action-creators";

import './Filter.scss'

function Filter() {
    const dispatch = useDispatch();
    const sortType = useSelector((state) => state.launches.sortType);
    const handleSort = () => {
        dispatch(launchesActionCreators.setSortType(sortType === "increasing" ? "decreasing" : "increasing"));
    };
    return (
        <div className="launches__filter" onClick={handleSort}>
            {sortType === "decreasing" ? <i className="fas fa-chevron-up btn-icon"></i> : <i className="fas fa-chevron-down btn-icon "></i>}
        </div>
    );
}

export default Filter;
