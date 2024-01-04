function openNav() {

	var x = document.getElementById("nav");

	if (x.className === "nav") {
		x.className += " navjs"; 
		document.getElementById("linhatri").innerHTML = "&#10007;";
	}  

	else {
		x.className = "nav";
		document.getElementById("linhatri").innerHTML = "&#9776;";
	}


}