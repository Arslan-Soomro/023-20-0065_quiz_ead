import {
  extendTheme,
  withDefaultColorScheme,
  baseTheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.green,
    },
    fonts: {
      heading: "DM Sans, sans-serif",
      body: "DM Sans, sans-serif",
    },
    components: {
      Button: {
        baseStyle: {
          // rounded: "full",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default customTheme;
