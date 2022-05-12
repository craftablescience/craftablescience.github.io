// Project Card
customElements.define("project-card", class extends HTMLElement {
	render() {
		let disclaimer = "";
		if (this.hasAttribute("has-disclaimer")) {
			disclaimer = "<strong>I am a member of a team that works on this project.</strong> ";
		}

		let projectUrl = "";
		if (this.hasAttribute("mod-link")) {
			projectUrl = `<p><a href="${this.getAttribute("mod-link")}" target="_blank" rel="noopener noreferrer">Download from CurseForge</a></p>`;
		} else if (this.hasAttribute("play-link")) {
			projectUrl = `<p><a href="${this.getAttribute("play-link")}" target="_blank" rel="noopener noreferrer">Play Game</a></p>`;
		}

		this.innerHTML = `
			<img src="${this.getAttribute("img-src")}" alt="${this.getAttribute("img-alt")}" />
			<div>
				<h2 class="align-center">${this.getAttribute("title")}</h2>
				<h4 class="card-subtitle align-center">${this.getAttribute("subtitle")}</h4>
				<p class="align-justify">${disclaimer}${this.getAttribute("description")}</p>
				<p><a href="${this.getAttribute("src-link")}" target="_blank" rel="noopener noreferrer">View Source</a></p>
				${projectUrl}
			</div>
		`;

		this.classList.add("card");
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ["title", "subtitle", "description", "has-disclaimer", "img-src", "img-alt", "src-link", "mod-link", "play-link"];
	}

	attributeChangedCallback(_name, _oldValue, _newValue) {
		this.render();
	}
});
