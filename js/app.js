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

restart.addEventListener('click', function(){
	for(let i = 0 ; i < cards.length; i++){
		cards[i].classList.remove("match", "open", "show");
	}

	const rep = shuffle(array);

	for(let j = 0; j < cards.length; j++){
		const replace = document.innerHTML ="<i class =\"" + rep[j] + "\"></i>";
		cards[j].firstElementChild.outerHTML = replace;
	}
});


/*
 *This loop is the click event for return the card selected and check matching with the seconds card
 *and get number of move
 */

for(let i = 0 ; i < cards.length; i++){
cards[i].addEventListener("click", function() {
	cards[i].classList.add("show", "open");
	const show = document.querySelectorAll(".show")
 

	if(show.length = 2){

		if(show[0].innerHTML === show[1].innerHTML){
		show[0].classList.add("match");
		show[1].classList.add("match")
			move += 1;
			return move;}

		else{setTimeout(function(){show[0].classList.remove("show", "open");
			show[1].classList.remove("show", "open")}, 500);
			move += 1;
			return move;};
	};

	if(show.length = 4){

		if(show[2].innerHTML === show[3].innerHTML){
		show[2].classList.add("match");
		show[3].classList.add("match")	
			move += 1;
			return move;}

		else{setTimeout(function(){show[2].classList.remove("show", "open");
			show[3].classList.remove("show", "open")}, 500);
			move += 1;
			return move;};
	};

	if(show.length = 6){

		if(show[4].innerHTML === show[5].innerHTML){
		show[4].classList.add("match");
		show[5].classList.add("match")
			move += 1;
			return move;}

		else{setTimeout(function(){show[4].classList.remove("show", "open");
			show[5].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

	if(show.length = 8){

		if(show[6].innerHTML === show[7].innerHTML){
		show[6].classList.add("match");
		show[7].classList.add("match")
			move += 1;
			return move;}

		else{setTimeout(function(){show[6].classList.remove("show", "open");
			show[7].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

	if(show.length = 10){

		if(show[8].innerHTML === show[9].innerHTML){
		show[8].classList.add("match");
		show[9].classList.add("match")
			move += 1;
			return move;}

		else{setTimeout(function(){show[8].classList.remove("show", "open");
			show[9].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

	if(show.length = 12){

		if(show[10].innerHTML === show[11].innerHTML){
		show[10].classList.add("match");
		show[11].classList.add("match")
			move += 1;
			return move;}

		else{setTimeout(function(){show[10].classList.remove("show", "open");
			show[11].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

if(show.length = 14){

		if(show[12].innerHTML === show[13].innerHTML){
		show[12].classList.add("match");
		show[13].classList.add("match")
			move += 1;
			return move;}

		else{setTimeout(function(){show[12].classList.remove("show", "open");
			show[13].classList.remove("show", "open")}, 500)
			move += 1;
			return move;;};
	};

if(show.length = 16){

		if(show[14].innerHTML === show[15].innerHTML){
		show[14].classList.add("match");
		show[15].classList.add("match");
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
  * THe timer
  */
var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
deck.addEventListener('click', chronoStart);
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
	document.getElementById("chronotime").value = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
	start = new Date()
	chrono()
};


deck.addEventListener('click', function(event){
	 event.preventDefault();
	count.insertAdjacentHTML("beforeend", String(move));
	});