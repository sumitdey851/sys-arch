import axios from "axios";
import React from "react";

let isAuthenticApp = false;
let appAuthToken = "";

const getAuthAppToken = async () => {
  const response = await axios({
    method: "post",
    url: "https://sys-arch-security-layer.herokuapp.com/sysArch/api",
    data: {
      params: {
        method: "post",
        requestType: "getAppAuthToken",
      },
      reqObj: {
        licenseKey: "AXPL-DERT-UYHQ",
      },
    },
  });
  console.log(response);
  if (response.status === 200) {
    const data = response.data;
    if (data.appAuthToken.length() > 0) {
      isAuthenticApp = true;
      appAuthToken = data.appAuthToken;
    }
  }
};

getAuthAppToken();

const AppAuth = React.createContext({
  isAuthenticApp: isAuthenticApp,
  appAuthToken: appAuthToken
});

console.log(isAuthenticApp);
console.log(appAuthToken);

export default AppAuth;