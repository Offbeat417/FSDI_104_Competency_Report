class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
    }

    display = function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy : ${this.energy}`;
    }

    attack = function(opponent,item){
        let newEnergy = opponent.energy - item.iHitPoints;
        opponent.energy=newEnergy;
        opponent.display();
        document.getElementById('console').innerHTML=`${this.name} is attacking ${opponent.name} with a  ${item.img}`;
        if (opponent.energy <=0){
            document.getElementById(opponent.id).innerHTML=`You Lose! Loser`;
            document.getElementById(this.id).innerHTML=`You Win! Winner...`;
        }

    }
}

//objects charatcters
const c1 = new Character("Mario", 100, "c1");
const c2 = new Character("Bowser", 100, "c2");

c1.display();
c2.display();


//Items code
class Item{
    constructor(iName,iHitPoints,img){
        this.iName=iName;
        this.iHitPoints=iHitPoints;
        this.img=img;
    }
}
//all items below are apart of the Items class
const item1 = new Item('Goomba',20,'<img class="item" src="Goomba.jpg">');
const item2 = new Item('Banana', 1, '<img class="item" src="banana.jpg">');
const item3 = new Item('BlueShell', 35, '<img class="item" src="blueshell.jpg">');
const item4 = new Item('FireFlower', 15, '<img class="item" src="fireflower.png">');
const item5 = new Item('GreenShell', 10, '<img class="item" src="greenshell.jpg">');
const item6 = new Item('RedShell', 15, '<img class="item" src="redshell.jpg">');
const item7 = new Item('Star', 17, '<img class="item" src="star.jpg">');

const items=[item1,item2,item3,item4,item5,item6,item7];






//general functions
const reset = function(){
    c1.energy=100;
    c2.energy=100;
    c1.display();
    c2.display();
}//we can use it without personalization without object


function selectItem(){
    let selection = Math.floor(Math.random()*7);
    return items[selection];
    //randomly selects the items you have created under class Item
    //the *7 dictates how many of the items you have randomly selected
}

console.log(selectItem());//just for the sake of making sure it works












//console.log(Math.floor(Math.random()*3));
//prints random number between 0-3