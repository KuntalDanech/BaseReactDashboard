import Sidebar from '@components/sidebar';
import { MenuItem, Typography } from '@material-ui/core';
import { materialCommonStyles } from '@utils/materialCommonStyles';
import React from 'react';
import { ReactTitle } from 'react-meta-tags';
import DataGrid from '../../component/datagrid/sample';
import { metaTagTitle } from '../../utils/constant';
import { DashboardStyle } from './style';
import { getCurrentUserName, getCurrentUserRoles } from '../../utils/tokenUtil';

export default function MyDashboard() {
  const classes = DashboardStyle();
  const materialClasses = materialCommonStyles();

  const accountIdList = new Array();
  accountIdList.push("2036877");
  const accountIdListMenuItems = accountIdList.map((number) =>
    <MenuItem key={number} value={number}>{number}</MenuItem>
  );

  return (
    <div className={classes.DashboardWrapper}>
      <ReactTitle title={`Dashboard` + metaTagTitle} />
      <div className="page-wrapper">
        <div class="page-outer">
          <div class="main-sidebar-wrapper">
            <Sidebar />
          </div>
          <div class="page-content-wrapper">
            <div class="title-bar-wrapper">
              <div class="title-wrapper">
                <Typography variant="h1">
                  DASHBOARD
                </Typography>
              </div>
            </div>
            <div className={classes.DashboardInner}>
              <div class="dashboard-left">
                <div class="fuji-card welcome-block">
                  <div class="welcome-text">
                    Welcome,
                    <span class="user-name">{getCurrentUserName()}</span>
                  </div>
                </div>
                <br />
                <div>
                  <h2>My Sales this month...</h2>
                  <br />
                </div>
                <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "20px" }}>
                  <DataGrid />
                </div>
              </div>
              <div class="dashboard-right">
                Current Roles and Permissions
                <br />
                <br />
                  {getCurrentUserRoles().map(role => {
                    return <>
                    <span style={{fontSize:"18px", fontWeight:"bold"}}>{role.roleName}</span>
                      <ul style={{ listStyle: "inside" }}>
                        {role.permissions.map(p => {
                          return <li>{p.name}</li>
                        })}
                      </ul>
                      </>
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
