import { launchesApi } from "../../../utils/api";
import { launchesSort } from "../../../utils/launches";

export const launchesActionCreators = {
    setLaunches: (items) => ({
        type: "SET_LAUNCHES",
        payload: items,
    }),
    setIsLoading: (payload) => ({
        type: "SET_IS_LOADING",
        payload,
    }),
    setSortType: (type) => ({
        type: "SET_SORT_TYPE",
        payload: type,
    }),
    fetchLaunches: () => async (dispatch) => {
        try {
            dispatch(launchesActionCreators.setIsLoading(true));
            const launches = await launchesApi.getLaunches();
            dispatch(
                launchesActionCreators.setLaunches(
                    launchesSort(
                        launches.filter((item) => {
                            return new Date(item.date_utc) >= new Date("2015-01-01") && new Date(item.date_utc) < new Date("2020-01-01");
                        }),
                        "increasing"
                    )
                )
            );
            dispatch(launchesActionCreators.setIsLoading(false));
        } catch (err) {
            console.log(err);
            dispatch(launchesActionCreators.setIsLoading(false));
        }
    },
};
