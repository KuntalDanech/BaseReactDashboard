import siteLogo from "@assets/images/site-logo.svg";
import { AppBar, Drawer, Hidden, Toolbar } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from 'react-router';
import { Link, NavLink } from "react-router-dom";
import { SidebarStyle } from "./style";
import './style.css';
import { routes } from "../../utils/constant";
export default function Sidebar({ isPremierUser }) {
  const history = useHistory();
  const classes = SidebarStyle();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    document.querySelector(".hamburger-menu").classList.toggle("open-menu");
  };

  return (
    <div className={classes.SidebarWrapper}>
      <AppBar position="fixed" className="site-header">
        <Toolbar>
          <div className="logo-block">
            <Link to="#" target={"_blank"}>
              <img src={siteLogo} alt="logo" />
            </Link>
          </div>
          <div className="menu-block" onClick={handleDrawerToggle}>
            <em>Menu</em>
            <div className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden implementation="css" className="mobile-drawer">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            className={classes.SidebarWrapper}
          >
            <div className="sidebar-wrapper">
              <div className="top-sidebar">
                <ul className="main-nav">
                  <li>
                    <NavLink
                      exact
                      to={routes.dashboard}
                      title="Dashboard"
                      activeClassName="active"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      exact
                      to={routes.logout}
                      title="Logout"
                      activeClassName="active"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Drawer>
        </Hidden>
        <Hidden implementation="css">
          <Drawer variant="permanent" open className="desktop-drawer">
            <div className="sidebar-wrapper">
              <div className="top-sidebar">
                <div className="logo-block">
                  <Link to={{ pathname: process.env.REACT_APP_home }} target={"_blank"}>
                    <img src={siteLogo} alt="logo" />
                  </Link>
                </div>
                <ul className="main-nav">
                  <li>
                    <NavLink
                      exact
                      to={routes.dashboard}
                      title="Dashboard"
                      activeClassName="active"
                    >
                      Dashboard
                    </NavLink>

                  </li>
                  <li>
                    <NavLink
                      exact
                      to={routes.logout}
                      title="Logout"
                      activeClassName="active"
                    >
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <form
        action="my_redirect_url"
        target="myTarget"
        method="post"
        id="form"
      >
        <input
          type="hidden"
          name='jwt'
          id='jwt'
        />
        <input
          type="hidden"
          name='selectedAccount'
          id='selectedAccount'
        />
        <button style={{ display: "none" }} type="submit" id="buttonForm">Hidden Button</button>
      </form>
    </div>
  );
}