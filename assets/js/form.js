var submitted = false;
var formHTML = '<form name="contact" id="contact-form" onsubmit="return checkForm();" action="https://docs.google.com/forms/d/e/1FAIpQLSet8fvT5o_ySm-t8AhYzSYupVEnMF09ORL5o3R5S1WTb9Zdwg/formResponse" method="post" target="hidden_iframe"><h3>Name*</h3><input name="entry.1240242567" type="text" maxlength="50"><h3>Email*</h3><input name="entry.1349114668" type="text" maxlength="75"><h3 class="antispam">Leave this empty*</h3><input class="antispam" maxlength="50" type="text" name="url"><h3>Subject*</h3><input name="entry.337598320" type="text" maxlength="50"><h3>Message*</h3><textarea name="entry.954936580" rows="7" cols="50"></textarea><button class="btn btn--primary" value="Submit" type="submit">Submit</button></form>';

function checkForm() {

  var validForm = true;
  //let str = '';
  var form = document.forms['contact-form'];
  validForm = validElem(form['url'], false, true) && validForm; //antispam
  validForm = validElem(form['entry.1240242567'], false, false) && validForm;// name
  validForm = validElem(form['entry.1349114668'], true, false) && validForm; // email
  validForm = validElem(form['entry.337598320'], false, false) && validForm; // subject
  validForm = validElem(form['entry.954936580'], false, false) && validForm; // message

  if (validForm == true) {
    submitted = true;
    return true; //true
  }
  return false;
}

function validElem(elem, isEmail, isSpam) {
  if (isSpam && elem.value.length > 0) {
    alert("Form is submitted!");
    return false;
  } else if (isSpam) {
    return true;
  }
  if (elem.value.length == 0) {
    addInvalidClass(elem);
    return false;
  }
  if (isEmail && !validateEmail(elem.value)) {
    addInvalidClass(elem);
    return false;
  }
  elem.classList.remove('invalid');
  return true;
}

function addInvalidClass(elem) {
  elem.classList.add('invalid');
}

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}


$(document).ready(function () {

  // RKW use jQuery to select images of collections and update the height
  var updateSize = function () {
    var imageContent = $(".archive__item-teaser").find('img');
    var thirdImageContent = $(".third").find('img');
    imageContent.css("height", imageContent.width());
    thirdImageContent.css("height", thirdImageContent.width());
  }

  updateSize(); // RKW update the height of img


  $(window).resize(function () {
    updateSize();
  });
});
