import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Box,
  IconButton,
  Flex,
  Text,
  Tooltip,
  useColorMode,
} from "@chakra-ui/core";
import { Sun, Moon } from "react-feather";
import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import FavouriteList from "./sidebar-user-favourite-list";
import { GlobalProvider } from "../context/global-state";

export default function App() {
  return (
    <div>
      <GlobalProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="/launches/:launchId" element={<Launch />} />
          <Route path="/launch-pads" element={<LaunchPads />} />
          <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
        </Routes>
      </GlobalProvider>
    </div>
  );
}

function NavBar() {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg={colorMode === "light" ? "gray.800" : "gray.600"}
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
      <Flex align="center">
        <Box mr={6}>
          <FavouriteList />
        </Box>
        <ColorModeToggle />
      </Flex>
    </Flex>
  );
}

function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Tooltip
        label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
        hasArrow
        placement="bottom"
      >
        <IconButton
          onClick={toggleColorMode}
          as={colorMode === "light" ? Moon : Sun}
          variant="ghost"
          verticalAlign="center"
          size="1rem"
        >
          {colorMode === "light" ? "Dark" : "Light"}
        </IconButton>
      </Tooltip>
    </header>
  );
}
