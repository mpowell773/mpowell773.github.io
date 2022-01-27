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



/* https://natclark.com/tutorials/javascript-ripple-effect/ Holy this tutorial missed a huge point about having everything wrapped in the ripple function. I had to go and check their source code LUL*/
const canvas = $('#canvas');

const ripple = (e) => {
    console.log('hamster')
    let width = e.target.offsetWidth;
    let height = e.target.offsetHeight;

    width >= height ? (height = width) : (width = height);

    const $rippleElement = $('<span>');
    e.target.append($rippleElement);

    $rippleElement.style = `
        height: ${height}px !important;
        left: ${e.pageX -e.target.offsetLeft - width / 2}px !important;
        top: ${e.pageY - e.target.offsetTop - height / 2}px !important;
        width: ${width}px !important;
        `.trim();

    $rippleElement.addClass(`ripple`);
    setTimeout(() => e.target.remove($rippleElement), 500);
}

canvas.on('click', ripple);


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

