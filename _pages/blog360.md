---
layout: single
title: Blog 360
permalink: /blog360/
author_profile: true
# header:
#   image: /assets/img/agoraSS/agora_1.png
#   teaser: /assets/img/pragueCastle_thumbnail.png
gallery:
  - url: /assets/img/blog360/blog360_1.png
    image_path: assets/img/blog360/blog360_1.png
    alt: "Blog30 home view, Welcome to Blog360 on middle panel, Seattle and Oakland on left panel, Place menu on right, world map with waypoints on bottom panel"
  - url: /assets/img/blog360/blog360_2.png
    image_path: assets/img/blog360/blog360_2.png
    alt: "Blog30 Eastern Europe landing page, background of Prague Castle, world map highlighting Eastern Europe, and Germany and filler on right panel"
  - url: /assets/img/blog360/blog360_3.png
    image_path: assets/img/blog360/blog360_3.png
    alt: "Blog30 Germany view, background is the Berlin wall with different Germany photos on left to select"
  - url: /assets/img/blog360/blog360_4.png
    image_path: assets/img/blog360/blog360_4.png
    alt: "Blog30 the Hide menu feature, highlighting hide button"
  - url: /assets/img/blog360/blog360_5.png
    image_path: assets/img/blog360/blog360_5.png
    alt: "Blog30 the Hide panel feature, hide button clicked, button says show"
  - url: /assets/img/blog360/blog360_6.png
    image_path: assets/img/blog360/blog360_6.png
    alt: "Blog30 the Hide panel feature, if you're lost just look down, there's another show button"
  - url: /assets/img/blog360/blog360_7.png
    image_path: assets/img/blog360/blog360_7.png
    alt: "Blog30 street art of a detailed bull in black and white with red"
  - url: /assets/img/blog360/blog360_8.png
    image_path: assets/img/blog360/blog360_8.png
    alt: "Blog30 street art of a detailed dragon"
---

Blog 360 was built in 3 days on a solo hackathon project. I explore what the web looks like in virtual reality, a topic I've been looking to explore for a long time.

Check out the source code: [github.com/bitcoin-vr](https://github.com/robin-k-wilson/Blog360)

<h2>Screenshots</h2>

{% include gallery caption="Blog 360 screenshots." class="cover" %}

<a name="presentation"></a>

<h2>Presentation</h2>

Short 4 minute presentation of the navigation, UI, and fun 360 content.

{% include video id="j5AH63jVYcY" provider="youtube" %}

<h2>Future Expansion</h2>

1. Refactor -- Let's be honest, it was built in 3 days!
2. Integrate a redux store
3. Add back-end for storing blog posts
4. Create 2D interface for other people to create their own content
5. Plug this into large blog websites

<h2>Challenges and Take-Aways</h2>

Overall building this application was a fantastic experience. Being able to create a navigatable product in no time was gratifying. Next time, I would plan out the structure of the React-VR components once I hammer down the general UX. So it's easier to integrate additional content.
