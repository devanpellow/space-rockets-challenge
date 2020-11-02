import React, { useContext } from "react";
import { GlobalContext } from "../context/global-state";
import { Star } from "react-feather";
import { IconButton } from "@chakra-ui/core";

export default function FavouriteButton({ type, id, item }) {
  const {
    addItemToFavouriteLaunchPads,
    removeItemFromFavouriteLaunchPads,
    favouriteLaunchPads,
    addItemToFavouriteLaunches,
    removeItemFromFavouriteLaunches,
    favouriteLaunches,
  } = useContext(GlobalContext);

  function toggleFavourite(event, type, item) {
      event.preventDefault()
    if (type === "launches") {
      toggleFavouriteLaunches(item);
    } else {
      toggleFavouriteLaunchPads(item);
    }
  }

  function toggleFavouriteLaunches(item) {
    if (storedItem) {
      return removeItemFromFavouriteLaunches(item);
    } else {
      addItemToFavouriteLaunches(item);
    }
  }

  function toggleFavouriteLaunchPads(item) {
    if (storedItem) {
      return removeItemFromFavouriteLaunchPads(item);
    } else {
      addItemToFavouriteLaunchPads(item);
    }
  }

  let storedItem =
    favouriteLaunchPads.find((i) => i.site_id === id) ||
    favouriteLaunches.find((i) => i.flight_number === id);

  const favouriteFilled = storedItem ? true : false;

  const iconFilled = { fill: "#ECC94B" };
  const iconOutline = { fill: "none" };

  return (
    <div>
      <IconButton
        onClick={(event) => toggleFavourite(event, type, item)}
        variant="ghost"
        stroke="#ECC94B"
        as={Star}
        size="1em"
        style={favouriteFilled ? iconFilled : iconOutline}
      />
    </div>
  );
}
