import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontWeight: 500,
        
        color: "gray.900",
      },
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    gray: {
      50: "#F3F4F6",
      100: "#E7EAEC",
      200: "#C3CAD0",
      300: "#9FAAB4",
      400: "#586A7B",
      500: "#102A43",
      600: "#0E263C",
      700: "#0A1928",
      800: "#07131E",
      900: "#030404",
    },
  },
});
