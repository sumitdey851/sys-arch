import axios from "axios";

let isAppAuth = false; // flag to check if we have a token
let authToken; //variable to store the token

/**********************| Code to Fetch App Authorization Token |************************/

const getAuthAppToken = async () => {
  if (!isAppAuth) {
    console.log("Calling auth API");
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
    if (response.status === 200) {
      const data = response.data;
      if (data.appAuthToken.length > 0) {
        return data;
      }
    }
  }
};

const resData = getAuthAppToken(); //returns a promise
// resolving the promise returned and setting external variables
Promise.all([resData]).then((data) => {
  isAppAuth = true;
  authToken = data[0].appAuthToken;
});

/***************************************************************************************/

/********************| Check if App is authorised and set cookies |*********************/

function checkAppAuth() {
  if (isAppAuth) {
    // setting cookies
    document.cookie = `appAuthToken=${authToken}`;
    document.cookie = `isAppAuth=${isAppAuth}`;
  } else {
    setTimeout(() => {
      checkAppAuth();
    }, 0);
  }
}

checkAppAuth();

/****************************************************************************************/
