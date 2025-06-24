---
layout: ../../layouts/MarkdownPostLayout.astro

title: My Third Blog Post
author: Astro Learner
description: "I had some challenges, but asking in the community really helped!"
image:
  url: "https://docs.astro.build/assets/rays.webp"
  alt: "The Astro logo on a dark background with rainbow rays."
pubDate: 2025-06-11
tags: ["astro", "learning in public", "setbacks", "community"]
---

It wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!

I hope we do something with these soon because their presence is making me cringe.

Ok, so, I can apparently access the variables in the headers with double curly brace, like so:

- Author: {{author}}

Well, that didn't work. Why not?
Ah, because that's for HTML (which is to say. .astro), not for markdown. Not yet clear how to do it in markdown
