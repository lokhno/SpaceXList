import launchesReducer from "./reduser";
import { launchesActionCreators } from "./action-creators";

it("launches should be added", () => {
    const initialState = {
        isLoading: true,
        items: [],
        sortType: "",
    };
    const action = launchesActionCreators.setLaunches([{ id: 1 }, { id: 2 }]);
    const newState = launchesReducer(initialState, action);
    expect(newState.items.length).toBe(2)
});

it("isLoading should be changed", () => {
    const initialState = {
        isLoading: false,
        items: [],
        sortType: "",
    };
    const action = launchesActionCreators.setIsLoading(true);
    const newState = launchesReducer(initialState, action);
    expect(newState.isLoading).toBe(true)
});