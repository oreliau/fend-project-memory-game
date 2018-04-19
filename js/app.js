let cards = document.querySelectorAll(".card");
let array = ["fa fa-diamond","fa fa-paper-plane-o","fa fa-anchor",
"fa fa-bolt","fa fa-cube","fa fa-anchor","fa fa-leaf",
"fa fa-bicycle","fa fa-diamond","fa fa-bomb","fa fa-leaf",
"fa fa-bomb","fa fa-bolt","fa fa-bicycle","fa fa-paper-plane-o","fa fa-cube"];
const restart = document.querySelector('.restart');
const deck = document.querySelector(".deck");
let move = 0;

let count = document.querySelector(".move");


/*
 *This function close cards and shuffle the game
 */
function reset(){
	for(let i = 0 ; i < cards.length; i++){
		cards[i].classList.remove("match", "open", "show");
	}

	const rep = shuffle(array);

	for(let j = 0; j < cards.length; j++){
		const replace = document.innerHTML ="<i class =\"" + rep[j] + "\"></i>";
		cards[j].firstElementChild.outerHTML = replace;
	}

	move = 0;
	count.innerHTML = `moves : ${move}`;
	chronoStart();
}



/*
 * reset at the load of page and when you click on restart
 */
window.addEventListener("load", reset);

restart.addEventListener('click', reset);


/*
 *This loop is the click event for return the card selected and check matching with the seconds card
 *and get number of move
 */

for(let i = 0 ; i < cards.length; i++){
cards[i].addEventListener("click", function() {
	cards[i].classList.add("show", "open");
	const show = document.querySelectorAll(".show")

		for (let j = 2; j < 17; j += 2){
		if(show.length == j){

				if(show[j-2].innerHTML === show[j-1].innerHTML){
				show[j-2].classList.add("match");
				show[j-1].classList.add("match");
				show[j-2].classList.remove("show");
				show[j-1].classList.remove("show");
					move += 1;
					return move;
				;}

				else{setTimeout(function(){show[j-2].classList.remove("show", "open");
					show[j-1].classList.remove("show", "open")}, 500);
					move += 1;
					return move;};
			};

};
	


});
};


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


 /*
  * This is timer
  */

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0

restart.addEventListener('click', chronoStart);
chronoStart();

var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}



/*
 *This is Move Counter resfresh
 */
deck.addEventListener('click', function(){

	count.innerHTML = `moves : ${move}`;
	});


/*
 *Star Rating
 */
const stars = document.querySelector(".stars");

const star1 = document.querySelector(".star1").firstElementChild;
const star2 = document.querySelector(".star2").firstElementChild;
const star3 = document.querySelector(".star3").firstElementChild;

deck.addEventListener('click', function(){
	difficult();
});
restart.addEventListener('click', function(){
	difficult();
});


/*
 *change star if you do to much move
 */
function difficult(){
    if(move > 20 && move < 30 ){
        star3.style.color = "grey";
    }
    else if (move > 30 && move < 40){
        star2.style.color = "grey";
    }
    else if (move > 40){
        star1.style.color ="grey"
    }
};


/*
 *pop up
 */
const congrat = document.querySelector(".congrat");

deck.addEventListener('click', function(){
	const match = document.querySelectorAll('.match');
if(match.length == 16){popup();}
});

let popup = function final(){
	congrat.style.display = "initial";
	lvl();
	congrat.innerHTML = `Well done!!! <br>
	You did it in : ${document.getElementById("chronotime").innerHTML} <br>
	Your level is : ${level} stars <br>`;
	addbutton();
};


/*
 * function to get the value of the level
 */

let level = 0;
function lvl(){
	if (move < 20){
		level += 3;
		return level;
	}
	else if (move >= 20){
		level += 2;
		return level;	 
	}
	else if (move >= 30){
		level += 1;
		return level;
	}
	else if (move >= 40){
		level += 0;
		return level;
	};
};


/*
 * function for creat button
 */

function addbutton(){
	const button = document.createElement('input');
	button.type="submit";
	button.value="Play Again";
	button.className="button";
	congrat.appendChild(button);
	const mybutton = document.getElementsByClassName("button");
	button.addEventListener("click",again);
	};



/*
 * event for click on "play again"
 */


function again(){
	reset();
	congrat.style.display = "none";
};