import clickButton from '/clickbutton';
import clickButtonFunction from '/clickButtonFunction';
import submitButton from '/submitbutton';
import submitButtonFunction from '/submitbuttonfunction';

(function(){
  'use strict';

  var click = new clickButton();

  var clickFunction = new clickButtonFunction({model: click});

  $('app').append(clickButton.el);

  var submit = new submitButton();

  var submitFunction = new submitButtonFunction({model: submit});

  $('app').append(submitButton.el);



  $(document).ready(function(){
    $('body').prepend(JST.application());
  });
})();
