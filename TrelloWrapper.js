//const trello_api_key = process.env.TRELLO_API_KEY;
//const trello_api_token = process.env.TRELLO_API_TOKEN;

function include(file) { 
  
    var script  = document.createElement('script'); 
    script.src  = file; 
    script.type = 'text/javascript'; 
    script.defer = true; 
    
    document.getElementsByTagName('head').item(0).appendChild(script); 
    
  } 


const listId='5e9c0ee94f859847a991d53b';

function newCard(cardName,Description,ListID=listId){
    $.post("https://api.trello.com/1/cards",
    {
	  idList:ListID,
	  key: trello_api_key,
	  token: trello_api_token,
      name: cardName,
      desc: Description,
    },
    function(data,status){
      console.log("Status: " + status);
    });
  }

  function duplicateCard(cardName,Description,ListID=listId, id_Refernece_card='5e9c38fe2f546a0d524492bd'){
    $.post("https://api.trello.com/1/cards",
    {
	  idList:ListID,
	  key: trello_api_key,
	  token: trello_api_token,
      name: cardName,
      desc: Description,
      idCardSource: id_Refernece_card,
      keepFromSource: 'attachments'
    },
    function(data,status){
      console.log("Status: " + status);
    });
  }

  function getCardId(ListID=listId, cardName){
    include('https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'); 

    $.getJSON('https://api.trello.com/1/lists/' + ListID + '/cards', function (trelloList) {

        $.each(trelloList, function (index, trelloCards) {
            const url = trelloCards.url + '.json?fields=name';
            
            $.getJSON(url, function (trelloCard) {
                if(trelloCard.name==cardName)
                {
                    return trelloCard.id;
                }      
            });
        });
    });
}

function test(){
    console.log("Test");
}