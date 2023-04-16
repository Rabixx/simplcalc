import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: "true",
    disableTransitionOnChange: false,
  },
  styles: {
    global: {},
  },
};

export default extendTheme(theme);
