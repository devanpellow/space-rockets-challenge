import React, { useContext } from "react";
import {GlobalContext} from "../context/global-state"
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    useDisclosure
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
          scrollBehavior={'inside'} 
          blockScrollOnMount={false}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Launches and Launch Pads</DrawerHeader>
  
            <DrawerBody overflow>
                <FavouriteListItems/>
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

function FavouriteListItems() {
    const {favourites} = useContext(GlobalContext) 
    return (
      <div>
        {favourites.map(item => (
          <h1>{item.details}</h1>  
        ))}
      </div>
    );
  }

