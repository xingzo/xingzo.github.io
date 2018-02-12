# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) jQuery vs. JavaScript (60 mins)


| Timing | Type | Topic |
| --- | --- | --- |
| 5 min | [Intro to New Material](#jquery) | Benefits of jQuery |
| 5 min | [Independent Practice](#independent-practice) | jQuery vs. Javascript |
| 25 min | [Intro to New Material](#benefits) | Benefits of jQuery |
| 10 min | [Intro to New Material](#benefits-javascript) | Benefits of Plain Vanilla JS |
| 10 min| [Guided Practice](#guided-practice) | Converting from Vanilla JS to jQuery |
| 5 min | [Conclusion](#conclusion) |Q&A |

## Overview
- In this morning's session, we'll explore the different technologies used, process/approach, unsolved problems and some wins and challenges that went along in creating my personal about me portfolio site.


<a name="jquery"></a>
## Technologies and tools utilized:

#### Bootstrap
Utilized mainly the bootstrap.min.css file to apply responsive styling all over the website :

- Nav Bar
Completely bootstrap...bootstrap allowed for:

	Toggle to collapse the nav into a hamburger
	- Classes:
		- .collapse ( actual data-toggle)
		- .navbar-toggler ( applies styling ( adds the hamburger icon))
		- .nav-link (applied to every link or nav item)

	Highlight section when user scrolls to the corresponding section of the page
	-	Functions:
		- scrollspy()…only section of the site that uses bootstrap JavaScript file

		// Call a function scrollspy each time we scroll and target #nav-scroll |
		this is to highlight the current section
		 $('body').scrollspy({ target: '#nav-scroll' })

- Modal
Completely bootstrap:

	Modal appears when "About Me" button is clicked
	- Classes:
		- .modal (actual modal)
		- .fade (used as a transition effect, fade in the modal)
		- .bd-example-modal-lg (used for sizing, lg could be changed to sm)
		- .modal-body, .modal-header, modal-title, modal-footer,

- Responsiveness
Bootstrap made it easier to implement responsiveness across all devices but not all parts of the site rely on bootstrap for responsiveness

	Responsive youtube videos
	- Classes :
		- .embed-responsive
		- .col(uses flex boxes, grow)


	Other bootstrap responsive use cases
	- Footer


#### JavaScript/jQuery
JS and jQuery were necessary to manipulate the DOM and specifically in these areas:

	- Skills animation ( can be found in the about me modal( the icons fading in and out effect))
		- Functions
			- setInterval()
			- fadeout()
			- fadein()

	- Carousel that displays recent projects at the top of the home page

	- Scrollspy mentioned above in the nav bar

	- Racer game

#### HTML/css
Necessary Components in every website.
	s

## Process/Approach:

- Problem
	- I have all this creative content but I am missing a professional online presence to put them
	- Wordpress is what I've used in the past and I was never happy with the fact that I lack full control of the front/back end of my sites
	- Project 0 For WDI required either an about me site or racer game

- Solutions
	- Create an eye catching portfolio site and update it as I go along the WDI course to showcase all the skills I will amass
	- Picked the about me option for Project 0
	-	. checkout process and update their online inventory.

- Project Role
 - I worked individually as a front ent web developer and designer

- Duration
	- Still ongoing...

- Competitive Research

	- Competitive analysis of 3 other visual artists and web developers in my network
		- https://www.psdnym.com/
		- https://www.patricianderson.com/
		- https://www.misslaurairene.com
		- All my fellow WDI classmates personal websites

	- User Research (people who will be visiting my site)
		- Hiring Managers
		- Friends and Family
		- Personal clients
		- Prospect clients
		- Disabled users

- Other Steps
		- The base template I chose as a prototype was www.psdnym.com
		- I then conducted wire Frames based of that site and added some of my own features
		- Created a repo on GIT and started Semantic HTML to layout on page on Atom
		- Programmed top down so carausel -> navbar -> main content -> about me
		- Applied styling and placeholders as I went along
		- Last thing was making sure everything was responsive


## Unsolved Problems:		
		Feel free to check out my trello board for the about me site as this part gets updated frequently
		https://trello.com/b/zzB1qm9i/about-me-site


## Biggest Wins/Challenges:

			- Spinning CROWNS
			https://github.com/xingzo/xingzo.github.io/blob/master/assets/videos/logotrial.gif

			- Responsive website mockups
			Link for Macbook Mockup (PSD) ->
			https://www.pixeden.com/psd-mock-up-templates/the-new-macbook-psd-mockup

			Link for iPhone Mockup (Sketch) ->
			http://goodmockups.com/free-iphone-x-10-sketch-mockup/


		Snippets
			contact me

			```html
			<div class="btn btn-primary">
				<a href="mailto:kingsleynyaosi@gmail.com?Subject=Hello%20world" >Email me</a>
			</div>
			<div class="btn btn-primary">
				 <a href="tel:18325733473" >Call me</a>
			</div>
```





##### But wait, what do we mean by 'library'?

**A `library`** is just a collection of reusable methods that serve a particular purpose.


- There are tons of them: [https://www.javascripting.com/](https://www.javascripting.com/).
  - Some are suited for particular uses such as data visualization (D3.js), 3D imaging (Three.js), charts (Chart.js), autocomplete functionality (Typeahead.js), and more...

##### Library vs. Framework

s.  


<a name="independent-practice"></a>
## Independent Practice - jQuery vs. JavaScript (5 mins)
- Research the difference between jQuery and JavaScript.
- See if you can find at least two benefits of using each.

<a name="benefits"></a>
## Intro to New Material: Benefits of jQuery (25 mins)
Today, you'll learn about one of the most powerful tools in JavaScript: jQuery.

We'll see how jQuery simplifies common web development tasks and ensures that our code works in different browsers.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4738/Slide-3-jQuery.svg" width="250px">



### First Benefit: Cross-Browser Compatibility

<br>

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4740/Slide-5-Benefit-1.svg" width="550px">



#### Fallback Code


<img src="http://circuits-assets.generalassemb.ly/prod/asset/4743/Slide-10-Code-Block-Annotated.svg" width="550px">




### Second Benefit: Familiar Syntax

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4744/Slide-13-Benefit-2.svg" width="550px">

By this point, you might have noticed that JavaScript's syntax can be a bit tricky to read, write, and remember.

For example, writing out `document.getElementById('important')` to find an element with the id 'important' means creating a lot of code for a relatively simple task.

The jQuery library solves this by providing us with the `jQuery` function, which selects elements using our friendly CSS selector syntax.

It looks like this:

```js
jQuery('#important');
```

We'll take a deeper look at this syntax later today, but for now, just focus on getting an overview.

Here again, we are finding the element with the id `important`. Notice how, within the parentheses, we use the same syntax we would use to select an element with the id `important` in CSS: `#important`.

It's a lot easier than `document.getElementById('important')`, right?

You can also use a `$` instead of writing out 'jQuery' in the selector.

For example, `jQuery('#important')` can be written as `$('#important')`, with the `$` acting as the `jQuery` object.

```js
jQuery('#important') == $('important')
```

Let's take a look at some more examples of selecting elements.

See how our jQuery selectors (all highlighted in red) resemble the selectors in our CSS (also highlighted in red)?

It makes for a much friendlier, more accessible system.

![](http://circuits-assets.generalassemb.ly/prod/asset/4747/Slide-16-Chart.svg)


And that's just the tip of the iceberg. We can use _any_ of the selectors we know and love from CSS as our jQuery selectors.

_Note: In the previous examples, we used single quotations, but you can use double quotations if you like. It is simply a style preference, and it's completely up to you._


### Third Benefit: More Concise Code

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4746/Slide-16-Benefit-3.svg" width="550px">


You probably already noticed this as we were walking through browser compatibility and familiar syntax, but one of the biggest benefits of jQuery is that it allows us to make our code much more concise.


Just how does jQuery do it? Let's watch a [video](https://generalassembly.wistia.com/medias/qb34u4qxc1) to learn more.


There are even more ways jQuery can help us keep our code concise.

#### Method Chaining

jQuery allows us to chain methods together to accomplish our goals, making our code shorter and easier to understand.

We'll cover this more in a later lesson, but for now, just take a look at an example:


##### JavaScript

First, let's change the class name of the `li` to `task-complete`.

```js
document.getElementsByTagName('li')[0].className = 'task-complete';
```

Then, let's change the background color of the `li` to `blue`.

```js
document.getElementsByTagName('li')[0].style.backgroundColor = "blue";
```


##### jQuery

We can change the class name of the `li` to `task-complete` and the background color to blue — all in one line of code!

```js
$('li').addClass('task-complete').css('background-color', 'blue');
```


By using the list item, we're able to get as much out of one line of jQuery as we are out of two lines of JavaScript!

When we have multiple methods updating an element at once, it's called **method chaining**. Again, this is something we'll take a deeper dive into in a later lesson.

#### Updating Multiple Elements at Once

Another way that jQuery allows us to shorten our code and improve our workflow is by making it infinitely easier to update multiple elements at once.

Let's take a look and compare:

##### JavaScript

![](http://circuits-assets.generalassemb.ly/prod/asset/4748/Slide-24-JS-Code.svg)

Here, we first had to select all elements with the class circle, and then loop through those elements to update each individually.

##### jQuery

![](http://circuits-assets.generalassemb.ly/prod/asset/4749/Slide-24b-jQuery.svg)

Here, we selected all elements with the class _circle_ and updated them all at once.

Pretty cool, huh?

<a name="benefits-javascript"></a>
## Benefits of Plain Vanilla JavaScript (10 mins)
You might be wondering if there's ever a time to use "plain vanilla" JavaScript over jQuery in your project.

Let's compare the benefits of both methods:

![](http://circuits-assets.generalassemb.ly/prod/asset/5140/Slide-25-Benefits.svg)


The main benefits of using pure JavaScript are its speed and performance.

#### Speed

jQuery is a huge library. And even if you're not using _all_ of the features available, you still have to load in the entire library. jQuery adds another ~30kb to your response, which can slow the time it takes for a page to load.

This isn't usually too big of a worry; but for large-scale projects, it's something to keep in mind. On some networks (and in some countries), using jQuery could mean adding a few more milliseconds to your load time.

Take a look at this [article](https://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/) that compares the speed of jQuery vs. Vanilla JS selectors.


#### Performance

It can be easy to misuse jQuery.

For example, using jQuery's each loop (which we'll cover in a future lesson) instead of pure JavaScript for loops can sometimes be unnecessary and could have a negative impact on performance.

Some people have a tendency to automatically include jQuery, regardless of what they're doing.

Take a look at this Stack Overflow thread: [needsmorejquery.com/](http://needsmorejquery.com/).

When working on a project, it's always worthwhile to think through the most efficient way to achieve a task. Don't worry: In future lessons, when we cover methods that may be easily misused, we'll be sure to highlight their proper use cases.

<a name="guided-practice"></a>

## Guided Practice - Converting from Vanilla JS to jQuery (10 minutes)

> Instructor note:
>
> Demo the difference between Vanilla JS and jQuery by converting the code in [examples/color\_scheme\_switcher/js/main.js](examples/color_scheme_switcher/js/main.js) to jQuery.
>
> The solution can be found in [solutions/color\_scheme\_switcher\_solution/js/main.js](solutions/color_scheme_switcher_solution/js/main.js).

<a name="conclusion"></a>
## Conclusion (5 mins)

In this lesson, we took a look at some of the major benefits that using jQuery can have on our workflow.

Let's take a look at this [video](https://generalassembly.wistia.com/medias/rlslgthvo3) that summarizes the benefits of using jQuery.

Hopefully, all of this has gotten you excited about harnessing the power of jQuery while working on your own projects.

In the next lesson, we'll dig in and begin to write with jQuery. Are you ready?
