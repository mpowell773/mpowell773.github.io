//Make scripts load after html
$(() => {


/*-----------------------------------*/
// Variables used throughout document
/*-----------------------------------*/
const bodyMove = $('html, body');

/*------------------------------------------------*/ 
//useful functions to run inside of other functions
/*------------------------------------------------*/ 

//function to be able to delay execution in other functions 
// tutorial: https://masteringjs.io/tutorials/fundamentals/wait-1-second-then
const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
  }

 //move to specific part of webpage
 const linkMove = (section) => {
    bodyMove.animate({ 
        scrollTop: section.offset().top - 60 }, 1000);
}

/*--------------*/
//Landing Section
/*--------------*/

const showLandingText = () => {
    delay(500).then ( () => {$('h1').fadeIn(500)});
    delay(1500).then ( () => {$('h2').slideDown()});
}

showLandingText();



const canvas = $('#canvas')
const context = canvas[0].getContext('2d');


//https://ourcodeworld.com/articles/read/49/draw-points-on-a-canvas-with-javascript-html5
//Great tut on getting creating a dot
//jQuery was really struggling with the getBoundingClientRect() so I used some vanilla js here
function getPosition(event){
    //this code grabs the width and height of the header and then sets the canvas width and height to that.
    let headerArea = document.getElementById('landing-page').getBoundingClientRect();

    let headerAreaX = headerArea.right - headerArea.left;
    let headerAreaY = headerArea.bottom - headerArea.top;

    canvas.attr('width', headerAreaX);
    canvas.attr('height', headerAreaY);
    
    //this section sets canvas X and Y so that the ripple function can properly draw the circles where the click happened
    let rect = document.getElementById('canvas').getBoundingClientRect();
    console.log(event.clientY, rect.top)
    console.log(event.clientX, rect.left)
    let x = event.clientX - rect.left; 
    let y = event.clientY - rect.top; 
    ripple(x,y);
}

const ripple = (x,y) => {
    
   const pointSize = 3;
   context.fillStyle = 'red'
   context.beginPath(); //Start path
   context.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
   const point = context.fill(); 

    // setTimeout(() => event.target.remove($rippleElement), 500);
}





canvas.on('click', (event) =>{
    getPosition(event);
});


/*------------------*/
// nav bar integration
/*------------------*/

//logo
const logo = $('#logo');

logo.on('click', () => {
    //spin the die
    logo.addClass('spin');
    //move to top of website
    delay(500).then( () => bodyMove.animate({ scrollTop: 0 }, 1000));
    //remove class so the die spins again
    delay(1000).then( () => logo.removeClass('spin'));
  
})

// About Me
$('#about-me-link').on('click', (event) => {
    //prevent hyperlink default behavior
    event.preventDefault();
    linkMove($('#about'));
})

//Projects
$('#projects-link').on('click', (event) => {
    event.preventDefault();
    linkMove($('#projects'));
})

//Skills
$('#skills-link').on('click', (event) => {
    event.preventDefault();
    linkMove($('#skills'));
})

//Contact
$('#contact-link').on('click', (event) => {
    event.preventDefault();
    linkMove($('#contact'));
})

//
//Footer Button to Top
// not technically nav bar but still navigation related
const backUpButton = $('#back-to-top-button')

backUpButton.on('click', () => {
    bodyMove.animate({ scrollTop: 
        0 }, 1000);
});

//Sticky Nav Bar
//when user is scrolling, executes navGetStuck
window.onscroll = () => {
    navGetStuck()};

const navbar = $('nav');
// hamster
const stickyBar = navbar.offset().top - 100;

//refactored w3's function  using jQuery functionality :: runs both sticky bar and displaying and hiding the nav bar
const navGetStuck = () =>  {
    if (window.scrollY >= stickyBar) {
        $('#nav-wrap').css('visibility', 'visible');
        navbar.addClass('sticky');
        navbar.slideDown();
   
    }   else if (window.scrollY <= stickyBar) {
            $('#nav-wrap').css('visibility', 'none');
            navbar.removeClass('sticky');
            navbar.hide();
            
        } 
}
    
// Next step to try to get jarring -ness out of the show and hide functionality


/*----------------*/
// Projects section
/*---------------*/

//About page text
const showAbout = (event) => {
    //targeting p element to change... grossly
    const targetAboutText= $(event.target).parent().parent().siblings('p');
    
    //conditional logic to see whether or not text is displayed
    if (targetAboutText.css('display') === 'none') {
        targetAboutText.fadeIn();
    } else {
        targetAboutText.fadeOut();
    }
}

//make buttons do the thing
$('#about-button-1').on('click', showAbout);
$('#about-button-2').on('click', showAbout);
$('#about-button-3').on('click', showAbout);

//Links
$('#link-button-1').on('click', () => { 
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
})

$('#link-button-2').on('click', () => { 
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
})

$('#link-button-3').on('click', () => { 
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley");
})




});

