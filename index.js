// the body of the js goes here the DOM waits for all page to load before running js file
//adds function to the page so it reacts to users behaviors
document.addEventListener("DOMContentLoaded", function(){

    // pulled the element from html and store under message to work with in js
    const buttonShowMessage = document.querySelector("#show-message");
    // pulled the element from html and store under message to work with in js
    const message = document.querySelector("#message");
    //change the color of the text and the background of the reply to user
    message.style.color = "purple";
    message.style.backgroundColor = "yellow";
    //listen to the click on the button html
    buttonShowMessage.addEventListener("click", function(){

        //selected the from html
        const mood = document.querySelector("#mood");
        //change the user inputs to lowercase and remove spaces
        const moodValue = mood.value.toLowerCase().trim();

        // check if users input match the conditions then reply to users input
        if(moodValue === "happy"){
            message.innerText = "Wonderful to hear that you are feeling happy.";

        }else if(moodValue === "sad"){
            message.innerText = "Aah I'm sorry to hear that your sad.";

        }else if(moodValue === "tired"){
            message.innerText = "You need some rest.";

        }else{
            message.innerText = "You are not alone";

        }

    })

})