/*******************| Get a cookie value from browser cookies |******************/

function getCookie(actualValue) {
  let resultValue;  //variable to store the cookie value that is returned
  const cookies = document.cookie;      //get all cookies
  const cookiesArr = cookies.split(";");    // split all individual cookies as elements of an array
  // iterating over the cookies array
  cookiesArr.forEach((el) => {
    const key = el.split("=")[0].trim();
    const value = el.split("=")[1].trim();
    // if the search key matches a cookie key
    if (key === actualValue) {
      resultValue = value;
    }
  });
  return resultValue;
}

export default getCookie;