window.onload = webpage_loaded;
	
var operator_array = ["plus","minus","multiply","divide","sin","equals"];
var left; //left side of computation
var right; //right side of computation
var operator_pressed=0;
var which_operator_pressed; //saves which operator is pressed
var answer=0;


function webpage_loaded(){
	//this is a list of listeners for each button that can be pressed,  all numbers
	//mult,dvide, add, subtract, sin, equals
	document.getElementById("0").addEventListener("click", compute);
	document.getElementById("1").addEventListener("click", compute);
	document.getElementById("2").addEventListener("click", compute);
	document.getElementById("3").addEventListener("click", compute);
	document.getElementById("4").addEventListener("click", compute);
	document.getElementById("5").addEventListener("click", compute);
	document.getElementById("6").addEventListener("click", compute);
	document.getElementById("7").addEventListener("click", compute);
	document.getElementById("8").addEventListener("click", compute);
	document.getElementById("9").addEventListener("click", compute);

	document.getElementById("plus").addEventListener("click", operator);
	document.getElementById("minus").addEventListener("click", operator);
	document.getElementById("multiply").addEventListener("click", operator);
	document.getElementById("divide").addEventListener("click", operator);
	

	document.getElementById("equals").addEventListener("click", calculate);
	document.getElementById("answer").addEventListener("click", calculate);

	document.getElementById("sin").addEventListener("click", calculate);
	
}

function operator(){
	//after an operator has been pressed, we come here
	//since computation is always 2 elements at a time
	//after an operator has been pressed, 
	//the elements pressed after the operator
	//will be computed with the elements pressed before
	operator_pressed = 1;
	calc_display.innerHTML = "0"
	which_operator_pressed = this.id;
	
}

//stores the elements before an operator
//is pressed
function compute(){
	//replaces the 0 in beginng
	//with elements pressed
	calc_display = document.getElementById("calc_display");

	//the operator has not been pressed, 
	//so elements are saved to left side
	if (operator_pressed == 0) {
		if(parseInt(calc_display.innerHTML) == 0){
			calc_display.innerHTML = this.id;
			left = calc_display.innerHTML;
		}else{
			calc_display.innerHTML += this.id;
			left = calc_display.innerHTML;
		}
	
	}else{
		if (parseInt(calc_display.innerHTML)==0) {
			calc_display.innerHTML = this.id;
			right = calc_display.innerHTML;
		}else{
			calc_display.innerHTML += this.id;
			right = calc_display.innerHTML;
		}
		
	}

	alert("left side is"+ left);
	alert("right side is"+ right);
}
	
	
function calculate(){
	
	
	if (which_operator_pressed == "plus") {
		
	}

	switch (which_operator_pressed) {
		case "plus":
			answer = parseInt(left) + parseInt(right);
			break;
		case "minus":
			answer = parseInt(left) - parseInt(right);
			break;
		case "multiply":
			answer = parseInt(left) * parseInt(right);
			break;
		case "divide":
			answer = parseInt(left) / parseInt(right);
			break;
	
		}
	calc_display.innerHTML = answer;
}


	


