var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "http://code.jquery.com/jquery-2.2.1.min.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

function handler(){
   console.log('jquery added :)');
}



const actor = process.env.GITHUB_ACTOR;
const trello_api_key = process.env.TRELLO_API_KEY;
const trello_api_token = process.env.TRELLO_API_TOKEN;
const action_no = process.env.GITHUB_RUN_NUMBER;

function newIssue(cardName,Description){
    $.post("https://api.trello.com/1/cards",
    {
	  idList:'5e9c0ee94f859847a991d53b',
	  key: trello_api_key,
	  token: trello_api_token,
      name: cardName,
      desc: Description
    },
    function(data,status){
      console.log("Status: " + status);
    });
  }

newIssue('Issue:'+action_no,'by:'+actor);



