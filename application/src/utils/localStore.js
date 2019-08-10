export function isLogged() {
  try {
    var locale = localStorage.getItem("example-jwt-jwt");
    if (locale !== null && JSON.parse(locale).token) {
      return true;
    } else {
      return false;
    }
  } catch (ex) {
    return false;
  }
}

export function logOut() {
  localStorage.removeItem("example-jwt-jwt");
}

export function setLogged(data) {
  localStorage.setItem("example-jwt-jwt", JSON.stringify(data));
}

export function getLocaleName() {
  var locale = localStorage.getItem("example-jwt-jwt");
  if (locale !== null && JSON.parse(locale).user) {
    return JSON.parse(locale).user;
  } else {
    return "";
  }
}
