import React, { useContext } from "react";
import { GlobalContext } from "../context/global-state";
import { LaunchPadItem } from "./launch-pads";
import { LaunchItem } from "./launches"

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/core";

export default function FavouriteList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        Your Favourites
      </Button>
      <Drawer
        scrollBehavior={"inside"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favourites</DrawerHeader>

          <DrawerBody overflow>
            <FavouriteLaunchPadListItems />
            <FavouriteLaunchesListItems />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function FavouriteLaunchPadListItems() {
  const { favouriteLaunchPads } = useContext(GlobalContext);
  return (
    <div>
      <h2>Your Launch Pads ({favouriteLaunchPads.length})</h2>
      {favouriteLaunchPads.length > 0 ? (
        favouriteLaunchPads.map((launchPad) => (
          <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
        ))
      ) : (
        <h2>No favourite launch pads yet! Add some</h2>
      )}
    </div>
  );
}

function FavouriteLaunchesListItems() {
  const { favouriteLaunches } = useContext(GlobalContext);
  return (
    <div>
      <h2>Your Launches ({favouriteLaunches.length})</h2>
      {favouriteLaunches.length > 0 ? (
        favouriteLaunches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))
      ) : (
        <h2>No favourite launches yet! Add some</h2>
      )}
    </div>
  );
}
