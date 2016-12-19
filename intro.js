/*Write a javascript file that will do the following:

    When the button is pushed, add an element to the list
    When the mouse goes over an item in the list, change the heading at the top to contain the text of the item
    When the mouse is no longer over an item in the list, change the heading back to "Hello World!"
    When an item on the list is clicked, remove it from the DOM

Add the following to your previous work:

    Add a second list to the html page, do not add elements to it.
    Create a second button.
    When the second button is pressed, the new list should have an item added that contains the next fibonacci number.
    For the mathematically inclined, you could add more lists that generate other numeric sequences if you like.*/

//thelist.addEventListener("mouseover", function() {console.log("bleh")});

//global variables
var list=document.getElementById("thelist");
var listItems=document.getElementsByTagName("li");
var head=document.getElementById("h");
var ogHeadHTML=head.innerHTML

var newListItem=function(){
    var x=document.createElement("li");
    x.innerHTML="new thing :O";
    listItemEvents(x);
    list.appendChild(x);
}
//function should be before eventlistener
b.addEventListener("click", newListItem);

//functions for list items
var changeHead=function(){
  head.innerHTML=this.innerHTML;
}
var originalHead=function(){
  head.innerHTML=ogHeadHTML;
}
var removeItem=function(){
  this.remove();
}

var listItemEvents=function(e){
  e.addEventListener("mouseover", changeHead);
  e.addEventListener("mouseout", originalHead);
  e.addEventListener("click", removeItem);
}

//goes thru list to add eventlisteners
for(i=0;i<listItems.length;i++){
  listItemEvents(listItems[i]);
}

var newFib=function(){

}

b1.addEventListener("click", newFib)
