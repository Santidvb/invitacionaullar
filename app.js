const abrir = document.getElementById("boton");
const intro = document.getElementById("intro");
const final = document.getElementById("final");
const bgm = document.getElementById("bgm");

boton.addEventListener("click", async () => {
	intro.classList.add("hidden");
	final.classList.remove("hidden");
	
	document.body.classList.remove("MA");
	document.body.classList.add("MI");
 
    try{
		bgm.volume = 0.4;
		await bgm.play();
		} catch (e) {
			console.log("app de mierda", e);
		}
});
