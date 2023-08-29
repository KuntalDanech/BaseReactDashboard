const colors = {
  primary: "#01916D",
  secondary: "#45DEB8",
  black: "#000",
  white: "#fff",
  gray: "#585F5E",
  lightGray: "#E5E5E5",
  grayBg: "#F6F6F6",
  textBlack: "#333333",
  grayBorder: "#C9C9C9",
  textBlack1: "#201030",
  lightGray1: "#737474",
};

const routes = {
  dashboard: "/dashboard",
  login: "/",
  logout: "/logout",
  register: "/register",
  organization : "/organization"
};
const metaTagTitle = " | FUJIFILM Business Innovation Australia";


const emailRegex = /^[a-zA-Z0-9]+([\-_\.`'][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\-\.`'][a-zA-Z0-9]+)*(\.[a-zA-Z0-9]{2,9})+$/;


export {
  colors,
  routes,
  metaTagTitle,
  emailRegex
};