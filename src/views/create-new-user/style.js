import { makeStyles } from '@material-ui/core';
import { colors } from '@utils/constant';
import welcomBackground from '@assets/images/welcome-block-bg.svg';

const DashboardStyle = makeStyles({
    DashboardWrapper: {

    },
    DashboardInner: {
        display: "flex",
        margin: "0 -12px",
        backgroundColor:"white",
        borderRadius:"20px",
        "@media (max-width:767px)": {
            flexWrap: "wrap",
        },
        "& .dashboard-left": {
            padding: "0 12px",
            flex: "0 0  64.62%",
            maxWidth: "64.62%",
            "@media (max-width:1199px)": {
                padding: "0 7px",
            },
            "@media (max-width:767px)": {
                padding: "0 15px 24px",
                flex: "0 0 100%",
                maxWidth: "100%"
            },
            "& .welcome-block": {
                backgroundImage: "url(" + welcomBackground + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "23px 29px",
                "@media (max-width:767px)": {
                    padding: "23px 14px",
                    minHeight: "136px",
                    backgroundPosition: "center right 14%",
                },
                "& .welcome-text": {
                    fontSize: "24px",
                    lineHeight: "1.5",
                    textTransform: "capitalize",
                    fontFamily: 'ClarimoBold',
                    color: colors.textBlack,
                    "@media (max-width:1199px)": {
                        fontSize: "20px",
                    },
                    "@media (max-width:767px)": {
                        fontSize: "18px",
                    },
                    "& .user-name": {
                        fontSize: "36px",
                        lineHeight: "1.5",
                        fontFamily: 'ClarimoExtrabold',
                        color: colors.textBlack,
                        display: "block",
                        "@media (max-width:1199px)": {
                            fontSize: "30px",
                        },
                        "@media (max-width:767px)": {
                            fontSize: "24px",
                        }
                    }
                }
            },
            "& .paynow-block": {
                minHeight: "221px",
                "@media (max-width:767px)": {
                    minHeight: "250px",
                }
            },
            "& .activity-block": {
                minHeight: "295px",
            },
            "& .card-body-header": {
                color: "rgb(1, 145, 109)",
                fontWeight: "bold"
            },
        },
        "& .dashboard-right": {
            padding: "0 12px",
            flex: "0 0  35.38%",
            maxWidth: "35.38%",
            "@media (max-width:1199px)": {
                padding: "0 7px",
            },
            "@media (max-width:767px)": {
                padding: "0 15px",
                flex: "0 0 100%",
                maxWidth: "100%"
            },
            "& .quickaction-block": {
                minHeight: "263px",
            },
            "& .billing-block": {
                minHeight: "340px",
                "@media (max-width:1199px)": {
                    minHeight: "330px",
                },
            },
            "& .card-body-header": {
                color: "rgb(1, 145, 109)",
                fontWeight: "bold"
            },
        },

    },
    selectWrapper: {
        "& label": {
            fontWeight: "normal",
            margin: "0 27px 0 0",
            backgroundColor: "transparent",
            padding: "0",
            color: "rgba(0,0,0,0.6)",
            position: "relative",
            fontFamily: 'ClarimoMedium',
            transform: "none !important",
            left: "0",
            top: "0",
            "@media (max-width:767px)": {
                margin: "0 0 10px",
            },
        },
        "& > .MuiFormControl-root": {
            flexDirection: "inherit",
            alignItems: "center",
            "@media (max-width:767px)": {
                flexDirection: "column",
                alignItems: "flex-start",
            }
        },
        "& .MuiOutlinedInput-root": {
            "@media (max-width:767px)": {
                maxWidth: "280px",
                minWidth: "100%",
            }
        }
    },
    paper: {
        textTransform: "uppercase",
        fontSize: "10px",
        letterSpacing: "0.9px",
        color: "black",
        fontWeight: "bold"
    },
    icons: {
        borderRadius: "6px 6px 6px 6px",
        width: "90px",
        height: "100px",
        marginLeft: "10px"
    }
});

export { DashboardStyle };