import Sidebar from '@components/sidebar';
import { MenuItem, Typography } from '@material-ui/core';
import { materialCommonStyles } from '@utils/materialCommonStyles';
import React from 'react';
import { ReactTitle } from 'react-meta-tags';
import DataGrid from '../../component/datagrid/sample';
import { metaTagTitle } from '../../utils/constant';
import { DashboardStyle } from './style';
import UserRegistrationForm from '../../component/form/create-new-user-form';

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
                  Create new user
                </Typography>
              </div>
            </div>
            <div className={classes.DashboardInner}>
              <UserRegistrationForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
