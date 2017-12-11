function checkForm() {

  var form = document.querySelector("form");
  alert(form);
//



  // var d = document.getElementById("div1");
  // d.className += " otherclass";
  // make field red
  // element.classList.remove("otherclass");

 // return true;
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
    return (true)
  }
  alert("You have entered an invalid email address!")
  return (false)
}


function required() {
  var empt = document.forms["form1"]["text1"].value;
  if (empt == "") {
    alert("Please input a Value");
    return false;
  }
  else {
    alert('Code has accepted : you can try another');
    return true;
  }
}

function Emptyvalidation(inputtxt) {
  if (inputtxt.value.length == 0) {
    document.inputtxt.style.background = 'Yellow';
  }
  else {
    document.inputtxt.style.background = 'White';
  }
  return error;
}
