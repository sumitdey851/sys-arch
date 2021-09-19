import axios from "axios";

const loginHandler = async (appAuthToken, enteredEmail, enteredPassword) => {
  console.log("Calling login API");
  console.log(appAuthToken);
  console.log(enteredEmail);
  console.log(enteredPassword);
  const response = await axios({
    method: "post",
    url: "https://sys-arch-security-layer.herokuapp.com/sysArch/api",
    data: {
      header: {
        appAuthToken,
        userAuthToken: "",
      },
      params: {
        method: "post",
        requestType: "login",
        role: "",
      },
      reqObj: {
        email: enteredEmail,
        password: enteredPassword,
      },
    },
  });
  return response.data;
};

export default loginHandler;
