array_of_pizzas=["Greek Pizza","Hawaiian Pizza", "New York Style", "Chicago-Style Pizza", "Californie-Style Pizza", "Pepperoni"];
function getmenu(){
   var menulist;
   menulist="<ol class='menulist'>";
   array_of_pizzas.sort();
   for(i=0;i<array_of_pizzas.length;i++){
       menulist=menulist+'<li>'+array_of_pizzas[i]+'</li>';
   }
   menulist=menulist+'</ol>';
   document.getElementById("display_menu").innerHTML=menulist;
}
function add_item(){
    var pizza=document.getElementById("add_item").value;
    array_of_pizzas.push(pizza);
    array_of_pizzas.sort();
    var sections;
    sections="<section class='cards'>";
    for(i=0;i<array_of_pizzas.length;i++){
        sections=sections+'<div id="cards">'+'<img src="pizzaimg.png"/>'+'</div>';
    }
 sections=sections+'</section>';
 document.getElementById("display_addedmenu").innerHTML=sections;   
}