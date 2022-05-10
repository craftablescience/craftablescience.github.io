let rickEnabled = false;
const rick = new Konami(() => {
	if (rickEnabled) return;
	rickEnabled = true;
	document.getElementById("rickroll").play();
});

let secretEnabled = false;
const secret = new Konami(() => {
	document.getElementById("profile-picture").style.transition = "transform 0.5s linear";
	if (secretEnabled) {
		// flip secret photo to profile photo
		document.getElementById("profile-picture").style.transform = "rotateY(90deg)";
		setTimeout(() => {
			document.getElementById("profile-picture").src = "images/about/xenia.png";
			document.getElementById("profile-picture").style.transform = "rotateY(0deg)";

			// replace secret title with title
			document.title = document.title.replace("Laura", "Brendan");

			// replace secret text with profile text
			replace_vars(new Map([
				["Laura Lewis",	"Brendan Lewis"],
				["Laura",		"Brendan"]
			]), "");
		}, 520);
	} else {
		// flip profile photo to secret photo
		document.getElementById("profile-picture").style.transform = "rotateY(90deg)";
		setTimeout(() => {
			document.getElementById("profile-picture").src = "images/about/xenia_trans.png";
			document.getElementById("profile-picture").style.transform = "rotateY(0deg)";

			// replace title with secret title
			document.title = document.title.replace("Brendan", "Laura");

			// replace profile text with secret text
			replace_vars(new Map([
				["Brendan Lewis",	"Laura Lewis"],
				["Brendan",			"Laura"]
			]), "");
		}, 520);
	}
	secretEnabled = !secretEnabled;
});
secret.pattern = "7665858265";
// mobile users should not see the secret
secret.iphone.unload();
