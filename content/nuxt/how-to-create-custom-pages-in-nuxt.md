---
title: How to create custom pages in nuxt
menu-title: Creating custom pages in nuxt
tutorial-section: getting-started
description: You will spend most of your time working in this directory to create pages for your Nuxt app
summary: You will spend most of your time working in this directory to create pages for your Nuxt app.
keywords:
  - using nuxt custom pages in nuxt
  - managing different pages in nuxt
  - how does nuxt create pages
feature:
  image: /uploads/posts/javascript/nuxt-logo.svg
  alt: How to create custom pages in nuxt
cardImage:
  image: /uploads/twitter/javascript/nuxt-tutorials.png
  alt: How to create custom pages in nuxt
date: 2021-02-02T17:30:08.937Z
author: garywoodfine
tags:
  - nuxt
  - javascript
  - vue
  - jamstack
video:
  link: asdfsdfasdf
  description: asdfasdf
  alt: asdfsdfasdf
  platform: lbry
next:
    url: getting-started-with-nuxt
    title: "Getting started with nuxt"
previous:
    title: "How to use Nuxt layouts"
    url: using-nuxt-layout-folder
order: 4
---

We have previously discussed [how to use and create custom layouts in nuxt](/using-nuxt-layout-folder "How to use Nuxt layouts | Geek.I.Am")
 and we learned how useful how helpful they are in helping you design and change the general look and feel of your 
website.  The `pages` directory is the directory to create all your application views and routes.  Nuxt iterates 
through all the files and directories in this folder to automatically create the router configuration for  you.

Every Page component is a Vue component but Nuxt adds special attributes and functions to make the development of your 
application as easy as possible. If we start with a very simple page example we'll develop it further as we move through
this tutorial.

```html

<template>
  <h1 >Hello World!</h1>
</template>

<script>
  export default {
    // page properties go here
  }
</script>

```