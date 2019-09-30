window.onload = webpage_loaded;
var special_operator_array = ["sin","root"];
var left=0; //left side of computation
var right=0; //right side of computation
var operator_pressed=0;
var which_operator_pressed; //saves which operator is pressed
var answer=0;
var special_operator_pressed=0;

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
	document.getElementById("answer").addEventListener("click", get_answer);
	document.getElementById("clear").addEventListener("click", clear);

	document.getElementById("sin").addEventListener("click", operator);
	document.getElementById("root").addEventListener("click", operator);
}

function operator(){
	//after an operator has been pressed, we come here
	//since computation is always 2 elements at a time
	//after an operator has been pressed, 
	//the elements pressed after the operator
	//will be computed with the elements pressed before
	
	if (special_operator_array.includes(this.id)) {
		special_operator_pressed = 1;
	}
	
	which_operator_pressed = this.id;

	if (special_operator_pressed==0) {
		operator_pressed = 1;
		calc_display.innerHTML = "0";
		
	}else{
		compute();
	}
}

//stores the elements before an operator
//is pressed
function compute(){
	//replaces the 0 in beginng
	//with elements pressed
	calc_display = document.getElementById("calc_display");

	//sin, cos, tan, root, has not been pressed
	if (special_operator_pressed==0){
		//the operator has not been pressed, +,-,divide, multiply
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
	}else{
		//sin, cos, root has been pressed
		if(parseInt(calc_display.innerHTML) >= 0){
			calc_display.innerHTML = which_operator_pressed +"(";	
			
		}else{
			if (left==0) {
				left = this.id;
				calc_display.innerHTML+=left;
			
			}else{
				calc_display.innerHTML += this.id;
				left += this.id;
				
			}			
		}		
	}	
}
	
function calculate(){

	if (special_operator_pressed==0){
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
	
		}else{

		alert("special calculate");
		switch (which_operator_pressed) {
			case "sin":
				answer = Number(Math.sin(parseInt(left))).toFixed(10) ;
				break;
			case "root":
				answer = Number(Math.sqrt(parseInt(left)).toFixed(10));
				break;
		}
				
	}
	operator_pressed=0;
	special_operator_pressed = 0;
	calc_display.innerHTML = answer;
	left = answer;
}

function get_answer(){
	alert("get answer works");
	calc_display.innerHTML += answer;
	left = answer;
}

function clear(){
	alert("clear works");
	 left=0; 
	 right=0; 
	 operator_pressed=0;
	 which_operator_pressed=""; 
	 answer=0;
	 special_operator_pressed=0
	 calc_display.innerHTML="0"

}

//computes sin, cos, root...
function special_compute(){
	
	calc_display = document.getElementById("calc_display");

}
