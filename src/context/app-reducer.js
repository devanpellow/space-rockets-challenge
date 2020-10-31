export default (state, action) => {
    switch(action.type) {
        case "ADD_ITEM_TO_FAVOURITES":
            return {
                ...state,
                favourites: [action.payload, ...state.favourites],
            }
        default:
            return state;
    }
};