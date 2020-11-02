import React, { useContext } from "react";
import { GlobalContext } from "../context/global-state";
import { LaunchPadItem } from "./launch-pads";
import { LaunchItem } from "./launches";
import { Star } from "react-feather";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/core";

export default function FavouriteList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton ref={btnRef} as={Star} variant="link" onClick={onOpen} />
      <Drawer
        scrollBehavior={"inside"}
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
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
    <>
      <Text my={2} fontWeight="600">
        Your Launch Pads ({favouriteLaunchPads.length})
      </Text>
      <SimpleGrid spacing={2}>
        {favouriteLaunchPads.length > 0 ? (
          favouriteLaunchPads.map((launchPad) => (
            <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
          ))
        ) : (
          <Text fontSize="1em">No favourite launch pads yet! Add some</Text>
        )}
      </SimpleGrid>
    </>
  );
}

function FavouriteLaunchesListItems() {
  const { favouriteLaunches } = useContext(GlobalContext);
  return (
    <>
      <Text my={2} fontWeight="600">
        Your Launches ({favouriteLaunches.length})
      </Text>
      <SimpleGrid spacing={2}>
        {favouriteLaunches.length > 0 ? (
          favouriteLaunches.map((launch) => (
            <LaunchItem key={launch.flight_number} launch={launch} />
          ))
        ) : (
          <Text fontSize="1em">No favourite launches yet! Add some</Text>
        )}
      </SimpleGrid>
    </>
  );
}
