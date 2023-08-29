import { makeStyles } from "@material-ui/core/styles";
import { colors } from "./constant";

const materialCommonStyles = makeStyles((theme) => ({
  customSelect: {
    backgroundColor: colors.white,
    borderRadius: 4,
    border: "1px solid #C9C9C9",
    "@media(min-width:1024px)" : {
      maxWidth: "462px !important",
      width: "100%", 
    },
    
    "&.MuiPopover-paper": {
      border: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      display: "none",
    },
    "& .MuiSelect-root": {
      paddingRight: "40px !important",
      fontSize: "14px",
      color: "rgba(0,0,0,0.6)",
      fontFamily: "ClarimoMedium",
      letterSpacing: "normal",
      "& span": {
        fontFamily: "ClarimoRegular",
      }
    },
    "& .MuiSvgIcon-root": {
      position: "absolute",
      right: "10px",
      top: "calc(50% - 15px)",
      pointerEvents: "none",
      cursor: "text",
      fill: "#201030",
    },
    "& li": {
      fontSize: "14px",
      padding: "10px 15px",
      fontFamily: "ClarimoBold",
      color: "rgba(0,0,0,0.6)",
      letterSpacing: "normal",
      whiteSpace:"pre-wrap",
      flexWrap:"wrap",
      "& span": {
        fontFamily: "ClarimoRegular",
      },
      "&.MuiListItem-root.Mui-focusVisible:hover": {
       // backgroundColor: "rgba(1, 145, 109, 0.1)",
      },
      "&.MuiListItem-root.Mui-focusVisible": {
       // backgroundColor: "transparent",
      },
      "&.Mui-disabled": {
        display: "none",
      },
      "&:hover": {
        color: colors.primary,
        backgroundColor: "rgba(1, 145, 109, 0.1)",
      },
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: colors.primary,
        color: colors.white,
      },
      "& .MuiListItemText-root .MuiTypography-body1": {
        fontSize: "16px",
        lineHeight: "1.3",
      },
      customTooltip: {
        borderRadius: "6px",
        boxShadow: "0 4px 10px 0 rgba(97, 97, 97, 0.2)",
        backgroundColor: "#ffffff",
        padding: "18px",
        "& .MuiTooltip-arrow": {
          color: colors.white,
        },
        "& ul": {
          "& li": {
            "& + li": {
              marginTop: "10px",
            },
            fontSize: "14px",
            lineHeight: 1.07,
            color: "#646464",
            "& span": {
              fontWeight: "500",
              color: colors.black,
            },
          },
        },
      },
    },
  },
}));

export { materialCommonStyles };
