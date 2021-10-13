const initialState = {
    isLoading: false,
    items: [],
    sortType: "",
};

const launchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_IS_LOADING":
            return { ...state, isLoading: action.payload };
        case "SET_LAUNCHES":
            return { ...state, items: action.payload, isLoading: false, sortType: "increasing" };
        case "SET_SORT_TYPE": {
            return { ...state, sortType: action.payload };
        }
        default:
            return state;
    }
};

export default launchesReducer;
