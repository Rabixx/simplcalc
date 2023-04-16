// Chakra UI and react-icons imports
import { IconButton } from "@chakra-ui/react";
import { RiGithubFill } from "react-icons/ri";
// React etc
import React from "react";

function openGithub() {
  window.open("https://github.com/Rabixx/simplcalc", "_blank");
}

const GithubButton = () => {
  return (
    <IconButton
      rounded="full"
      position="absolute"
      right="75px"
      top="10px"
      icon={<RiGithubFill />}
      onClick={openGithub}
    />
  );
};

export default GithubButton;
