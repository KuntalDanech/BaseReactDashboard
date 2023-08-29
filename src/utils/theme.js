import { createMuiTheme } from "@material-ui/core/styles";

import { colors } from "./constant";

const fontSize = 16; // px
const htmlFontSize = 16; // 16px is the default font-size used by browsers.
const coef = fontSize / 14;

export const theme = createMuiTheme({

  typography: {
    fontFamily: 'ClarimoMedium',
    pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
    h1: {
      fontSize: "24px",
      fontFamily: 'ClarimoBold',
      textTransform: "uppercase",
      lineHeight: "1.56",
      color: colors.textBlack,
      fontWeight: "normal",
      letterSpacing:"1px",
      marginBottom: "15px",
      "@media (max-width:767px)": {
        fontSize:"18px",
      }
    },
    h2: {
      fontSize: "14px",
      fontWeight: "normal",
      letterSpacing:"1.25px",
      lineHeight: "1.56",
      color: colors.textBlack,
      fontFamily: "ClarimoBold",
      "@media (max-width:767px)": {
          fontSize:"13px",
      }
    },
    h6: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
    body1: { fontSize: 14, lineHeight: 1.57, fontWeight: "normal" },
    gutterBottom: { marginBottom: 16 },
  },
  shape: {
    borderRadius: 6,
  },
  props: {
    MuiTextField: {
      fullWidth: true,
     
    },
    MuiOutlinedInput: {
      notched: false,
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 6,
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          borderRadius: "inherit",
          backgroundColor: "transparent",
        },
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
        marginBottom:"36px",
        "@media (max-width:991px)" :{ 
          marginBottom:"18px",
        }
      
      },
    },
    MuiInput: {
      root: {
        width: "100%",
      },
    },
    MuiInputBase: {
      input: {
        height: "56px",
        lineHeight: "56px",
        padding: "0 15px !important",
        borderRadius: "4px",
        border: "1px solid transparent",
        fontFamily: 'ClarimoMedium',
        color: colors.black,
        fontSize: "14px",
        transition: "all 0.3s",
        boxSizing: "border-box",
        "@media (max-width:991px)" :{
          height: "44px",
          lineHeight: "44px",
        },
        "&::placeholder": {
          color: colors.black,
          fontSize: "16px",
          transition: "all 0.3s",
          opacity: "1",
        },
        "& .Mui-focused": {
          "& .MuiInputBase-input": {
            borderColor: colors.primary,
            "&::placeholder": {
              opacity: "0",
            },
          },
        },
      },
      root: {
        "&.Mui-focused": {
          "& .MuiInputBase-input": {
            borderColor: colors.primary,
            "&::placeholder": {
              opacity: "0",
            },
          },
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline, &.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
          borderWidth: "1px",
          borderColor: colors.primary,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: colors.grayBorder,
        },
        "& .MuiSelect-selectMenu": {
          border: "none",
        },
      },
      notchedOutline: {
        borderColor: colors.grayBorder,
        borderRadius: "4px",
      },
    },
    MuiInputLabel: {
      outlined: {
        fontSize: "14px",
        fontWeight: "400",
        color:"rgba(0,0,0,0.6) !important",
        marginBottom: "0",
        fontFamily: "'Archivo', sans-serif",
        backgroundColor:colors.white,
        display: "block",
        padding:"5px",
        margin:"-5px",
        left:"2px",
        top:"2px",
        letterSpacing:"0",
        "@media (max-width:991px)" :{
          transform:"translate(13px, 14px) scale(1)"
        },
        
      },
      root: {
        "&.Mui-focused": {
          color: colors.black,
        },
      },
    },
    MuiButton: {
      root: {
        letterSpacing: 0,
      },
    },
    MuiTypography: {
      root: {
        letterSpacing: 0,
      },
    },
  },
});
