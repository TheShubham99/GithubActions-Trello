//const trello_api_key = process.env.TRELLO_API_KEY;
//const trello_api_token = process.env.TRELLO_API_TOKEN;

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

  function getCardId(ListID, cardName){
    var trelloCardId =''; 
    var a=0;
    $.getJSON('https://api.trello.com/1/lists/' + ListID + '/cards', function (trelloList) {

        $.each(trelloList, function (index, trelloCards) {
            const url = trelloCards.url + '.json?fields=name';
            $.getJSON(url, function (trelloCard) {
              a+=1;
                if(trelloCard.name==cardName)
                { 
                 // a+=1;
                 console.log("11debug"+trelloCardId+"c"+a);
                  trelloCardId=trelloCard.id;  
                  
                }      
            });
        });
    });

    console.log("debug"+trelloCardId+"c"+a);
    return trelloCardId;
}

function test(){
    console.log("Test");
}

  