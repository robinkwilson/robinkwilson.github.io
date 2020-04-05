---
layout: single
permalink: /
date: 2019-10-19
author_profile: true
feature_row2:
  - image_path: /assets/img/articles/vrdemo.jpeg
    alt: 'High Fidelity VR Avatar 101 blueprint thumbnail'
    title: 'How to give the best VR demo: a guide and 5 tips from a professional VR demo specialist'
    excerpt: 'I share my experience to help others give the best VR demo possible. Watching for warning signs and how to fix them!'
    image_url: https://medium.com/@robin.kath.wilson/how-to-give-the-best-vr-demo-a-guide-and-5-key-tips-from-a-professional-vr-demo-specialist-2658247ea8e5
feature_row:
  - image_path: /assets/img/highfidelity/avatar101/avatar101_0.png
    alt: 'High Fidelity VR Avatar 101 blueprint thumbnail'
    title: 'Avatar 101 Hifi App'
    excerpt: 'Teach users how to customize their own avatar.'
    image_url: /highfidelity/#avatar101-hifi
    filters: 'hifi'

  - image_path: /assets/img/highfidelity/general/high-fidelity-logo.png
    alt: 'High Fidelity VR status indicator application thumbnail'
    title: 'Status Indicator Hifi App'
    excerpt: "No more awkward conversations with AFK user's avatars!"
    image_url: /highfidelity/#status-indicator-hifi
    filters: 'hifi'

  - image_path: /assets/img/highfidelity/sitPoint/sitPoint.PNG
    alt: ''
    title: 'Sit Script'
    excerpt: 'Sit in VR and desktop mode.'
    image_url: /highfidelity/#sit-script-hifi
    filters: 'hifi'

  - image_path: /assets/img/highfidelity/loudApp/loudAppIcon.png
    alt: ''
    title: 'Griefer Detector'
    excerpt: 'Mitigate open mics and disruptive noises.'
    image_url: /highfidelity/#griefer-detector-hifi
    filters: 'hifi'

  - image_path: /assets/img/highfidelity/voteApp/avatarcontest1.jpg
    alt: ''
    title: 'Vote Hifi App'
    excerpt: 'Vote for your favorite avatars and environments. Incorporates Google Scripts.'
    image_url: /highfidelity/#vote-app-hifi
    filters: 'hifi'

  - image_path: /assets/img/bitcoin/bitcoin_th.jpeg
    alt: 'Bitcoin-VR project thumbnail'
    title: 'Bitcoin-VR'
    excerpt: 'Deployed Bitcoin transaction visualization using React-VR and socket.io.'
    image_url: /bitcoinvr/
    filters: 'webVR'

  - image_path: assets/img/datavr/datavr_1.png
    alt: 'Data-VR project thumbnail'
    title: 'Data-VR'
    excerpt: 'Exploration into VR data visualizations and the early bitcoin-vr.'
    image_url: /datavr/
    filters: 'webVR'

  - image_path: /assets/img/blog360/blog360_1.png
    alt: 'Blog360 project thumbnail'
    title: 'Blog360'
    excerpt: '3-day Hackathon project experimenting with the web viewed in VR.'
    image_url: /blog360/
    filters: 'webVR'

  - image_path: /assets/img/agoraSS/agora_th.png
    alt: 'Agora project thumbnail'
    title: 'Agora, Chairs!'
    image_url: /agora/
    excerpt: 'The classiest chair selling e-commerce site built using React, Node.js, and bootstrap.'
    filters: 'misc'

  - image_path: /assets/img/blockchain/blockchain-th.png
    alt: 'Blockchain tech talk project thumbnail'
    title: 'Blockchain Tech Talk'
    excerpt: 'Presentation on the blockchain and its impact on the modern economy.'
    image_url: /blockchain/
    filters: 'misc'
---

<h1 class="text-center">Hi, I'm Robin!</h1>

<p class="text-center">VR Developer and Consultant</p>
<p class="text-center">Art and Story Driven Gamer | Growth Mindset Advocate | Artist | World Traveler</p>

I explore the overlap where technology connects with art, business, education, and enables a strong human connection.

I specialize in WebVR technologies and VR application design.

{% include feature_row2 %}

<h2 id="projects">Projects</h2>
<div>
  <a href="#" onclick="filterProjects(event, 'all')" class="btn btn--primary">All</a>
  <a href="#" onclick="filterProjects(event, 'hifi')" class="btn btn--primary">High Fidelity VR</a>
  <a href="#" onclick="filterProjects(event, 'webVR')" class="btn btn--primary">WebVR</a>
  <a href="#" onclick="filterProjects(event, 'misc')" class="btn btn--primary">Misc</a>
</div>

{% include feature_row %}

<div id="hidden" style="display: none"></div>

<h2 id="whats-new">What's New?</h2>

<p class="font-weight-bold no-margin">May 2019</p>
<p>Left <a href="https://variety.com/2019/digital/news/high-fidelity-layoffs-1203208860/">High Fidelity VR</a>. </p>

<p class="font-weight-bold no-margin">June 2019</p>
<p class="no-margin">Helped <a href="https://convrsate.weebly.com/">conVRsate</a> launch.</p>
<p>Left for Guilin, China to continue learning Mandarin Chinese.</p>

<p class="font-weight-bold no-margin">August 2019</p>
<p>Returned from China with HSK 2 level of Mandarin Chinese. </p>

<p class="font-weight-bold no-margin">Now</p>
<p>Passionate than ever to continue VR consulting and development.</p>

<h2 id="contact">Contact</h2>

I'd love to get in contact! Shoot me a message on [LinkedIn](https://www.linkedin.com/in/robinkwilson/).

<script>

const projectsElement = document.getElementsByClassName("feature__wrapper")[0];
const hiddenElement = document.getElementById("hidden");

function filterProjects(e, str) {
  e.preventDefault();

  if (str === "all") {
    while (hiddenElement.firstChild) {
      projectsElement.appendChild(hiddenElement.firstChild); // might be out of order
    }
    return;
  }

  var visibleProjects = projectsElement.getElementsByClassName("filter-item");
  var hiddenProjects = hiddenElement.getElementsByClassName("filter-item");

  var addToHidden = [...visibleProjects].filter(elem => elem.className.indexOf(str) === -1);
  var addToVisible = [...hiddenProjects].filter(elem => elem.className.indexOf(str) !== -1);

  while (addToHidden.length) {
    hiddenElement.appendChild(addToHidden[0]);
    addToHidden.shift();
  }
  while (addToVisible.length) {
    projectsElement.appendChild(addToVisible[0]);
    addToVisible.shift();
  }

}

</script>
