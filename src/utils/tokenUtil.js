/**
 * Token Utilities
 */
export function getCurrentUserName() {
  var token = decodeToken();
  if (token != null)
    return token.userName;
  else
    return "";
}

export function getServiceJobToken() {
  return "DiAIiK!5s5KYTlJDfOnq";
}

export function getCurrentUserEmailAddress() {
  var token = decodeToken();
  if (token != null)
    return token.emailAddress;
  else
    return "";
}

export function decodeToken() {
  const tokenString = localStorage.getItem('token');
  if (tokenString === null)
    return null;
  else
    return JSON.parse(decodeURIComponent(atob(tokenString)));
}
export function getGuestUserToken() {
  const tokenString = localStorage.getItem('guest_token');
  return tokenString == null ? "" : tokenString;
}

export function getGuestUserId() {
  const tokenString = localStorage.getItem('guest_userId');
  return tokenString == null ? "" : tokenString;
}

export function getCurrentUserRoles() {
  var token = decodeToken();
  if (token != null)
    return token.userRoles;
  else
    return new Array();
}

export function getCurrentUserApps() {
  var token = decodeToken();
  if (token != null)
    return token.userApp;
  else
    return new Array();
}

export function getCurrentUserAppFunctions() {
  var token = decodeToken();
  if (token != null)
    return token.userFunctions;
  else
    return new Array();
}

export async function isValidToken() {
  const jsonObj = decodeToken();
  const requestOptions = {
    method: 'GET',
    headers: { 'Authorization': jsonObj.token },
  };
  await fetch(process.env.REACT_APP_VALIDATE_TOKEN, requestOptions)
    .then(async response => {
      const isJson = response.headers.get('content-type') ?.includes('application/json');
      const data = isJson && await response.json();
      const status = await response.status;
      if (data.code >= 200 && data.code < 400) {
        return true;
      }
      if (data.code == 401) {
        return false;
      }
      if (status == 500) {
        return false;
      }
    }).catch(error => {
      console.log(error);
      return false;
    });
}

export function getCurrentAccountNumber(){
  const userSelectedAccount = localStorage.getItem('userSelectedAccount');
  return userSelectedAccount === null ? "" : userSelectedAccount.split("-")[0];

}

export function isAdminRole(){
  var token = decodeToken();
  if(token.userRoles.includes('admin') || token.userRoles.includes('internal')){
    return true;
  }else return false;
}

export function isCustomerAdminAndNotAdmin(){
  var token = decodeToken();
  if(token.userRoles.includes('account_admin') && !isAdminRole()){
    console.log("True - Account Admin");
    return true;
  }else return false;
}

export function isTokenExpired(token){
  return new Promise(function (resolve) {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-origin": "*",
          "token":token
        }
      };
      return fetch(process.env.REACT_APP_IS_TOKEN_EXPIRED, requestOptions)
        .then(async response => {
          const isJson = response.headers.get('content-type')?.includes('application/json');
          const dataJson = isJson && await response.json();
          resolve(dataJson.status);
        }).catch(error=>{
          resolve(false);
        });
      });
}