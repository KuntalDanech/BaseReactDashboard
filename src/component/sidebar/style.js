import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const SidebarStyle = makeStyles({
  SidebarWrapper: {
    "&.MuiDrawer-modal" : {
      "@media (min-width:992px)": {
        display: "none",
      },
    },
    "& header": {
      "@media (min-width:992px)": {
        display: "none",
      },
    },
    "& .desktop-drawer": {
      "@media (max-width:991px)": {
        display: "none",
      },
    },
    "& .mobile-drawer": {
      "@media (min-width:992px)": {
        display: "none",
      },
    },
    "& .MuiDrawer-paper": {
      borderRight: 0,
      backgroundColor: colors.primary,
      left: "25px",
      paddingTop: "58px",
      paddingBottom: "66px",
      width: "235px",
      "@media (max-height: 850px)": {
        paddingTop: "50px",
        paddingBottom: "50px",
      },
      "@media (max-width:991px)": {
        left: "0",
        paddingLeft: "16px",
        paddingTop: "92px",
        width: "100%",
        paddingBottom:"0",
      },
    },
    "& .sidebar-wrapper": {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      "@media (max-width:991px)": { 
        overflow:"auto",
      },
    },
    "& .logo-block": {
      "& a": {
        display: "inline-block",
        "@media(max-width:991px)" : {
          width:"86px"
        }
      },
    },
    "& .main-nav": {
      paddingTop: "85px",
      "@media (max-height: 850px)": {
        paddingTop: "50px",
      },
      "@media (max-height: 700px)": {
        paddingTop: "40px",
      },
      "@media (max-width: 991px)": {
        paddingTop: "0px",
      },
    },
    "& .top-sidebar": {
      marginBottom: "15px",
      "@media (max-width: 991px)": {
        marginBottom: "31px",
      },
      "& li": {
        "& + li": {
          marginTop: "17px",
        },
        "& a[class^=disabled]" : {
          color: colors.white,
          cursor : "pointer",
          fontFamily: "ClarimoBold",
          fontSize: "16px",
          letterSpacing: "1px",
          lineHeight: "1.2",
          padding: "5px 5px 5px 17px",
          position: "relative",
          display: "inline-block",
          minHeight: "32px",
          opacity: "0.8"
        },
        "& a:not(.disabled)": {
          cursor : "pointer",
          color: colors.white,
          fontFamily: "ClarimoBold",
          fontSize: "16px",
          letterSpacing: "1px",
          lineHeight: "1.2",
          padding: "5px 5px 5px 17px",
          position: "relative",
          display: "inline-block",
          minHeight: "32px",
          opacity: "0.8",
          "&:before": {
            position: "absolute",
            content: " '' ",
            width: "6px",
            height: "0",
            borderRadius: "7px",
            backgroundColor: colors.white,
            left: "0",
            top: "50%",
            transition: "all 0.3s",
          },
          "&:hover,&.active": {
            opacity: "1",
            "&:before": {
              top: "0",
              height: "100%",
            },
          },
        },
      },
    },
    "& .bottom-nav": {
      marginTop: "auto",
      "@media(max-width:991px)" : {
        paddingBottom:"50px",
      },
      "& li": {
        "& + li": {
          marginTop: "27px",
        },
        "& a": {
          color: colors.white,
          fontFamily: "ClarimoRegular",
          fontSize: "16px",
          letterSpacing: "1px",
          opacity: "0.8",
          lineHeight: "1.2",
          paddingLeft: "17px",
          display: "inline-block",
          transition: "all 0.3s",
          "&:hover": {
            opacity: "1",
          },
        },
      },
    },
    "& .site-header": {
      boxShadow: "none",
      zIndex: "1400",
      position:"absolute",
      backgroundColor: colors.primary,
      "& .MuiToolbar-regular": {
        minHeight: "inherit",
        padding: "16px 17px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
        "& .menu-block": {
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          "& em": {
            fontSize: "16px",
            fontWeight: "700",
            fontFamily: "'Archivo', sans-serif",
            textTransform: "uppercase",
            fontStyle: "normal",
            cursor: "pointer",
          },
          "& .hamburger-menu": {
            width: "21px",
            height: "20px",
            zIndex: "100",
            marginLeft: "20px",
            paddingTop:"2px",
            "&.open-menu ": {
              "& span": {
                "&:first-child ": {
                  transform: "translateY(6px) rotate(45deg)",
                },
                "&:last-child": {
                  transform: "translateY(0px) rotate(-45deg)",
                },
                "&:nth-child(2)": {
                  opacity: "0",
                },
              },
            },
            "& span": {
              height: "3px",
              backgroundColor: colors.white,
              width: "21px",
              display: "block",
              transition: "all 0.5s",
              "&:nth-child(2)": {
                transform: "translateY(4px)",
              },
              "&:last-child": {
                transform: "translateY(8px)",
              },
            },
          },
        },
      },
    },
      "& #hellotest" : {
        color : "red",
        fontWeight : "bold",
        textTransform:"uppercase"
      }
  },
});

export { SidebarStyle };
