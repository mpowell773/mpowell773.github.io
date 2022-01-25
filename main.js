//Make scripts load after html
$(() => {

/*------------------------------------------------*/ 
//useful functions to run inside of other functions
/*------------------------------------------------*/ 

//function to be able to delay execution in other functions 
// tutorial: https://masteringjs.io/tutorials/fundamentals/wait-1-second-then
const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
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
    delay(500).then( () => $('html, body').animate({ scrollTop: 0 }, 1000));
    //remove class so the die spins again
    delay(1000).then( () => logo.removeClass('spin'));
  
})

//About Me
// const aboutMe = $('#about-me');

// aboutMe.on('click', () => {
//     aboutMe.animate({ scrollDown: 0 }, 1000);
// })




});