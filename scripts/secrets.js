let rickEnabled = false;
const rick = new Konami(() => {
	if (rickEnabled) return;
	rickEnabled = true;

	// play song
	document.getElementById("rickroll").play();

	// cards have rickroll background
	for (let card of document.getElementsByClassName("card")) {
		card.classList.add("fixed-background");
		card.style.backgroundImage = "url('https://c.tenor.com/4gPD1ccxrVgAAAAC/rick-ashley-dance.gif')";
	}

	// flip profile picture to rick
	const pfp = document.getElementById("profile-picture");
	pfp.style.transition = "transform 0.5s linear";
	pfp.style.transform = "rotateY(90deg)";
	setTimeout(() => {
		pfp.src = "https://camo.githubusercontent.com/912ab91c205f7809f1baa50945138b606ee98bb31614e97dc6a1544ee1a48d1d/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6479336a78686962612f696d6167652f75706c6f61642f76313538393533343232302f53637265656e73686f745f66726f6d5f323032302d30352d31355f31312d31322d35325f315f686c6a35616a2e706e67";
		pfp.style.transform = "none";
	}, 510);
});
