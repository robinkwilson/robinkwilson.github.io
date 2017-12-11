---
title: "Hi, I'm Robin"
layout: single
permalink: /
date: 2017-12-7
author_profile: true
header:
  overlay_color: "#000"
  overlay_filter: "0.4"
  overlay_image: /assets/img/pragueCastle_thumbnail.jpg
excerpt: "I'm passionate about code, efficiency, and business."
feature_row:
  - image_path: /assets/img/bitcoin/bitcoin_1_th.png
    alt: "Bitcoin-VR project thumbnail"
    title: "Bitcoin-VR**"
    excerpt: "Deployed Bitcoin transaction visualization using React-VR and socket.io."
    image_url: /bitcoinvr/
    title_url: /bitcoinvr/
  - image_path: assets/img/datavr/datavr_1.png
    alt: "Data-VR project thumbnail"
    title: "Data-VR"
    excerpt: "Exploration into VR data visualizations and the early bitcoin-vr."
    image_url: /datavr/
    title_url: /datavr/
  - image_path: /assets/img/blog360/blog360_1.png
    alt: "Blog360 project thumbnail"
    title: "Blog360"
    excerpt: "Three day Hackathon project experimenting with the web viewed in VR."
    image_url: /blog360/
    title_url: /blog360/
  - image_path: /assets/img/agoraSS/agora_th.png
    alt: "Agora project thumbnail"
    title: "Agora, Chairs!"
    image_url: /agora/
    title_url: /agora/
    excerpt: "The classiest chair selling e-commerce site built using React, Node.js, and bootstrap."
  - image_path: /assets/img/blockchain/blockchain-th.png
    alt: "Blockchain tech talk project thumbnail"
    title: "Blockchain Tech Talk"
    excerpt: "Presentation on the blockchain and it's impact on the modern economy."
    image_url: /blockchain/
    title_url: /blockchain/
---

<script type="text/javascript">var submitted=false;</script>

<h2 id="portfolio">Portfolio</h2>
Below are a list of current projects (denoted with **) and past projects.

{% include feature_row %}

<h2 id="about">About Me</h2>

<p>I build web applications using JavaScript web technologies. My passion projects incorporate VR/AR, blockchain, and automations. I solve technical challenges and strive for the most efficient solution.</p>

<p>I have the theory and experience of a CS Major and the practical coding skills, drive, and fast prototyping abilities of a coding bootcamp graduate. I graduated with a BS in Computer Science, a BA in Business Leadership, and a minor in Studio Art. After 3 years in business roles automating my jobs to work more efficiently, I decided to pursue coding as a full-time career with affirmation that I have the technical mindset, drive to learn, and tenacity to never give up that a coder needs to succeed.</p>

<p>When I'm not utilizing the passion and drive of an optimistic 26-year-old returning to software development as a career, I'm outside hiking, running, reading, petting the neighborhood cats, and joking about petting the neighborhood cats.</p>

<h2 id="resume">Resume and CV</h2>

<a href="/assets/img/RobinKWilson_ResumeSoftwareEngineer_12-2-2017.pdf" download="RobinKWilson_Resume"><button class="btn btn--primary">Resume Download</button></a>
<a href="/assets/img/RobinKWilson_CVSoftwareEngineer_12-9-2017.pdf" download="RobinKWilson_CV"><button class="btn btn--primary">CV Download</button></a>

<script type="text/javascript">var submitted=false;</script>

<h2 id="contact">Contact</h2>

I'm always looking to collaborate on interesting projects!

**LinkedIn:** [linkedin.com/in/robinkwilson25](https://www.linkedin.com/in/robinkwilson25/)


 <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {alert('Thanks for reaching out! Your form has been submitted successfully.'); window.location='/';}"></iframe>

<script type="text/javascript">
function checkForm() {

  var validForm = true;
  //let str = '';
  var form = document.forms['contact-form'];
  validForm = validElem(form['url'], false, true) && validForm; //antispam
  validForm = validElem(form['entry.1240242567'], false, false) && validForm;// name
  validForm = validElem(form['entry.1349114668'], true, false) && validForm; // email
  validForm = validElem(form['entry.337598320'], false, false) && validForm; // subject
  validForm = validElem(form['entry.954936580'], false, false) && validForm; // message

  if(validForm == true) {
    submitted = true;
    return true; //true
  }
  return false;
}

function validElem(elem, isEmail, isSpam) {
  if(isSpam && elem.value.length > 0) {
    alert("Form is submitted!");
    return false;
  } else if (isSpam){
    return true;
  }
  if(elem.value.length == 0) {
    addInvalidClass(elem);
    return false;
  }
  if(isEmail && !validateEmail(elem.value)) {
    addInvalidClass(elem);
    return false;
  }
  elem.classList.remove('invalid');
  return true;
}

function addInvalidClass(elem) {
  elem.classList.add('invalid');
}

//***
// window.onbeforeunload = function() {
//   if(!modalIsOpen)
//     document.querySelector('iframe').remove();
// };

// function removeInvalidClass (form) {
//   let elements = form.elements;

//   for (let i = 0; i )
//   var elements = document.getElementById("my-form").elements;

// for (var i = 0, element; element = elements[i++];) {
//     if (element.type === "text" && element.value === "")
//         console.log("it's an empty textfield")
// }
// }

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    alert("Valid email address!");
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

</script>

<form name="contact" onsubmit="return checkForm();" action="https://docs.google.com/forms/d/e/1FAIpQLSet8fvT5o_ySm-t8AhYzSYupVEnMF09ORL5o3R5S1WTb9Zdwg/formResponse" method="post" id="contact-form" target="hidden_iframe">

<h3>Name*</h3>
<input name="entry.1240242567" type="text">

<h3>Email*</h3>
<input name="entry.1349114668" type="text">

<h3 class="antispam">Leave this empty*</h3>
<input class="antispam" type="text" name="url" />

<h3>Subject*</h3>
<input name="entry.337598320" type="text">

<h3>Message*</h3>
<textarea name="entry.954936580" rows="7" cols="50"></textarea>

<button class="btn btn--primary" value="Submit" type="submit">Submit</button>

</form>

