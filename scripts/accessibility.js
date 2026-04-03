const Accessibility = {
	'Default': {
		font: {
			'--text-font': '"JetBrains Mono", monospace',
		},
	},
	'Accessible': {
		font: {
			'--text-font': '"EB Garamond", Helvetica, Arial, serif',
		},
	},
};

let current_font = 'Default';

function toggleFont() {
	current_font = current_font === 'Default' ? 'Accessible' : 'Default';
	const root = document.querySelector(":root");
	for (const [variable, value] of Object.entries(Accessibility[current_font].font)) {
		root.style.setProperty(variable, value);
	}
	const label = document.getElementById('accessibility-serif-font-label');
	if (current_font === 'Default') {
		label.innerHTML = label.innerHTML.replace('[x]', '[ ]');
	} else {
		label.innerHTML = label.innerHTML.replace('[ ]', '[x]');
	}
}

// Call the functions if they're checked
if (document.getElementById('accessibility-serif-font').checked) {
	toggleFont();
}
