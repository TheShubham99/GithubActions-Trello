const actor = process.env.GITHUB_ACTOR;
const trello_api_key = process.env.TRELLO_API_KEY;
const trello_api_token = process.env.TRELLO_API_TOKEN;
const action_no = process.env.GITHUB_RUN_NUMBER;

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

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

newIssue('Issue No #:'+action_no,'by:'+actor);



