import React from "react";
import { Star } from "react-feather";
import { IconButton } from "@chakra-ui/core";

export default function Favourite({id, item}) {
    function toggelFavourtie(event) {
        event.preventDefault();
        if (localStorage.getItem(id) === null) {
            localStorage.setItem(id, JSON.stringify(item))
        } else {
            localStorage.removeItem(id)
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
