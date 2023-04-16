// Chakra UI and react-icons imports
import { useColorMode, IconButton } from "@chakra-ui/react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
// React etc
import React from "react";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={() => {
        toggleColorMode();
      }}
      rounded="full"
      icon={colorMode === "dark" ? <RiSunFill /> : <RiMoonFill />}
      position="absolute"
      right="10px"
      top="10px"
    />
  );
};

export default ToggleColorMode;
