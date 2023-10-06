import { locatePage, setLoginToggle } from "./model.js";

function initListeners() {
  $(window).on("hashchange", locatePage);
  locatePage();


  $("#modal-inject .modal-wrapper .modal-content .login-button").on(
    "click",
    (e) => {
      e.preventDefault();
      setLoginToggle();
      $("#modal-inject #modal-wrap1").css("display", "none");
      $("#modal-inject #modal-wrap2").css("display", "flex");
    }
  );
  $("#modal-inject .modal-wrapper2 .modal-content .login-button").on(
    "click",
    (e) => {
      e.preventDefault();
      setLoginToggle();
      $("#modal-inject #modal-wrap2").css("display", "none");
      $("#modal-inject #modal-wrap1").css("display", "flex");
    }
  );
}

function modalToggle() {
  $("#login").on("click", (e) => {
    $("#modal-inject").toggle();
    $("#modal-inject").css("display", "flex");
  });
  $(".close").on("click", (e) => {
    $("#modal-inject").toggle();
  });
}

$(document).ready(function () {
  initListeners();
  modalToggle();
});
