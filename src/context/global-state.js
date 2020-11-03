import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./app-reducer";
const initalState = {
  favouriteLaunchPads: localStorage.getItem("favouriteLaunchPads")
    ? JSON.parse(localStorage.getItem("favouriteLaunchPads"))
    : [],
  favouriteLaunches: localStorage.getItem("favouriteLaunches")
    ? JSON.parse(localStorage.getItem("favouriteLaunches"))
    : [],
};

export const GlobalContext = createContext(initalState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  useEffect(() => {
    localStorage.setItem("favouriteLaunchPads", JSON.stringify(state.favouriteLaunchPads));
    localStorage.setItem(
      "favouriteLaunches",
      JSON.stringify(state.favouriteLaunches)
    );
  }, [state]);

  const addItemToFavouriteLaunchPads = (item) => {
    dispatch({ type: "ADD_ITEM_TO_FAVOURITE_LAUNCH_PADS", payload: item });
  };

  const removeItemFromFavouriteLaunchPads = (item) => {
    dispatch({ type: "REMOVE_ITEM_FROM_FAVOURITE_LAUNCH_PADS", payload: item.site_id });
  };

  const addItemToFavouriteLaunches = (item) => {
    dispatch({ type: "ADD_ITEM_TO_FAVOURITE_LAUNCHES", payload: item });
  };

  const removeItemFromFavouriteLaunches = (item) => {
    dispatch({
      type: "REMOVE_ITEM_FROM_FAVOURITE_LAUNCHES",
      payload: item.flight_number,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        favouriteLaunchPads: state.favouriteLaunchPads,
        favouriteLaunches: state.favouriteLaunches,
        addItemToFavouriteLaunchPads,
        removeItemFromFavouriteLaunchPads,
        addItemToFavouriteLaunches,
        removeItemFromFavouriteLaunches,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
