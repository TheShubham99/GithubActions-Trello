const actor = process.env.GITHUB_ACTOR;
const trello_api_key = process.env.TRELLO_API_KEY;
const trello_api_token = process.env.TRELLO_API_TOKEN;
const action_no = process.env.GITHUB_RUN_NUMBER;

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


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



