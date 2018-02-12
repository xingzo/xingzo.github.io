# ![](https://xingzo.github.io/assets/images/xingzo crown white official watermark sm.png) Kingsley Nyaosi About Me site

## Overview
- In this morning's session, we'll explore the different technologies used, process/approach, unsolved problems and some wins and challenges that went along in creating my personal about me portfolio site.


<a name="jquery"></a>
## Technologies and tools utilized:

#### Bootstrap
Utilized mainly the bootstrap.min.css file to apply responsive styling all over the website :

- Nav Bar

Completely bootstrap

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

		```js
		$('body').scrollspy({ target: '#nav-scroll' })
		```


- Modal

Completely bootstrap

	Modal appears when "About Me" button is clicked
	- Classes:
		- .modal (actual modal)
		- .fade (used as a transition effect, fade in the modal)
		- .bd-example-modal-lg (used for sizing, lg could be changed to sm)
		- .modal-body, .modal-header, modal-title, modal-footer,

- Responsiveness

Bootstrap made it easier to implement responsiveness across all devices but not all parts of the site rely on bootstrap for responsiveness

	Responsive youtube videos
	- Classes:
		- .embed-responsive
		- .col(uses flex boxes, grow)


	Other bootstrap responsive use cases
	- Footer


#### JavaScript/jQuery

JS and jQuery were necessary to manipulate the DOM and specifically in these areas:

	- Skills animation ( can be found in the about me modal( the icons fading in and out effect))
		- Functions:
			- setInterval()
			- fadeout()
			- fadein()

	- Carousel that displays recent projects at the top of the home page

	- Scrollspy mentioned above in the nav bar

	- Racer game

#### HTML/css
	Necessary Components in every website

	Design principles
	- Dim effect on the background to create a movie feel inspired by latest tools such as "Atom"
	- Royal gold secondary color to match the gold mockups
	- Em's and % used to scale paddings, margins and fonts
	- 1 main css file to reduce file dependency on the overall site
	- Overall, a minimalstic design with all the important content in the center


## Process/Approach:

#### Problem
	- Owner of a surplus of creative content but missing a professional online presence to exhibit their work to the public
	- Lack full control of the front/back end of my sites due to utilizing wordpress
	- Project 0 For WDI required either an about me site or racer game

#### Solution
	- Create an eye catching portfolio site and update it as I go along the WDI course to showcase all the skills I will amass such as JavaScript and MERN stacks
	- Picked the about me option for Project 0

#### Project Role
 	- I worked individually as a front ent web developer and designer

#### Duration
	- Still ongoing...

#### Competitive Research

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

#### Spinning Crowns logo1
			[https://github.com/xingzo/xingzo.github.io/blob/master/assets/videos/logotrial.gif](https://github.com/xingzo/xingzo.github.io/blob/master/assets/videos/logotrial.gif))

#### Responsive website mockups

			Link for Macbook Mockup (PSD) ->
			[https://www.pixeden.com/psd-mock-up-templates/the-new-macbook-psd-mockup](https://www.pixeden.com/psd-mock-up-templates/the-new-macbook-psd-mockup))


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
