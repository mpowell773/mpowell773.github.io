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
    //change color on click
    backUpButton.css('color','#0a4408' )
    bodyMove.animate({ scrollTop: 
        0 }, 1000);
    //change color back
    delay(250).then (() => {backUpButton.css('color','#0bff01' )})
});

//Sticky Nav Bar
//when user is scrolling, executes navGetStuck
window.onscroll = () => {
    navGetStuck()};

const navbar = $('nav');
const stickyBar = navbar.offset().top - 100;

console.log(stickyBar);

//refactored w3's function  using jQuery functionality :: runs both sticky bar and displaying and hiding the nav bar
const navGetStuck = () =>  {
    if (window.scrollY >= stickyBar) {
        
        navbar.addClass('sticky');
        navbar.slideDown();
   
    }   else if (window.scrollY <= stickyBar) {
            navbar.removeClass('sticky');
            navbar.slideUp();
        } 
}
    
// Next step to try to get jarring -ness out is to add the show and hide functionality


});