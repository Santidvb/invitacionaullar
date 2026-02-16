const abrir = document.getElementById("boton");
const intro = document.getElementById("intro");
const final = document.getElementById("final");
const bgm = document.getElementById("bgm");

function abrirInvitacion(e) {
	
	bgm.currentTime = 0;
	bgm.muted = false;
	
	bgm.play()
	   .then(() => {
		   
	intro.classList.add("hidden");
	final.classList.remove("hidden");
	
	document.body.classList.remove("MA");
	document.body.classList.add("MI");
})
.catch(err => {
	console.log("Error: " + err);
	alert("Toca de nuevo bro");
});
}

abrir.addEventListener("click", abrirInvitacion);
