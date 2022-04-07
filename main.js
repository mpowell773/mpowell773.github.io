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

//My horrifying animation section for ripple effect

const canvas = $('#canvas')

//https://ourcodeworld.com/articles/read/49/draw-points-on-a-canvas-with-javascript-html5
//Great tut on getting creating a dot

//https://www.youtube.com/watch?v=gm1QtePAYTM&t=2499s&ab_channel=TraversyMedia
//Super useful crash course on canvas 

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

//array to hold different color shades of ripple
    const colorRipple = [
        'rgba(0, 150, 150, 0.03)',
        'rgba(0, 76, 76, 0.03)',
        'rgba(0, 102, 102, 0.03)',
        'rgba(0, 30, 30, 0.03)'

    ];

    const random = Math.floor(Math.random() * colorRipple.length);
    
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
    navGetStuck();
};

const navbar = $('nav');
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
    
/*----------------*/
// Projects section
/*---------------*/

//About page text
const showAbout = (event) => {
    //targeting p element to change
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
    window.open("https://mpowell773.github.io/react-api-project/");
})

$('#link-button-2').on('click', () => { 
    window.open("https://thepumalovers.github.io/project-planning-client/#/");
})

$('#link-button-3').on('click', () => { 
    window.open('https://www.youtube.com/watch?v=J9wDerqLpM4&ab_channel=MattPowell');
})

/*------------*/
//Form Section
/*------------*/

$('#contact-button-linkedin').on('click', () => { 
    window.open("https://www.linkedin.com/in/matthew-scott-powell/");
})

$('#contact-button-github').on('click', () => { 
    window.open("https://github.com/mpowell773?tab=repositories");
})

$('#contact-button-resume').on('click', () => { 
    window.open("./website-photos/matt-powell-resume.pdf");
})


});

