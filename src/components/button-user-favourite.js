import React, { useContext } from "react";
import { GlobalContext } from "../context/global-state"
import { Star } from "react-feather";
import { IconButton } from "@chakra-ui/core";

export default function FavouriteButton({id, item}) {
   
    const {
        addItemToFavourites, favourites
    } = useContext(GlobalContext);

    let storedItem = favourites.find(i => (i.flight_number || i.site_id) === id);

    const favouriteFilled = storedItem ? true : false;

    const iconFilled = {fill: 'yellow'}
    const iconOutline = {fill: 'none'}

    return (
        <div>
            <IconButton 
                onClick={()=>addItemToFavourites(item)}
                variant="ghost"
                variantColor="yellow"
                as={Star} 
                size="1em"
                style={ favouriteFilled ? iconFilled : iconOutline}
            />
        </div>
    );
}
