let rickEnabled = false;
const rick = new Konami(() => {
	if (rickEnabled) return;
	rickEnabled = true;
	document.getElementById("rickroll").play();

	for (let card of document.getElementsByClassName("card")) {
		card.classList.add("fixed-background");
		card.style.backgroundImage = "url('https://c.tenor.com/4gPD1ccxrVgAAAAC/rick-ashley-dance.gif')";
	}
});
