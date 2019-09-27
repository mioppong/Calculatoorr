function myFunction() {
  //document.getElementById("demo").style.backgroundColor = "red";
  document.getElementById("calcDisplay").innerHTML++;
}

function myFunction2() {
 
  var a=parseInt(document.getElementById("foo").value);

  switch (true){
	case (a>89): 
		answer="A+";
		break;
	case (a>79): 
		answer="A";
		break;
	default:
		answer="F";
  }
  
  document.getElementById("output").innerHTML=answer; 

}
