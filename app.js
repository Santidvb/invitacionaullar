const boton = document.getElementById("boton");
const intro = document.getElementById("intro");
const final = document.getElementById("final");
const bgm = document.getElementById("bgm");

boton.addEventListener("pointerdown", () => {
   bgm.volume = 0.7;
   bgm.play().catch(e => alert("no suena bro" + e.name));
	   

	intro.classList.add("hidden");
	final.classList.remove("hidden");
	
	document.body.classList.remove("MA");
	document.body.classList.add("MI");
 
});
