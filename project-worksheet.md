# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Completed
|Day 1| Wireframes / Priority Matrix / Timeline | Completed
|Day 3| Core Application Structure (HTML, CSS, etc.) | Completed
|Day 4| MVP & Bug Fixes | Completed
|Day 5| Final Touches | Completed
|Day 6| Present | Incomplete


## Project Description

This project is specifically for creating a portfolio website that I can utilize to display future projects in class and later on professionally. I have noticed that I tend to like more minimalistic designs with some flavor of interactivity. Good examples of these designs include [Corey Hughart](https://coryhughart.com/) and [Gift Egwuenu](https://www.giftegwuenu.dev/).

## Wireframes

My wireframes are definitely focused on Mobile, with the key features being listed there. The Desktop (and Tablet sans 1 column) are more for layout purposes. 

- [Mobile 1](documentation-photos/wf-mobile-1.jpg)
- [Mobile 2](documentation-photos/wf-mobile-2.jpg)
- [Mobile 3](documentation-photos/wf-mobile-3.jpg)
- [Desktop](documentation-photos/wf-desktop.jpg)

## Time/Priority Matrix 

- [List](documentation-photos/prio-matrix-list.jpg)
- [Graph](documentation-photos/prio-matrix-graph.jpg)

My total list adds up to 17.5 hours, which I'm pretty sure is a low ball. I'm guessing that this is around 27-8 hours if I attempt all the details.

#### MVP 

- Build the layout of the site
- Style appropriately and note responsiveness
- Nav bar functionality
- Project links
- Basic animation of sections and nav bar items

#### PostMVP 

- Project about sections
- Contact section backend
- Skills icons
- Skills carousel

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| HTML Structure | H | 2hr | 2.5hr |
| Filling in Text | H | 2hr | 0 hr |
| Basic Section Styling | H | 3hr | 6hr |
| Regular Nav | H | 3hr | 3hr |  
| Project Links | H | 1.5hr|  .5hr | 
| Responsive | H | 3hr | 2hr | 
| Form Integration | M | 2hr| 1hr |
| Total | H | 15.5hrs| 14.5hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Show Nav after Intro Sreen| H | 2hr | 1hr | 
| Title Screen Interactivity | H | 3hr | 6hr | 
| Section Bar Animation| M | 2hr | .5hr|
| Project About Sections Interaction | H | 3hr | 2hr |
| Contact Section Backend | M | 3hr | 0hr |
| Skills Section | M | 1hr | 1.5hr |
| Skills Carousel | L | 3hr | 0hr |
| Footer Button | L | 1.5hr | 1.5hr |
| Nav Bar Underline Animation| M| 2hrs|  .5hr | 
| Total | H | 15.5hrs| 13hrs |

#### Additional Libraries
 
 - jQuery: Used for displaying and hiding elements as well as form input
 - fontawesome: Used for icons and placeholder logo
 - Google Fonts: Using roboto

#### Code Snippet

I've learned a little bit about promise functions while trying to add a delay to some of my function executions. I defined it in global scope so I could use it throughout my website.

```
const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }
```
logo.on('click', (event)=> {
    logo.addClass('spin');
    console.log('hamster');
    delay(1500).then( () => logo.removeClass('spin'));
  
})

For my little interactive events that happen on the landing page, I had to go to multiple resources and different tutorials and splice them all together. I'm sure a year from now, I'm going to look at this code and see a million ways to improve it, but I'm happy that I even got this to function in the first place.

```
function getPosition(event){
   
    //this code grabs the width and height of the header and then sets the canvas width and height to that.
    let headerArea = document.getElementById('landing-page').getBoundingClientRect();

    let headerAreaX = headerArea.right - headerArea.left;
    let headerAreaY = headerArea.bottom - headerArea.top;

     canvas.attr('width', headerAreaX);
     canvas.attr('height', headerAreaY);
    
    //this section sets canvas X and Y so that the ripple function can properly draw the circles where the click happened
    let rect = document.getElementById('canvas').getBoundingClientRect();
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    ripple(x, y);
}

const ripple = (x,y) => {
    //setting context as well as making sure we have canvas width and height defined within the function
   const context = document.getElementById('canvas').getContext('2d');
   let resetX = document.getElementById('canvas').width;
   let resetY = document.getElementById('canvas').height;

   //circle object to store some parameters
    const circle = {
        startX: x,
        startY: y,
        size: 3,
    }


    const colorRipple = [
        'rgba(0, 150, 150, 0.03)',
        'rgba(0, 76, 76, 0.03)',
        'rgba(0, 102, 102, 0.03)',
        'rgba(0, 30, 30, 0.03)'

    ];

    const random = Math.floor(Math.random() * 4);
    
    //function to draw circle and fill with color
    const drawCircle = () => {
        context.beginPath();
        context.arc(circle.startX, circle.startY, circle.size, 0, Math.PI * 2);
        context.fillStyle = colorRipple[random];
        context.fill();
    }  

    
    //animation
    function animate() {
       
        drawCircle();
       //logic to make the circle grow and then clear
        if (circle.size < 100) {
            circle.size += 5;
            requestAnimationFrame(animate);
        } else {
            delay(100).then( () => context.clearRect(0, 0, resetX, resetY));
            return;
        }

        
        
        
    }
    //gotta call the animate function
    animate();
} 

//make it all go clicky clicky
canvas.on('click', (event) =>{
    getPosition(event);
});

```
#### Issues and Resolutions

### Issue 1
I struggled with my border-radius on my footer causing the background to show below it. After about 30 minutes of trying some wild things with a div, I eureka'd and realized that there is top-left and top-right borders.

### Issue 2
Strange thing happened with my hyperlinks for my nav bar. I changed them to the following:
**ERROR**:   
```
<div>  
	<a href="#" id="about-me">About Me</a>
	<a href="#" id="projects">Projects</a>
	<a href="#" id="skills">Skills</a>
	<a href="#" id="contact">Contact</a>
</div>  
```

Which stretched my nav bar out significantly vertically. Going going back to my initial settings made the bar fine. 

*Update*: I derped and had ID names overlapping.

### Issue 3

You have to put things in QUOTES.

**ERROR**:   
```
main.js:118 Uncaught ReferenceError: project is not defined
    at HTMLButtonElement.showAbout (main.js:118:28)
    at HTMLButtonElement.dispatch (jquery-3.6.0.min.js:2:43064)
    at HTMLButtonElement.v.handle (jquery-3.6.0.min.js:2:41048)
showAbout	@	main.js:118
dispatch	@	jquery-3.6.0.min.js:2
v.handle	@	jquery-3.6.0.min.js:2
 
```

**RESOLUTION**: 
```
targetProject.addClass('project-opacity'); 
```
### Issue 4

I was having a "hitch" occur with my nav bar. Long story short, we wrapped the nav in a div, set that visibility to none initially, and then also needed to adjust the jQuery animation .slideUp() to hide.()

### Issue 5

I messed around with canvas for some touch screen interactivity on my landing page, and I was running into this error:

**ERROR**:   
```
jquery-3.6.0.min.js:2 Uncaught TypeError: canvas.getContext is not a function
    at HTMLDocument.<anonymous> (main.js:41:24)
    at e (jquery-3.6.0.min.js:2:30038)
    at t (jquery-3.6.0.min.js:2:30340)
 
```

The resolution was very simple and I'm not 100% sure why it was needed, but seems like it's some form of jQuery syntax that I don't know about yet.


**RESOLUTION**: 
```
const context = canvas[0].getContext('2d'); 
```
the \[0\] was missing and caused the error. 

*Update*: I still was having problems with jQuery and canvas, so the only jQuery I utilized during the ripple section was for the action of touching the canvas. For the rest, I used vanilla js selectors and it worked much more smoothly.

## Citations and References


### Reset browser CSS
I used http://meyerweb.com/eric/tools/css/reset/ to help reset my css margins and etc so I had a cleaner canvas to start on. I also have this referenced in my style.css file.

### Logo Spinning 

To figure out my spinning animation, I found this lovely example https://codepen.io/teerapuch/pen/vLJXeR .


### Scrolling page jumps

Super quick way to jump to top of webpage: https://stackoverflow.com/questions/4147112/how-to-jump-to-top-of-browser-page


### Sticky Nav

Sticky icky nav bar: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp


#### Ripple animation

Beginning the ripple animation by setting the canvas: https://www.mtmckenna.com/posts/2018/02/02/creating-a-canvas-overlay 

Great tut on getting creating a dot: //https://ourcodeworld.com/articles/read/49/draw-points-on-a-canvas-with-javascript-html5


//Super useful crash course on canvas: https://www.youtube.com/watch?v=gm1QtePAYTM&t=2499s&ab_channel=TraversyMedia

