import React, { useState } from "react";
import { Star } from "react-feather";
import { IconButton } from "@chakra-ui/core";

export default function Favourite({item}) {
    function toggelFavourtie(event) {
        event.preventDefault();
        console.log('Fav clicked.', item);
        if (localStorage.getItem(item.flight_number) === null) {
            localStorage.setItem(item.flight_number, JSON.stringify(item))
        } else {
            localStorage.removeItem(item.flight_number)
        }
    } 
    return (
        <div>
            <IconButton 
            onClick={toggelFavourtie}
            variant="ghost"
            variantColor="yellow"
            as={Star} width="3em" />
        </div>
    );
}



  
