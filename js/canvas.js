/*Este script crea  el diseño de 
*canvas
*/
	var c=document.getElementById("sobremi");
	var cxt=c.getContext("2d");

	cxt.fillStyle=("Black");
	cxt.beginPath();
	cxt.arc(50,25,20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
//End valores variables