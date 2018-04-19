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
 window.addEventListener("load", function reset(){
	for(let i = 0 ; i < cards.length; i++){
		cards[i].classList.remove("match", "open", "show");
	}

	const rep = shuffle(array);

	for(let j = 0; j < cards.length; j++){
		const replace = document.innerHTML ="<i class =\"" + rep[j] + "\"></i>";
		cards[j].firstElementChild.outerHTML = replace;
	}

	move = 0;
	count.innerHTML = `number of moves : ${move}`;
});

restart.addEventListener('click', function reset(){
	for(let i = 0 ; i < cards.length; i++){
		cards[i].classList.remove("match", "open", "show");
	}

	const rep = shuffle(array);

	for(let j = 0; j < cards.length; j++){
		const replace = document.innerHTML ="<i class =\"" + rep[j] + "\"></i>";
		cards[j].firstElementChild.outerHTML = replace;
	}

	move = 0;
	count.innerHTML = `number of moves : ${move}`;
});


/*
 *This loop is the click event for return the card selected and check matching with the seconds card
 *and get number of move
 */

for(let i = 0 ; i < cards.length; i++){
cards[i].addEventListener("click", function() {
	cards[i].classList.add("show", "open");
	const show = document.querySelectorAll(".show")


	if(show.length == 2){

		if(show[0].innerHTML === show[1].innerHTML){
		show[0].classList.add("match");
		show[1].classList.add("match");
		show[0].classList.remove("show");
		show[1].classList.remove("show");
			move += 1;
			return move;
		;}

		else{setTimeout(function(){show[0].classList.remove("show", "open");
			show[1].classList.remove("show", "open")}, 500);
			move += 1;
			return move;};
	};

	if(show.length == 4){

		if(show[2].innerHTML === show[3].innerHTML){
		show[2].classList.add("match");
		show[3].classList.add("match");
		show[2].classList.remove("show");
		show[3].classList.remove("show");
			move += 1;
			return move;}

		else{setTimeout(function(){show[2].classList.remove("show", "open");
			show[3].classList.remove("show", "open")}, 500);
			move += 1;
			return move;};
	};

	if(show.length == 6){

		if(show[4].innerHTML === show[5].innerHTML){
		show[4].classList.add("match");
		show[5].classList.add("match");
		show[4].classList.remove("show");
		show[5].classList.remove("show");
			move += 1;
			return move;}

		else{setTimeout(function(){show[4].classList.remove("show", "open");
			show[5].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

	if(show.length == 8){

		if(show[6].innerHTML === show[7].innerHTML){
		show[6].classList.add("match");
		show[7].classList.add("match");
		show[6].classList.remove("show");
		show[7].classList.remove("show");
			move += 1;
			return move;}

		else{setTimeout(function(){show[6].classList.remove("show", "open");
			show[7].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

	if(show.length == 10){

		if(show[8].innerHTML === show[9].innerHTML){
		show[8].classList.add("match");
		show[9].classList.add("match");
		show[9].classList.remove("show");
		show[8].classList.remove("show");
			move += 1;
			return move;}

		else{setTimeout(function(){show[8].classList.remove("show", "open");
			show[9].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

	if(show.length == 12){

		if(show[10].innerHTML === show[11].innerHTML){
		show[10].classList.add("match");
		show[11].classList.add("match");
		show[10].classList.remove("show");
		show[11].classList.remove("show");
			move += 1;
			return move;}

		else{setTimeout(function(){show[10].classList.remove("show", "open");
			show[11].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

	if(show.length == 14){

			if(show[12].innerHTML === show[13].innerHTML){
			show[12].classList.add("match");
			show[13].classList.add("match");
			show[12].classList.remove("show");
			show[13].classList.remove("show");
				move += 1;
				return move;}

			else{setTimeout(function(){show[12].classList.remove("show", "open");
				show[13].classList.remove("show", "open")}, 500)
				move += 1;
				return move;;};
		};

	if(show.length == 16){

			if(show[14].innerHTML === show[15].innerHTML){
			show[14].classList.add("match");
			show[15].classList.add("match");
			show[14].classList.remove("show");
			show[15].classList.remove("show");
				move += 1;
				return move;
		}

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
	document.getElementById("chronotime").value = hr + ":" + min + ":" + sec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	start = new Date()
	chrono()
};
chronoStart();
/*
 *This is Move Counter
 */
deck.addEventListener('click', function(){

	count.innerHTML = `number of moves : ${move}`;
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
	if(move < 20){
		star1.style.color = "black";
		star2.style.color = "black";
		star3.style.color = "black";
	}
	else if (move < 30){
		star3.style.color = "grey";
		star1.style.color = "black";
		star2.style.color = "black";
	}
	else if (move < 40){
		star3.style.color = "grey";
		star2.style.color = "grey";
		star1.style.color = "black";
	}
	else{
		star1.style.color ="grey"
		star2.style.color = "grey";
		star3.style.color = "grey";
	};
};


/*
 *pop up
 */
const congrat = document.querySelector(".congrat");
const finalTime = document.querySelector("#chronotime").value;

deck.addEventListener('click', function(){
	const match = document.querySelectorAll('.match');
if(match.length == 16){popup();}
});

let popup = function final(){
	congrat.style.display = "initial";
	lvl();
	congrat.innerHTML = `Well done!!! <br>
	You did it in : ${finalTime} <br>
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
	button.addEventListener("click",function(){again();});
	};



/*
 * event for click on "play again"
 */


function again(){
	for(let i = 0 ; i < cards.length; i++){
		cards[i].classList.remove("match", "open", "show");
	}

	const rep = shuffle(array);

	for(let j = 0; j < cards.length; j++){
		const replace = document.innerHTML ="<i class =\"" + rep[j] + "\"></i>";
		cards[j].firstElementChild.outerHTML = replace;
	}

	move = 0;
	count.innerHTML = `number of moves : ${move}`;
	congrat.style.display = "none";
};