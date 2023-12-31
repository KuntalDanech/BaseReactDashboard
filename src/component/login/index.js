import React from 'react';
import './style.css';
import { loginStyle } from './style';
import { ReactTitle } from 'react-meta-tags';
import { colors, metaTagTitle } from '../../utils/constant';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Button, CssBaseline, FormControl, FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@material-ui/core';
import siteLogo from "@assets/images/site-logo.svg";
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Loader from 'react-loader-spinner';

export default function LoginView({ setToken }) {
  const classes = loginStyle();
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState(undefined);
  const [userName, setUserName] = React.useState(undefined);
  const [error, setError] = React.useState(undefined);
  const [code, setCode] = React.useState(undefined);
  const [codeToken, setCodeToken] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isCodeVerificationPage, setIsCodeVerificationPage] = React.useState(false);
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
  const onSubmitUserNameAndPassword = () => {
    setLoading(true);
    setError("");
    var obj = {
      userName: userName.trim(),
      password: password
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    };
    fetch(process.env.REACT_APP_TOKEN, requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const status = await response.status;
        setLoading(false);
        if (status == 200) {
          const data = isJson && await response.json();
          setIsCodeVerificationPage(true);
          console.log(data.token);
          setCodeToken(data.token);
        } else if (status === 401) {
          setError('Username or password is incorrect');
        } else {
          setError('There was an error, please try again later');
        }
      }).catch(error => {
        console.error(error);
        setIsCodeVerificationPage(false);
        setLoading(false);
        setError('There was an error, please try again later', error);
      });
  }

  const onSubmitCode = () => {
    setLoading(true);
    setError("");
    var obj = {
      code: code.trim()
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': codeToken },
      body: JSON.stringify(obj)
    };
    fetch(process.env.REACT_APP_CODE_VALIDATE, requestOptions)
      .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        const status = await response.status;
        setLoading(false);
        if (status >= 200 && status <= 399) {
          window.userName = userName;
          const jsonString = JSON.stringify(data);
          const tokenDecodedString = btoa(encodeURIComponent(jsonString));
          localStorage.setItem('token', tokenDecodedString);
          setToken(tokenDecodedString);
          setError("");
        } else if (status === 401) {
          setError('Code is incorrect or session has expired, pelase try again');
        } else {
          setError('There was an error, please try again later');
        }
      }).catch(error => {
        console.error(error);
        setIsCodeVerificationPage(false);
        setLoading(false);
        setError('There was an error, please try again later', error);
      });
    // if (userName === "user" && password === "password") {
    // } else {
    //   setError("Username or password is incorrect!");
    // }
  }

  return (
    <div>
      <ReactTitle title={`Login` + metaTagTitle} />
      {loading && <Loader
        type="Circles"
        style={style}
        alignItems="center"
        color="#00A273"
        height={100}
        width={100}
      />}
      {!loading &&
        <React.Fragment>
          <CssBaseline />
          <div className={classes.LoginWrapper}>
            <div className="login-block">
              <div className="logo-block">
                <Link to="#" target={"_blank"}><img src={siteLogo} alt="site-logo" /></Link>
              </div>
              <div className="left-block">
              </div>
              <div className="right-block">
                <div className="form-wrapper">
                  <FormGroup column>
                    <div>
                      <Typography variant="h1">
                        Welcome, login to FBAU Sales portal
                      </Typography>
                      <p style={{
                        fontSize: "13px", letterSpacing: "0", fontFamily: "ClarimoRegular",
                        color: colors.textBlack
                      }}>
                        To ensure better account security, we have added 2-step verification. To login, you have to enter a code sent to your registered email address in addition to your password.
                      </p><br />
                      <p id="errorMsg" className="error-msg">{error}</p>
                      {!isCodeVerificationPage &&
                        <>
                          <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-username">Login</InputLabel>
                            <OutlinedInput
                              id="username"
                              label="Login"
                              type="text"
                              value={userName}
                              onKeyPress={(event) => {
                                if (event.key == "Enter") {

                                }
                              }
                              }
                              onChange={event => setUserName(event.target.value)}
                              variant="outlined"
                              error={userName === ""}
                              helperText={userName === "" ? 'Username should not be empty!' : ' '}
                              required
                            />
                            {userName === "" &&
                              <FormHelperText error id="accountId-error">
                                Username should not be empty
                              </FormHelperText>
                            }
                          </FormControl>

                          <FormControl variant="outlined" className="form-password-field">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                              id="password"
                              label="Password"
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onKeyPress={(event) => {
                                if (event.key == "Enter") {

                                }
                              }
                              }
                              onChange={event => setPassword(event.target.value)}
                              error={password === ""}
                              helperText={password === "" ? 'Password should not be empty!' : ' '}
                              required
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                    onClick={() => setShowPassword(!showPassword)}
                                  >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                  </IconButton>
                                </InputAdornment>
                              }

                            />
                          </FormControl>
                          <div className="tooltip-password-block">

                            <div className="login-bottom-block">
                              <div className="login-bottom-inner forgot-pswd-link">
                                <a >Forgot password?</a>
                              </div>
                              <div className="login-bottom-inner">
                                <Button
                                  type="submit"
                                  variant="contained"
                                  onClick={onSubmitUserNameAndPassword}
                                  className="green-btn">
                                  LOGIN
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                      }
                      {
                        isCodeVerificationPage &&
                        <>
                          <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-username">Code</InputLabel>
                            <OutlinedInput
                              id="code"
                              label="Login"
                              type="text"
                              value={code}
                              onKeyPress={(event) => {
                                if (event.key == "Enter") {

                                }
                              }
                              }
                              onChange={event => setCode(event.target.value)}
                              variant="outlined"
                              error={code === ""}
                              helperText={code === "" ? 'Code should not be empty' : ' '}
                              required
                            />
                            {code === "" &&
                              <FormHelperText error id="accountId-error">
                                Code should not be empty
                              </FormHelperText>
                            }
                          </FormControl>
                          <div className="tooltip-password-block">

                            <div className="login-bottom-block">
                              <div className="login-bottom-inner">
                                <Button
                                  type="submit"
                                  variant="contained"
                                  onClick={() => {
                                    setIsCodeVerificationPage(!isCodeVerificationPage);
                                  }}
                                  className="green-border-btn">
                                  Cancel
                                </Button>
                                <Button
                                  type="submit"
                                  variant="contained"
                                  onClick={onSubmitCode}
                                  className="green-btn">
                                  Submit
                                </Button>
                              </div>
                            </div>
                          </div>
                        </>
                      }
                    </div>


                    <div className="terms-condition-text">
                      <p>By logging in, you agree to <Link to='/'>FUJIFILM Business Innovation Corp’s terms and conditions</Link></p>
                    </div>
                    <div className="bottom-links hidden-xs">
                      <ul className="login-block-links">
                        <li><Link to="#" target={"_blank"}>Home</Link></li>
                        <li><Link to='/'>Disclaimer</Link></li>
                        <li><Link to="#" target={"_blank"}>Privacy policy</Link></li>
                        <li><Link to="#" target={"_blank"}>Terms of use</Link></li>
                        <li><Link to="#" target={"_blank"}>Site map</Link></li>
                        <li><Link to="#" target={"_blank"}>Company</Link></li>
                        <li><Link to="#" target={"_blank"}>FUJIFILM BI Direct</Link></li>
                      </ul>
                    </div>
                  </FormGroup>
                </div>
              </div>
              <div className="bottom-links visible-xs">
                <ul className="login-block-links">
                  <li><Link to="#" target={"_blank"}>Home</Link></li>
                  <li><Link to="#">Disclaimer</Link></li>
                  <li><Link to="#" target={"_blank"}>Privacy policy</Link></li>
                  <li><Link to="#" target={"_blank"}>Terms of use</Link></li>
                  <li><Link to="#" target={"_blank"}>Site map</Link></li>
                  <li><Link to="#" target={"_blank"}>Company</Link></li>
                  <li><Link to="#" target={"_blank"}>FUJIFILM BI Direct</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.root} style={{ width: '100%' }}>
          </div>
        </React.Fragment>
      }
    </div>
  );
}