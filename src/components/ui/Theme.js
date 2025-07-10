import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B8";
const arcOrange = "#FFBA60";

const rightAlignedStyle = {
  marginLeft: "auto",
  marginRight: "25px",
};

export default createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          zIndex: theme.zIndex.modal + 1,
        }),
      },
    },

    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ".route-content": {
          marginTop: "5em",
          [theme.breakpoints.down("md")]: {
            marginTop: "3.5em",
          },
          [theme.breakpoints.down("sm")]: {
            marginTop: "2.5em",
          },
        },
      }),
    },

    /*MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: `${arcBlue}`,
          borderRadius: "0px",
          boxShadow: "none",
          marginBottom: "3em",
          width: "270px",
        },
      },
    },*/
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: `${arcBlue}`,
          color: "white",
          marginTop: "2px",
          borderRadius: "0px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          opacity: 0.7,
          "&:hover": {
            opacity: 1,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          ...rightAlignedStyle,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: "Raleway",
          textTransform: "none",
          color: "#fff",
          fontWeight: 700,
          fontSize: "1rem",
          marginLeft: "25px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: (themeParam) => {
          const theme = themeParam.theme || themeParam;
          return {
            backgroundColor: `${arcBlue}`,
            borderRadius: "0px",
            boxShadow: "none",
            marginBottom: "3em",
            width: "270px",
            "&.MuiDrawer-paper": {
              /*[theme.breakpoints.down("md")]: {
                top: "119px",
                //height: "auto",
              },*/
              [theme.breakpoints.down("sm")]: {
                top: "94px",
                width: "200px",
                fontSize: "0.8em",
              },
            },
          };
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const className = ownerState.className || "";

          return {
            ...(className.includes("drawerItem") && {
              //...rightAlignedStyle,
              color: "white",
            }),

            ...(className.includes("drawerItem") &&
              className.includes("free-estimate") && {
                backgroundColor: `${arcOrange}`,
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: theme.palette.secondary.dark,
                },
              }),
          };
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: ({ theme }) => {
          return {};
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: (themeParam) => {
          const theme = themeParam.theme || themeParam;
          return {
            borderRadius: "50px",
            marginLeft: "50px",
            marginRight: "25px",
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            height: "45px",
            color: "white",
            [theme.breakpoints.down("lg")]: {
              height: "30px",
              width: "150px",
              fontSize: ".7em",
            },
            [theme.breakpoints.down("md")]: {
              height: "50px",
              width: "150px",
              fontSize: "12px",
            },

            "&.logoButton": {
              all: "unset",
            },
            "&.logoButton img": {
              height: "8em",
              [theme.breakpoints.down("md")]: {
                height: "7em",
              },
              [theme.breakpoints.down("sm")]: {
                height: "5.5em",
              },
            },
          };
        },
      },
    },
  },
});
