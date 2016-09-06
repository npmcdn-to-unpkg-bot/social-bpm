$(document).ready(function () {

  $( "#social-bpm-app" ).draggable();

  $('body').on('click', '.vertical-carousel-left-thumbnails-form-links', function () {
    $(this).children(".answers").slideToggle("slow");
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.');
      return;
    }

    if (Notification.permission !== "granted")
      Notification.requestPermission();
  });

  (function loop() {
    var rand = Math.round(Math.random() * (10000 - 500)) + 7000;
    setTimeout(function () {
      // notifyMe();
      loop();
    }, rand);
  }());

  function notifyMe() {
    if (Notification.permission !== "granted")
      Notification.requestPermission();
    else {
      var notification = new Notification('Citi - Social BPM', {
        icon: './images/logo.png',
        body: "Hey there! Someone just replied to your comment!",
      });

      notification.onclick = function () {
        window.open("");
      };

    }
  }

});