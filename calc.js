var buttons = document.getElementsByTagName("div.button");
document.getElementById("1").onclick = function(e){
	alert("tes");
};

var buttonsCount = buttons.length;
for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
        alert(this.id);
    };
}