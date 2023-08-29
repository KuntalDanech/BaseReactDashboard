import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const loginStyle = makeStyles({
  LoginWrapper: {
    backgroundColor: colors.grayBg,
    minHeight: "100vh",
    zIndex: "1",
    position: "relative",
    "&:before": {
      position: "absolute",
      content: " '' ",
      width: "100%",
      height: "100%",
      backgroundColor: colors.primary,
      left: "0",
      top: "0",
      "@media (max-width: 991px)": {
        display: "none",
      },
    },
    "& .login-block": {
      zIndex: "1",
      position: "relative",
      padding: "130px 80px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      minHeight: "100vh",
      "@media (max-height: 850px)": {
        padding: "80px 80px 40px",
      },
      "@media (max-height: 700px)": {
        padding: "70px 80px 40px",
      },
      "@media (max-width: 1420px)": {
        padding: "95px 50px",
        "@media (max-height: 850px)": {
          padding: "60px 50px 40px",
        },
        "@media (max-height: 700px)": {
          padding: "60px 50px 40px",
        },
      },
      "@media (max-width: 1199px)": {
        padding: "70px 30px",
      },
      "@media (max-width: 991px)": {
        padding: "88px 0 0",
        flexWrap: "wrap",
      },
    },
    "& .login-block-links": {
      display: "flex",
      margin: "0 -9px -6px",
      flexWrap: "wrap",
      "@media (max-width: 991px)": {
        justifyContent:"center",
        margin: "0 -11px -6px",
      },
      "& li": {
        padding: "0 9px",
        display:"inline-flex",
        marginBottom:"6px",
        "@media (max-width: 991px)": {
          padding:"0 11px",
        },
        "& a": {
          fontSize: "9px",
          fontFamily: "ClarimoRegular",
          textDecoration: "underline",
          color: colors.primary,
          lineHeight: "14px",
          letterSpacing: "0",
          display:"inline-block",
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },
    "& .bottom-links" : {
      order:"3",
      "@media (max-width: 991px)": {
        padding:"25px 15px",
        textAlign:"center",
        width:"100%",
      },
    },
    "& .logo-block": {
      position: "absolute",
      top: "75px",
      left: "80px",
      "@media (max-height: 850px)": {
        top: "30px",
      },
      "@media (max-height: 700px)": {
        top: "20px",
      },
      "@media (max-width: 991px)": {
        top: 0,
        backgroundColor: colors.primary,
        padding: "21px 15px",
        width: "100%",
        left: "0",
      },
      "& a": {
        display: "inline-block",
        width: "180px",
        "@media (max-width: 1199px)": {
          width: "140px",
        },
        "@media (max-width: 991px)": {
          width: "87px",
        }
      },
    },
    "& .left-block": {
      flex: "0 0 25%",
      maxWidth: "50%",
      paddingRight: "90px",
      "@media (max-width: 1420px)": {
        paddingRight: "50px",
      },
      "@media (max-width: 1199px)": {
        paddingRight: "30px",
      },
      "@media (max-width: 991px)": {
        padding: "65px 20px 65px 20px",
        backgroundColor: colors.primary,
        maxWidth: "100%",
        flex: "0 0 100%",
        order: "2",
      },
      "@media (max-width: 767px)": {
        padding: "65px 15px 65px 15px",
      },
      "& .login-slider-inner": {
        maxWidth: "520px",
        margin: "0 auto",
        "&.has-two-col": {
          maxWidth: "370px",
        },
        "@media (max-width: 991px)": {
          display: "flex",
          flexWrap: "wrap",
        },
      },
      "& ul": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center",
        margin: "0 -25px -73px",
        "@media (max-height: 800px)": {
          marginBottom:"-50px"
        },
        "@media (max-width: 1199px)": {
          margin: "0 -25px -40px",
        },
        "@media (max-width: 991px)": {
          order:'2',
          margin: "0 -15px -40px",
        },
        "&.two-column": {
          "& li": {
            maxWidth: "50%",
            flex: "0 0 50%",
          },
        },
        "& li": {
          maxWidth: "33.33%",
          flex: "0 0 33.33%",
          padding: "0 25px",
          textAlign: "center",
          marginBottom: "73px",
          "@media (max-height: 800px)": {
            marginBottom:"50px"
          },
          "@media (max-width: 1199px)": {
            marginBottom: "40px",
          },
          "@media (max-width: 767px)": {
            maxWidth: "50%",
            flex: "0 0 50%",
            padding: "0 15px",
          },
          "& em": {
            "& img": {
              margin: "0 auto",
            },
          },
          "& p": {
            fontSize: "12px",
            fontFamily: "ClarimoBold",
            color: colors.white,
            textTransform: "uppercase",
            maxWidth: "133px",
            margin: "26px auto 0",
            textAlign: "center",
            "@media (max-width: 767px)": {
              fontSize:"10px",
              margin: "19px auto 0",
            },
          },
        },
      },
      "& .slider-content": {
        textAlign: "center",
        marginTop: "106px",
        "@media (max-height: 800px)": {
          marginTop:"50px"
        },
        "@media (max-width: 1199px)": {
          marginTop: "50px",
        },
        "@media (max-width: 991px)": {
          order:"1",
          maxWidth: "100%",
          flex: "0 0 100%",
          marginTop: "0",
          marginBottom: "45px",
        },
        "& h2": {
          fontSize: "22px",
          color: colors.white,
          letterSpacing: "0px",
          marginBottom: "20px",
          "@media (max-width: 767px)": {
            fontSize:"18px",
            marginBottom: "13px",
          },
        },
        "& p": {
          fontSize: "16px",
          color: colors.white,
          maxWidth: "400px",
          margin: "0 auto",
          letterSpacing: "0px",
          "@media (max-width: 767px)": {
            fontSize:"12px",
          },
        },
        "& span": {
          fontSize: "12px",
          color: colors.white,
          display: "block",
          maxWidth: "320px",
          margin: "5px auto 0",
          letterSpacing: "0px",
          lineHeight: "1.6",
          "@media (max-width: 767px)": {
            fontSize:"9px",
          },
        },
      },
    },
    "& .right-block": {
      flex: "0 0 50%",
      maxWidth: "50%",
      paddingLeft: "80px",
      "@media (max-width: 1420px)": {
        paddingLeft: "50px",
      },
      "@media (max-width: 1199px)": {
        paddingLeft: "30px",
      },
      "@media (max-width: 991px)": {
        padding: "0",
        maxWidth: "100%",
        flex: "0 0 100%",
        order: "1",
        marginBottom:"23px",
      },
      "& .form-wrapper": {
        backgroundColor: colors.white,
        borderRadius: "16px",
        padding: "42px 48px 54px",
        "@media (max-height: 850px)": {
          padding: "25px 45px",
        },
        "@media (max-height: 700px)": {
          padding: "25px 35px",
        },
        "@media (max-width: 1199px)": {
          padding: "30px 25px",
        },
        "@media (max-width: 991px)": {
          padding: "29px 15px 24px",
        },
        "& h1": {
          fontSize: "22px",
          color: colors.textBlack,
          fontFamily: "ClarimoBold",
          textTransform: "none",
          letterSpacing: "0px",
          marginBottom: "12px",
          "@media (max-width: 767px)": {
            fontSize: "18px",
            marginBottom: "10px",
          },
        },
        "& .error-msg": {
          margin: "0 0 15px 0",
        },
        "& .tooltip-password-block": {
          "@media (max-width:991px)": {
            display: "flex",
            flexWrap: "wrap",
            position:"relative",
            marginBottom: "5px",
            "& .login-bottom-block": {
              order: 1,
              maxWidth: "100%",
              flex: "0 0 100%",
              marginBottom:"0"
            },
            "& .tooltip-wrapper": {
              order: 2,
              maxWidth: "100%",
              flex: "0 0 100%",
            },
          },
        },
        "& .form-password-field": {
          marginBottom: "10px",
          "@media (max-width: 991px)": {
            marginBottom: "25px",
          },
          "& svg": {
            color: "rgba(0,0,0,0.6)",
            fontSize: "22px",
          },
          "& input": {
            borderRight: "0 !important",
            "&:focus": {
              border: "none",
              outline:"none",
            },
          },
        },
        "& .login-bottom-block": {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "51px",
          "@media (max-height: 700px)": {
            marginBottom: "35px",
          },
          "@media (max-width:991px)": { 
            flexWrap:"wrap",
            marginBottom:"0"
          },
          "& .login-bottom-inner": {
            "@media (max-width:991px)": { 
              maxWidth: "100%",
              flex: "0 0 100%",
              display:"flex",
              marginBottom: "5px",
              "&.forgot-pswd-link" : {
                position:"absolute",
                bottom:"45px",
                right:"0px",
              },
              "&.resend-code-link" : {
                position:"absolute",
                bottom:"40px",
                right:"0px",
              }
            },
            "& button": {
              "@media (max-width: 767px)": {
                flex: "1",
              },
              "& + button": {
                marginLeft: "8px",
                "@media (max-width: 991px)": {
                  marginLeft: "15px",
                },
              },
            },
            "& a": {
              fontSize: "14px",
              fontFamily: "ClarimoRegular",
              textDecoration: "underline",
              color: colors.primary,
              letterSpacing: "0",
              lineHeight: "1.5",
              "&:hover": {
                textDecoration: "none",
              },
            },
          },
        },
      
        "& .tooltip-wrapper": {
          position: "relative",
          marginBottom: "12px",
          "& .tooltip-link": {
            position: "absolute",
            left: "35px",
            top: "calc(100% - 22px)",
            letterSpacing: "0px",
            "& a": {
              fontSize: "10px",
              fontFamily: "ClarimoRegular",
              textDecoration: "underline",
              color: colors.lightGray1,
              "@media (max-width: 767px)": {
                fontSize: "9px",
              },
            },
          },
        },
        "& .terms-condition-text": {
          fontSize: "11px",
          fontFamily: "ClarimoRegular",
          color: colors.textBlack,
          marginBottom: "33px",
          letterSpacing: "0",
          "@media (max-width: 767px)": {
            marginBottom:"0",
          },
          "& a": {
            fontSize: "11px",
            fontFamily: "ClarimoRegular",
            textDecoration: "underline",
            color: colors.primary,
            lineHeight: "1.1",
            letterSpacing: "0",
            "@media (max-width: 767px)": {
              fontSize: "10px",
            },
            "&:hover": {
              textDecoration: "none",
            },
          },
        },
      },
    },
  },

  // root: {
  //   padding:'-10px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   card : {
  //     maxWidth : "300"
  //   },
  //   paper: {
  //     padding: theme.spacing(4),
  //     margin: 'auto',
  //     maxWidth: 500,
  //   },
  //   image: {
  //     width: 128,
  //     height: 128,
  //   },
  //   margin: {
  //     margin: theme.spacing(0),
  //   },
  //   textField: {
  //     width: '25ch',
  //   },
  //   img: {
  //     with:'50',
  //     height:'50'
  //   },
  //   '& .MuiTextField-root': {
  //     margin: theme.spacing(2),
  //     width: '400px',
  //   },
  //   '& .MuiButtonBase-root': {
  //     margin: theme.spacing(1),
  //   },
  // },
});

export { loginStyle };
