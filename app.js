//adding new item to list 
$('#js-shopping-list-form').on('submit', function(event) {
  event.preventDefault();
  addItem(state, $('#shopping-list-entry').val());
  renderList(state, $('.shopping-list'));
});

//this event invokes the function responsible for crossing the grocery list item if it's 'check' is clicked
$('.shopping-item-toggle').on('click', function(event) { //this is working 1.31
  //checkUncheck(event.target);
});

//this event invokes the function responsible for deleting item. 
$('.shopping-item-delete').on('click', function(event) { 
  removeItem(state, $('.shopping-item-delete').closest('.shopping-item').val());
});
  


var state = {
  items: []
};

//adds items to array
var addItem = function(state, item) {
  state.items.push({displayName: item, checkedOff: false});
};


//removes items from array
var removeItem = function(state, item) {
  state.items.splice(item, 1); //maybe I need to invoke the maps function again
  console.log(state);
}

//return of new item doesn't properly work e.g., check button doesn't work. (1.31 5:28AM). 
var renderList = function(state, element) {
  var itemsHTML = state.items.map(function(item) {
    return "<li>" +
      "<span class='shopping-item'>" + item.displayName + state.indexOf(items) + "</span>" +
      "<div class='shopping-item-controls'>" +
      "<button class='shopping-item-toggle'>" +
      "<span class='button-label'>check</span>" +
      "</button><button class='shopping-item-delete'>" +
      "<span class='button-label'>delete</span></button></div>" +
      "</li>";    
    });
  element.html(itemsHTML);
};


/*
//function responsible for chceking and unchecking grocery list item when user clicks on 'check' button. 
var checkUncheck = function(event) {
  console.log('hello' + (event).closest('span.shopping-item'));
  $(event).closest('li').toggleClass('shopping-item__checked'); //really weird how the span selector didn't work but the -li- selector did. 


/*
/function responsible for grocery item from webpage. This does not remove from array.
var deleteItem = function(event) {
  $(event).closest('li').remove('li');
};
*/

