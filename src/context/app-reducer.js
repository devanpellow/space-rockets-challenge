export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_FAVOURITE_LAUNCH_PADS":
      return {
        ...state,
        favouriteLaunchPads: [action.payload, ...state.favouriteLaunchPads],
      };
    case "REMOVE_ITEM_FROM_FAVOURITE_LAUNCH_PADS":
      return {
        ...state,
        favouriteLaunchPads: state.favouriteLaunchPads.filter(
          (item) => item.site_id !== action.payload
        ),
      };
    case "ADD_ITEM_TO_FAVOURITE_LAUNCHES":
      return {
        ...state,
        favouriteLaunches: [action.payload, ...state.favouriteLaunches],
      };
    case "REMOVE_ITEM_FROM_FAVOURITE_LAUNCHES":
      return {
        ...state,
        favouriteLaunches: state.favouriteLaunches.filter(
          (item) => item.flight_number !== action.payload
        ),
      };
    default:
      return state;
  }
};
