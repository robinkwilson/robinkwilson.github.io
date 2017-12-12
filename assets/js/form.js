var submitted = false;

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
