export function locatePage() {
  let hash = window.location.hash;
  let pageID = hash.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}.html`, function (data) {
      $("#app-inject").html(data);
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      $("#app-inject").html(data);
    });
  }
}


var loggedOut = false;
export function setLoginToggle() {
  if (loggedOut == true) {
    loggedOut = false;
    $("nav .login").html("Login");
  } else {
    loggedOut = true;
    $("nav .login").html("Log out");
  }
}
