import * as React from "react";

import { ThemeProvider } from "@mui/material/styles";

import { createTheme, PaletteMode } from "@mui/material";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // palette values for light mode
        primary: "hsl(200, 15%, 8%)",
        background: {
          default: "hsl(0, 0%, 98%)",
          secondary: "hsl(0, 0%, 98%)",
        },
        text: {
          primary: 'hsl(200, 15%, 8%)',
          secondary: 'hsl(200, 15%, 8%)'
        },
      }
      : {
          // palette values for dark mode
          primary: "hsl(209, 23%, 22%)",
          background: {
            default: "hsl(207, 26%, 17%)",
            secondary: "hsl(207, 26%, 17%)",
          },
          text: {
            primary: "#fff",
            secondary: "grey",
          },
        }),
  },
});

export default function ToggleColorMode({ children }: any) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  // const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
