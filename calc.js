window.onload = webpage_loaded;
	
var operator_array = ["plus","minus","multiply","divide","sin","equals"];
var left;
var right;
var operator_pressed;

function webpage_loaded(){
	//this is a list of listeners for each button that can be pressed,  all numbers
	//mult,dvide, add, subtract, sin, equals
	document.getElementById("0").addEventListener("click", calculate);
	document.getElementById("1").addEventListener("click", calculate);
	document.getElementById("2").addEventListener("click", calculate);
	document.getElementById("3").addEventListener("click", calculate);
	document.getElementById("4").addEventListener("click", calculate);
	document.getElementById("5").addEventListener("click", calculate);
	document.getElementById("6").addEventListener("click", calculate);
	document.getElementById("7").addEventListener("click", calculate);
	document.getElementById("8").addEventListener("click", calculate);
	document.getElementById("9").addEventListener("click", calculate);

	document.getElementById("plus").addEventListener("click", calculate);
	document.getElementById("minus").addEventListener("click", calculate);
	document.getElementById("multiply").addEventListener("click", calculate);
	document.getElementById("divide").addEventListener("click", calculate);
	

	document.getElementById("equals").addEventListener("click", calculate);
	document.getElementById("answer").addEventListener("click", calculate);

	document.getElementById("sin").addEventListener("click", calculate);

	


	
}

function calculate(){
	//since computing is done 2 at a time, 
	//thats what we're gonna do
	

	calc_display = document.getElementById("calc_display");
	if(parseInt(calc_display.innerHTML) == 0){

		
		calc_display.innerHTML = this.id
	}else{
		calc_display.innerHTML += this.id
	}
		
	alert(parseInt(calc_display.innerHTML).innerHTMLlength);
	
	
	/*
	if (operator_array.includes(this.id)) {
		operator_pressed = 1;
	}else{
		operator_pressed = 0;
	}

	if (operator_pressed == 0) {
		//we know we are still pressing left side
		left = this.id
		alert("left side")
	}else{
		right = this.id
		alert("right side")
	}
	*/
}

