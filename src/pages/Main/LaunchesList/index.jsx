import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { launchesSort } from "../../../utils/launches";
import { launchesActionCreators } from "../../../store/reducers/launches/action-creators";
import List from "../../../components/List";
import ListItem from "../../../components/ListItem";

function LaunchesList() {
    const dispatch = useDispatch();
    const sortType = useSelector((state) => state.launches.sortType);
    const launches = useSelector((state) => launchesSort(state.launches.items, sortType));
    const isLoading = useSelector((state) => state.launches.isLoading);

    useEffect(async () => {
        dispatch(launchesActionCreators.fetchLaunches());
    }, []);
    return (
        <List isLoading={isLoading}>
            {launches.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </List>
    );
}

export default LaunchesList;
