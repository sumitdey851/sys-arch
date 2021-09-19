/******************| Initial API call on application launch to get app auth token |***************/
axios({
  method: "post",
  url: "/sysArch/api",
  data: {
    params: {
      method: "post",
      requestType: "getAppAuthToken",
    },
    reqObj: {
      licenseKey: "AXPL-DERT-UYHQ"
    }
  },
});

/****************************| Login API call to get user auth token |*******************************/
axios({
  method: "post",
  url: "/sysArch/api",
  data: {
    header: {
      appAuthToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      userAuthToken: "",
    },
    params: {
      method: "post",
      requestType: "login",
      role: "",
    },
    reqObj: {
      email: "someone@domain.com",
      password: "hashed_password",
    },
  },
});


/****************************| API call after user auth |*******************************/
axios({
  method: "post",
  url: "/sysArch/api",
  data: {
    header: {
      appAuthToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      userAuthToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODU3NDE1MiIsIm5hbWUiOiJKb2huIFNtaXRoIiwiaWF0IjoxNTE2MjM5MDIyfQ.X5BZPlBHS1-SA__bGeAdYq7PZCwPPjsgGvwGQEOqtEU",
    },
    params: {
      method: "post",
      requestType: "getUserDetails",
      role: "",
    },
    reqObj: {
      email: "someone@domain.com",
    },
  },
});
