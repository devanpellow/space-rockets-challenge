import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './app-reducer';
const initalState = {
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [],
};

export const GlobalContext = createContext(initalState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(state.favourites))
    }, [state])
    
    const addItemToFavourites = (item) => {
        dispatch({type: "ADD_ITEM_TO_FAVOURITES", payload: item})
    }

    return (
        <GlobalContext.Provider value={{favourites: state.favourites, addItemToFavourites}}>
            { props.children }
        </GlobalContext.Provider>
    );
};