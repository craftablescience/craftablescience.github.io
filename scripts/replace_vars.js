function replace_vars(vars, prefix = "$") {
	const elements = document.getElementsByClassName("has-vars");
	for (const [k, v] of vars) {
		for (let i = 0; i < elements.length; i++) {
			elements[i].innerHTML = elements[i].innerHTML.replace(prefix + k, v);
		}
	};
}

replace_vars(new Map([
	["FULLNAME",	"Brendan Lewis"],
	["FIRSTNAME",	"Brendan"],
	["LASTNAME",	"Lewis"],
	["USERNAME",	"@craftablescience"],
	["YEAR",		String(new Date().getFullYear())]
]));
