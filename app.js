const abrir = document.getElementById("boton");
const intro = document.getElementById("intro");
const final = document.getElementById("final");
const bgm = document.getElementById("bgm");

function abrirInvitacion(e) {
	e.preventDefault();
	
	bgm.muted = true;
	const p = bgm.play();
	if (p) 
	p.then(() => {
		bgm.pause();
		bgm.currentTime = 0;
		bgm.muted = false;
		
	    bgm.play().catch(err => alert("No funciona" + err.name));
	    
	}).catch(err => alert("bloqueado" + err.name));

	
	
	
	
	
	intro.classList.add("hidden");
	final.classList.remove("hidden");
	
	document.body.classList.remove("MA");
	document.body.classList.add("MI");
}

abrir.addEventListener("touchstart", abrirInvitacion, {passive: true});
abrir.addEventListener("click", abrirInvitacion);
