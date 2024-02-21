function replace_vars(prefix, vars) {
	const elements = document.getElementsByClassName("has-vars");
	for (const [k, v] of vars) {
		for (let i = 0; i < elements.length; i++) {
			elements[i].innerHTML = elements[i].innerHTML.replace(prefix + k, v);
		}
	}
}

// sacrifices must be made to get a job.
replace_vars('$', new Map([
	["FULLNAME", "Brendan Lewis"],
	["USERNAME", "craftablescience"],
	["HACK_FLUFFYSNAKE_LINK", "<a href='https://steamcommunity.com/id/FluffySnake/' target='_blank' rel='noopener noreferrer'>FluffySnake</a>"],
]));
