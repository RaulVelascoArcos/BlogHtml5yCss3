//decrarcion de variables
	var micolor = "#00000";// gris principal
	var otrocolor="#B0C4DE";//gris para segundos
	var otrocolor2="#4169E1";// azul para inicio
	var escala = 0.5;
	/*
	*Icono de el boton sobre mi
	*/
	var c=document.getElementById("icono_sobremi");
	var cxt=c.getContext("2d");
	//cabeza
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	//cuerpo
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
	/*
	*Icono sobre el Contacto
	*/
	var c=document.getElementById("icono_contacto");
	var cxt=c.getContext("2d");
	//cabeza
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50-10,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	//cuerpo
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50-10,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
		//cabeza
	cxt.fillStyle=(otrocolor);
	cxt.beginPath();
	cxt.arc(escala*50+10,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	//cuerpo
	cxt.fillStyle=(otrocolor);
	cxt.beginPath();
	cxt.arc(escala*50+10,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
	/*
	*Icono  de Inicio
	cabeza*/
	var c=document.getElementById("icono_inicio");
	var cxt=c.getContext("2d");
	//primer circulo
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*40,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	//tercer circulo
	cxt.fillStyle=(otrocolor2);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*30,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	//segundo circulo
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	/*Icono de noticias
	*/
	var c=document.getElementById("icono_noticias");
	var cxt=c.getContext("2d");
	//cabeza
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	//cuerpo
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
