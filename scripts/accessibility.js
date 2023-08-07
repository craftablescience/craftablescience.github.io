const Accessibility = {
	'Default': {
		color_card: {
			'--card-background-1': 'rgb(142, 22, 90)',
			'--card-background-2': 'rgb(162, 16, 99)',
			'--color-text': 'white',
			'--color-text-dark': '#eee',
			'--color-text-highlight': 'rgb(160, 160, 255)',
		},
		font: {
			'--text-font': '"Ubuntu Mono", monospace',
		},
	},
	'Accessible': {
		color_card: {
			'--card-background-1': 'rgb(206, 135, 171)',
			'--card-background-2': 'rgb(219, 158, 189)',
			'--color-text': 'black',
			'--color-text-dark': '#111',
			'--color-text-highlight': 'rgba(64, 64, 112, 0.7)',
		},
		font: {
			'--text-font': '"EB Garamond", Helvetica, Arial, serif',
		}
	}
};

let current_card_color = 'Default';
let current_font = 'Default';

function toggleCardColor() {
	current_card_color = current_card_color === 'Default' ? 'Accessible' : 'Default';
	const root = document.querySelector(":root");
	for (const [variable, value] of Object.entries(Accessibility[current_card_color].color_card)) {
		root.style.setProperty(variable, value);
	}
	const label = document.getElementById('accessibility-black-text-label');
	if (current_card_color === 'Default') {
		label.innerHTML = label.innerHTML.replace('[x]', '[ ]');
	} else {
		label.innerHTML = label.innerHTML.replace('[ ]', '[x]');
	}
}

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
if (document.getElementById('accessibility-black-text').checked) {
	toggleCardColor();
}
if (document.getElementById('accessibility-serif-font').checked) {
	toggleFont();
}
