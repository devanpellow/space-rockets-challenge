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
    event.preventDefault();
    type === "launches"
      ? toggleFavouriteLaunches(item)
      : toggleFavouriteLaunchPads(item);
  }

  function toggleFavouriteLaunches(item) {
    storedItem
      ? removeItemFromFavouriteLaunches(item)
      : addItemToFavouriteLaunches(item);
  }

  function toggleFavouriteLaunchPads(item) {
    storedItem
      ? removeItemFromFavouriteLaunchPads(item)
      : addItemToFavouriteLaunchPads(item);
  }

  let storedItem =
    favouriteLaunchPads.find((i) => i.site_id === id) ||
    favouriteLaunches.find((i) => i.flight_number === id);

  const favouriteFilled = storedItem ? true : false;

  return (
    <div>
      <IconButton
        onClick={(event) => toggleFavourite(event, type, item)}
        variant="ghost"
        stroke="#ECC94B"
        as={Star}
        size="1em"
        style={favouriteFilled ? { fill: "#ECC94B" } : { fill: "none" }}
      />
    </div>
  );
}
