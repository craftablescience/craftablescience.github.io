// Project Card
customElements.define("project-card", class extends HTMLElement {
	render() {
		let disclaimer = "";
		if (this.hasAttribute("has-disclaimer")) {
			disclaimer = "<em>I am a member of a team that works on this project.</em> ";
		}

		let sourceUrl = "";
		if (this.hasAttribute("src-link")) {
			sourceUrl = `<p class="align-center"><a href="${this.getAttribute("src-link")}" target="_blank" rel="noopener noreferrer">View Source</a></p>`;
		}

		let projectUrl = "";
		if (this.hasAttribute("mod-link")) {
			projectUrl = `<p class="align-center"><a href="${this.getAttribute("mod-link")}" target="_blank" rel="noopener noreferrer">Download from CurseForge</a></p>`;
		} else if (this.hasAttribute("play-link")) {
			projectUrl = `<p class="align-center"><a href="${this.getAttribute("play-link")}" target="_blank" rel="noopener noreferrer">Play Game</a></p>`;
		} else if (this.hasAttribute("steam-link")) {
			projectUrl = `<p class="align-center"><a href="${this.getAttribute("steam-link")}" target="_blank" rel="noopener noreferrer">View Steam Store Page</a></p>`;
		}

		this.innerHTML = `
			<img src="${this.getAttribute("img-src")}" alt="${this.getAttribute("img-alt")}" title="${this.getAttribute("img-alt")}" class="shadow-border" />
			<div>
				<h2 class="align-center">${this.getAttribute("heading")}</h2>
				<h3 class="card-subheading align-center">${this.getAttribute("subheading")}</h3>
				<p class="align-justify">${disclaimer}${this.getAttribute("description")}</p>
				<br />
				${sourceUrl}
				${projectUrl}
			</div>
		`;

		if (!this.classList.contains("card")) {
			this.classList.add("card");
		}
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ["heading", "subheading", "description", "has-disclaimer", "img-src", "img-alt", "src-link", "mod-link", "play-link"];
	}

	attributeChangedCallback(_name, _oldValue, _newValue) {
		this.render();
	}
});
