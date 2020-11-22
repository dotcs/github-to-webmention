export default `<!doctype html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
<meta name="author" content="Keith J. Grant">
<meta name="pinterest" content="nopin">
<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
<meta name="theme-color" content="#1a3c4d"><link rel="stylesheet" href="/css/style.css">


<title>Resilient, Declarative, Contextual</title>

<link rel="apple-touch-icon" href="/images/apple-icon-144.png">
<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16.png">

<link rel="alternate" type="application/atom+xml" title="Posts" href="/posts/index.xml">
<link rel="alternate" type="application/atom+xml" title="Notes" href="/notes/index.xml">

<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@keithjgrant">

<meta name="twitter:image" content="https://keithjgrant.com/images/2018/standout-citrus.jpg">
<meta name="og:title" content="Resilient, Declarative, Contextual">
<meta name="twitter:description" content="I’ve spent a lot of time thinking about what defines a CSS mindset. Some people seem to “get” it, and others don’t. It’s always felt to me that if I could put my finger on that, maybe CSS would make m"><meta name="twitter:widgets:theme" content="light">
<meta name="twitter:widgets:link-color" content="#f59f00">
<meta name="twitter:widgets:border-color" content="#f1f3f5">

<link rel="self" href="https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/" />
<link rel="hub" href="https://keithjgrant.superfeedr.com/" />
<link rel="pingback" href="https://webmention.io/keithjgrant.com/xmlrpc" />
<link rel="webmention" href="https://webmention.io/keithjgrant.com/webmention" />
<link rel="authorization_endpoint" href="https://indieauth.com/auth" />
<link rel="token_endpoint" href="https://tokens.indieauth.com/token" />
<link rel="micropub" href="https://micropub.keithjgrant.com/micropub/main" />

<link rel="preload" href="/fonts/glober-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/fonts/glober-xbold.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/fonts/calendas_plus-webfont.woff2" as="font" type="font/woff2" crossorigin="anonymous">

<link rel="canonical" href="https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/">
<script type="text/javascript" src="/js/index.js" async></script>
<meta name="generator" content="Hugo 0.36.1" />

</head>
<body>
  <svg display="none" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <symbol id="icon-comment" viewBox="0 0 100 125">
      <title>comment</title><path d="M100,54.37A20.18,20.18,0,0,1,84,74.5,24.72,24.72,0,0,1,79,75C71.66,75,64.35,75,57,75a3.2,3.2,0,0,0-1.92.72q-12.43,11-24.82,22c-0.19.18-.41,0.34-0.84,0.69V75H27.69c-3.56-.1-7.16.15-10.65-0.36A20,20,0,0,1,.1,55.08q-0.2-16.75,0-33.52c0.14-11.29,9.14-20,20.59-20,16-.05,32.07,0,48.11,0,3.48,0,7,0,10.45,0,10.66,0,18.88,7,20.54,17.57a31,31,0,0,1,.19,4.92C100,34.16,100,44.26,100,54.37Z" fill="currentColor"/>
    </symbol>

    <symbol id="icon-heart" viewBox="0 0 100 125">
      <title>heart</title><path d="M49.99,96.266c4.246-2.908,50.016-34.809,50.016-63.154c0-17.711-10.822-29.378-26.424-29.378  c-14.357,0-22.389,13.18-23.582,15.29c-1.194-2.109-9.225-15.29-23.582-15.29c-15.603,0-26.425,11.667-26.425,29.378  c0,28.345,45.724,60.246,49.97,63.154H49.99z" fill="currentColor"/>
    </symbol>

    <symbol id="icon-repost" viewBox="0 0 32 40">
      <title>repost</title><path d="M17,22H9v-6h3c1.071,0,2-0.847,2-2c0-0.75-0.391-1.234-1-2L9,7.188C8.391,6.469,7.813,6,7,6S5.609,6.469,5,7.188L1,12  c-0.609,0.766-1,1.25-1,2c0,1.153,0.929,2,2,2h3v8c0,1.104,0.896,2,2,2h10c1.104,0,2-0.896,2-2S18.104,22,17,22z M30,16h-3V8  c0-1.104-0.896-2-2-2H15c-1.104,0-2,0.896-2,2s0.896,2,2,2h8v6h-3c-1.071,0-2,0.847-2,2c0,0.75,0.391,1.234,1,2l4,4.813  C23.609,25.531,24.188,26,25,26s1.391-0.469,2-1.188L31,20c0.609-0.766,1-1.25,1-2C32,16.847,31.071,16,30,16z" fill="currentColor"/>
    </symbol>
  </defs>
</svg>

<header class="main-header">
  <div class="h-card  p-author">
    <h1 class="title-bar">

      <a class="u-url" href="/">
        <span class="p-name">Keith J. Grant</span>
      </a>
    </h1>
    <img class="title-avatar u-photo" src="/images/keithjgrant.jpg"/>
  </div>

  <nav class="main-header__nav top-nav">
    <ul class="nav-links">
      <li><a href="/posts/">Posts</a></li>
      <li><a href="/notes/">Notes</a></li>
      <li><a href="/talks/">Talks</a></li>
      <li><a href="/projects/">Projects</a></li>
      <li class="nav-links__external"><a href="https://www.manning.com/books/css-in-depth">CSS in Depth</a></li>
    </ul>
  </nav>
</header>



    <main class="l-article h-entry js-main">
      <div class="l-article__inner">
        <article>

    <h1 class="main-title p-name"><a class="u-url" href="https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/">
      Resilient, Declarative, Contextual
    </a></h1>









  <p class="post-date"><date class="dt-published">08 Jun 2018</date></p>


    <img class="banner-image" src="/images/2018/standout-citrus.jpg" alt="A bunch of lemon slices. One has bright pink flesh intead of yellow like the rest." style="object-position: 50% 60%">


  <div class="article show-embeds e-content">
    <p>I’ve spent a lot of time thinking about what defines a CSS mindset. Some people seem to “get” it, and others don’t. It’s always felt to me that if I could put my finger on that, maybe CSS would make more sense to those who have struggled with it. One piece of my motivation in writing <a href="https://www.manning.com/books/css-in-depth">CSS in Depth</a> was to try to articulate some of those things.</p>

<p></p>

<p>Today I want to take a different tack. I want to look at three key characteristics of CSS that set it apart from conventional programming languages: it’s resilient; it’s declarative; and it’s contextual. Understanding these aspects of the language, I think, is key to becoming proficient in CSS.</p>

<h2 id="css-is-resilient">CSS is resilient</h2>

<p>If you were to randomly delete a chunk of code out of a JavaScript file, the app or page using it would almost certainly come crashing to a halt and much of the script (if not the page as a whole) would become useless. If you do the same thing to CSS, you might not even notice. Almost everything apart from that specific section of code will continue to work as intended.</p>

<p>We call this <em>resilience</em>. HTML and CSS were specifically designed to be fault-tolerant. If there’s a problem, the browser won’t throw an error; instead, it will ignore that part of the code and keep on going.</p>

<p>This may seem absurd from a debugging perspective: if it doesn’t throw errors, how do you know what went wrong? But this is an essential piece to how CSS works. It’s woven into the fabric of the language itself. It may take some getting used to, I admit. Once you understand this, though, you can safely use features that aren’t supported in all browsers. This is what makes progressive enhancement possible.</p>

<p>Consider this example of a grid layout. It works in browsers that support grid, and it works in browsers that don’t support grid. It will be slightly imperfect in those that don’t support grid (the exact sizes of the items will probably vary), but it will still layout the page in roughly the same way:</p>

<pre><code class="language-css">.portfolio {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}

.portfolio__item {
  display: inline-block;
  max-width: 600px;
}
</code></pre>

<p>A browser that doesn’t understand the two grid declarations will ignore them, and the other rules will do the work. And a browser that does understand grid will use the grid layout and ignore the <code>inline-block</code> declaration (because that’s how grid was designed to work). Jen Simmons half-jokingly calls this <a href="https://www.youtube.com/watch?v=u00FY9vADfQ">“Quantum CSS”</a>. You can take a feature of CSS and “use it and not use it at the same time. It works and it doesn’t work at the same time.”</p>

<p>This concept of “fallback” behavior is integral to using CSS, but it is a foreign concept in most conventional programming languages.</p>

<h2 id="css-is-declarative">CSS is declarative</h2>

<p>In JavaScript, you give specific, step-by-step instructions how to make something happen. In CSS, you tell the browser what you want to have happen, and it works out the how. This is extremely important to understand. If you get it right, CSS will <a href="https://adactio.com/journal/13831">do all the hard work for you</a>! And if you get it wrong, you’ll be fighting against the grain of the language and you will be frustrated at every turn.</p>

<p>Writing CSS is effectively setting up a system of constraints. You don’t tell the browser where to put every single element on the page; you tell it how much space to put between them and let it sort out where they belong. You don’t tell it (or at least shouldn’t tell it) how tall to make a container; you let it figure that out at render time when it knows the contents of the container, which other styles are applied, and how much width is available in the viewport.</p>

<p>There are too many variables to consider. The point of CSS is to make it so you don’t have to worry about them all. Define some constraints. Let the language work out the details.</p>

<h3 id="a-simple-example">A simple example</h3>

<p>Let’s consider this CSS for a moment: <code>font-size: 2em</code>. What does it do? “It increases the font size,” you say. But that’s not all. It also adjusts the line wrapping of text in the container, as fewer words will now fit on each line. That in turn will often increase the number of lines of text: so it will also increase the container’s height to contain the new lines of text. When the container’s height changes, anything beneath it on the page will be shifted down accordingly. Finally, it also specifies a value for the local meaning of <code>em</code>. Any other properties defined using ems will have their computed values updated to match.</p>

<p>That one declaration creates a whole slew of changes on the page. And they’re all exactly what you should want: the content will always fit, elements aren’t going to wind up overlapping oddly, and anything defined in terms of the font size (like padding, perhaps) will adapt. You don’t have to worry about those details. The browser makes all those calculations and does the work by default.</p>

<p>If you want to stop these things from happening, you can. You could cap the container height with a <code>max-height</code> and <code>overflow: auto</code>. You could redefine padding to be in rems or px so it doesn’t adapt to the local font size. This highlights an interesting part of writing CSS: sometimes you’re not telling the browser what to do; you’re effectively telling it what <em>not</em> to do.</p>

<h3 id="griddy-goodness">Griddy goodness</h3>

<p>Some of the newer features in CSS do even more. Flexbox and Grid are prime examples of this. With just a few declarations, you can build a grid layout that is extremely flexible and “just works”. You don’t have to worry about countless edge cases. You say, effectively “put these boxes in columns of about 400px wide” and it will do it for you. It takes about three lines of code.</p>

<p>If you were to do this imperatively, you would need to deal with all sorts of odd scenarios. What if there’s an extremely long word in one of the boxes? What if the viewport is very narrow? What if it’s very wide? What if one box has a ton of content and another contains just a few words? But chances are, in CSS, you don’t need to think about any of these things. All the hard thought for this has already gone into the spec, and the browser takes care of it for you. This is the power of a declarative language.</p>

<p>This does come with a trade-off: if the declarative language doesn’t support something you want to do (say, a “masonry” layout), you’re left relying on either odd hacks or JavaScript to help accomplish it. And for years, this sort of thing was a large part of CSS development. Thankfully, with the rise of Flexbox and Grid, we can do far more than we could in the past, without any hacks (and yes, floats were a hack). If this limitation still bothers you, I suggest you read up on <a href="https://www.smashingmagazine.com/2016/03/houdini-maybe-the-most-exciting-development-in-css-youve-never-heard-of/">CSS Houdini</a>, which is just beginning to land in browsers.</p>

<h2 id="css-is-contextual">CSS is contextual</h2>

<p>In the React era, we have embraced the extremely useful approach of modular, component-based development. CSS best-practices do this as well, with BEM and SMACSS and CSS-in-JS. I don’t want to belittle this, because this is an essential way of thinking when building large-scale applications. But I think it’s equally important to acknowledge that CSS is not 100% modular, nor should it be.</p>

<p>There are two reasons for this. First, and most obvious, is that your app should have some global styles. You will almost always want to set a default typeface and font size at the page level. These values will then be inherited by all descendant elements that don’t explicitly override them. You will also want certain aspects of your design to apply repeatedly throughout the page, such as theme colors, border radii, box shadows, and common margin sizes. More localized styles on the page will then assume these global styles are in place.</p>

<p>Second, and more subtle, is the way CSS and your styling decisions are informed by the surrounding context of the page. Consider applying the following CSS to an element:</p>

<pre><code class="language-css">.the-thing {
  position: absolute;
  top: 10px;
  left: 10px;
}
</code></pre>

<p>What will this code do? Without knowledge of where the element is in the DOM and what styles are applied to the rest of the page, there is no way to know. Absolute positioning is done relative to the nearest positioned ancestor; applying it means different things depending on which ancestor, if any, has positioning applied.</p>

<p>Furthermore, how you can (or cannot) stack one element in front of another is going to be highly dependent on where the two are positioned in the DOM. Shuffling items around in the DOM can cause drastic effects on the way items fit together and stack. This is why document flow and stacking contexts are a vital (and sometimes complicated) topics.</p>

<p>The contextual nature of CSS is also due in part to the way design works. If an engineer designs a bridge, you can’t just look at the blueprint and say, “this is all good except this one beam here; go ahead and take that out”. Removing that beam has ramifications on the structural integrity of the whole thing. Similarly, changing one part of a design can have ramifications on how other items on the screen are perceived. Frequently, you will need to style multiple elements together, in conjunction.</p>

<p>If you make the heading in a tile bigger, for instance, it becomes more prominent to the user and therefore makes other items on the screen seem less important. The restrictions aren’t about physics as with the bridge, but there are subtle rules of “soft science” that impact human perception. The parts of the page render in a physical space on screen, and the realities of the physical world (and how we perceive it) are important to be aware of.</p>

<p>We like to architect software using <a href="https://freecontent.manning.com/modular-css/">principles of modularity and encapsulation</a>. This makes sense in the world of code, because code is complicated and this breaks the problem up into manageable sizes. But we should also be aware that it isn’t always perfect. In CSS, we can never completely disregard what’s going on outside a given module.</p>

<h2 id="summary">Summary</h2>

<p>These three aspects make CSS different than conventional programming languages. These differences may feel foreign, but it’s these differences that make CSS so powerful. And it’s my suspicion that developers who embrace these things, and have fully internalized them, tend to be far more proficient in CSS.</p>
  </div>


</article>


    <div class="interaction-alert loading-indicator loading-indicator--standalone" id="comments-loader">
  Loading interactions…
</div>
<div class="post-interaction is-hidden" id="comments">
  <div class="tabs">
    <button class="tabs__reply js-tab" aria-controls="pane-replies">
      <svg viewBox="0 0 100 125">
  <desc>comment</desc>
  <path d="M100,54.37A20.18,20.18,0,0,1,84,74.5,24.72,24.72,0,0,1,79,75C71.66,75,64.35,75,57,75a3.2,3.2,0,0,0-1.92.72q-12.43,11-24.82,22c-0.19.18-.41,0.34-0.84,0.69V75H27.69c-3.56-.1-7.16.15-10.65-0.36A20,20,0,0,1,.1,55.08q-0.2-16.75,0-33.52c0.14-11.29,9.14-20,20.59-20,16-.05,32.07,0,48.11,0,3.48,0,7,0,10.45,0,10.66,0,18.88,7,20.54,17.57a31,31,0,0,1,.19,4.92C100,34.16,100,44.26,100,54.37Z" fill="currentColor"/>
</svg>

      <span id="reply-count">replies</span>
    </button>
    <button class="tabs__like js-tab" aria-controls="pane-likes">
      <svg viewBox="0 0 100 125">
  <desc>heart</desc>
  <path d="M49.99,96.266c4.246-2.908,50.016-34.809,50.016-63.154c0-17.711-10.822-29.378-26.424-29.378  c-14.357,0-22.389,13.18-23.582,15.29c-1.194-2.109-9.225-15.29-23.582-15.29c-15.603,0-26.425,11.667-26.425,29.378  c0,28.345,45.724,60.246,49.97,63.154H49.99z" fill="currentColor"/>
</svg>

      <span id="like-count">likes</span>
    </button>
    <button class="tabs__repost js-tab" aria-controls="pane-shares">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="400 60 380 200" width="380" height="200"><path d=" M 570 220 L 490 220 L 490 160 L 520 160 C 530.71 160 540 151.53 540 140 C 540 132.5 536.09 127.66 530 120 L 490 71.88 C 483.90999999999997 64.69 478.13 60 470 60 C 461.87 60 456.09000000000003 64.69 450 71.88 L 410 120 C 403.91 127.66 400 132.5 400 140 C 400 151.53 409.29 160 420 160 L 450 160 L 450 240 C 450 251.04 458.96 260 470 260 L 570 260 C 581.04 260 590 251.04 590 240 C 590 228.96 581.04 220 570 220 Z  M 760 160 L 730 160 L 730 80 C 730 68.96 721.04 60 710 60 L 610 60 C 598.96 60 590 68.96 590 80 C 590 91.03999999999999 598.96 100 610 100 L 690 100 L 690 160 L 660 160 C 649.29 160 640 168.47000000000003 640 180 C 640 187.5 643.91 192.34000000000003 650 200 L 690 248.13 C 696.09 255.31 701.88 260 710 260 C 718.12 260 723.91 255.31 730 248.12 L 770 200 C 776.09 192.34000000000003 780 187.5 780 180 C 780 168.47000000000003 770.71 160 760 160 Z " fill="currentColor"/></svg>

      <span id="share-count">shares</span>
    </button>
  </div>
  <div class="tab-pane " id="pane-replies" aria-controlled-by="tab-replies">
    <h3>Replies</h3>
    <form id="webmention-form" class="inline-form content" method="post" action="https://webmention.io/keithjgrant.com/webmention">
      <input type="hidden" name="target" value="https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/" />
      <label for="reply-url">Have you written a <a href="https://indieweb.org/responses">response</a> to this? Let me know the URL:</label>
      <div class="inline-form__inputs">
        <input type="text" id="reply-url" name="source" placeholder="https://example.com/my-post" />
        <button type="submit" id="webmention-submit">Send Webmention</button>
      </div>
      <p class="form-alert is-hidden"></p>
    </form>
    <ul class="replies" id="replies"></ul>
  </div>
  <div class="tab-pane" id="pane-likes" aria-controlled-by="tab-likes">
    <h3>Likes</h3>
    <ul class="replies replies--short" id="likes"></ul>
  </div>
  <div class="tab-pane" id="pane-shares" aria-controlled-by="tab-shares">
    <h3>Shares</h3>
    <ul class="replies replies--short" id="shares"></ul>
  </div>
</div>

<template id="reply-template">
  <li class="h-entry">
    <div class="comment">
      <div class="comment__author reply p-author">
        <a class="reply__bar u-url js-source" href="">
          <div class="reply__author reply__author p-author js-author-name" href=""></div>
          <div class="reply__date js-date" href=""></div>
        </a>
        <a class="reply__avatar u-author js-author" href="">
          <img class="u-photo js-avatar" src=""/>
        </a>
      </div>
      <div class="comment__content js-content e-entry"></div>
    </div>
  </li>
</template>

<template id="like-template">
  <li class="h-entry">
    <div class="reply h-card p-author">
      <a class="reply__bar u-url js-source" href="">
        <div class="reply__author reply__author p-name js-author-name" href=""></div>
        <div class="reply__date js-date" href=""></div>
      </a>
      <a class="reply__avatar u-author js-author" href="">
        <img class="u-photo js-avatar" src=""/>
      </a>
    </div>
  </li>
</template>


<p class="image-credit">Banner image by

      <a href="https://www.pexels.com/photo/sliced-of-citrus-lemons-997725/">rawpixel</a>.
    </p>
        <footer class="bottom-container">
  <h3>Recent posts</h3>
  <div class="recent-posts"><a href="https://keithjgrant.com/posts/2018/09/wont-you-be-my-neighbor/">Won’t You Be My Neighbor</a><a href="https://keithjgrant.com/posts/2018/09/getting-started-with-micropub/">Getting started with Micropub</a><a href="https://keithjgrant.com/posts/2018/03/html5-sectioning-and-landmark-elements/">HTML5 Sectioning and Landmark Elements</a></div>
  <p class="text-right"><a href="/posts">See all posts</a></p>
</footer>

      </div>
    </main>

  <footer class="footer">
  <div class="footer__inner">
    <div class="text-center footer-logo">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="24.086 18.5 225.289 198.375">
  <desc>Owl logo</desc>
  <path d=" M 111.875 109.5 C 107.379 99.42 81.407 27.648 78.375 18.5 C 60.833 35.333 59.833 52.667 63.125 72.75 C 55.5 65.333 50.167 60.333 42.625 52.5 C 29.167 74.333 35.167 100.667 47.125 116.75 C 37.833 114.333 32.5 113.333 24.125 111.75 C 23.167 142.333 39.833 163 68.667 172 C 50.333 212.333 109.333 227 135.875 204.875 C 138.375 211 142.518 215.111 148.875 216.875 C 147.625 198.875 159.125 203.875 165.875 204.625 C 163.125 197.125 158.625 193.25 154.875 189.125 C 205.667 180.333 243.667 149 249.375 110.25 C 243 112 238 113.333 231.625 114.75 C 240.667 98.667 247.131 81.15 235.125 51.25 C 230.375 57.133 186.412 111.428 177.875 121 C 165.25 101.5 135.375 92.125 111.875 109.5 Z  M 161 120.75 C 139.5 99 122.069 113.223 117.5 132 C 113.732 147.483 124.25 161.25 141.5 163.5 C 158.75 165.75 170.375 155 173.375 147.25 C 176.375 139.5 180.375 119.5 161 120.75 Z " fill-rule="evenodd" fill="currentColor"/>
</svg>

    </div>
    <div class="split">
      <div class="split__left">
        <p><strong>&copy; 2015&ndash;2018 Keith J. Grant. All rights reserved.</strong></p>
        <p>This site supports <a href="https://webmention.net/">webmention</a>. Built with <a href="http://gohugo.io/">Hugo</a> and hosted on <a href="https://www.netlify.com/">Netlify</a>.</p>
      </div>
      <div class="split__right">
        <ul class="footer-links">
          <li><a href="/posts/index.xml">Posts&nbsp;RSS&nbsp;feed</a></li>
          <li><a href="/notes/index.xml">Notes&nbsp;RSS&nbsp;feed</a></li>
          <li class="footer-links__icon"><a href="https://twitter.com/keithjgrant" class="svg-link" rel="me">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="80 80 250 240"><title>Twitter logo</title><path fill="currentColor" d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/></svg>

          </a>
          <a href="https://github.com/keithjgrant" class="svg-link" rel="me">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 47.999998 48.000002">
  <title>Github logo</title>
  <path class="st0" d="M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z" id="path20" clip-rule="evenodd" fill="currentColor" fill-rule="evenodd"/>
</svg>

          </a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

<script>if (document.location.hostname !== 'localhost') {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-37381912-2', 'auto');
  ga('send', 'pageview');
}</script>

</body>
</html>
`;
