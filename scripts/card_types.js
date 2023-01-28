// Project Card
customElements.define("project-card", class extends HTMLElement {
	render() {
		let disclaimer = "";
		if (this.hasAttribute("has-disclaimer")) {
			disclaimer = "<em>I am a member of a team that works on this project.</em> ";
		}

		let projectUrl = "";
		if (this.hasAttribute("mod-link")) {
			projectUrl = `<p class="align-center"><a href="${this.getAttribute("mod-link")}" target="_blank" rel="noopener noreferrer">Download from CurseForge</a></p>`;
		} else if (this.hasAttribute("play-link")) {
			projectUrl = `<p class="align-center"><a href="${this.getAttribute("play-link")}" target="_blank" rel="noopener noreferrer">Play Game</a></p>`;
		}

		this.innerHTML = `
			<img src="${this.getAttribute("img-src")}" alt="${this.getAttribute("img-alt")}" title="${this.getAttribute("img-alt")}" />
			<div>
				<h2 class="align-center">${this.getAttribute("heading")}</h2>
				<h4 class="card-subheading align-center">${this.getAttribute("subheading")}</h4>
				<p class="align-justify">${disclaimer}${this.getAttribute("description")}</p>
				<br />
				<p class="align-center"><a href="${this.getAttribute("src-link")}" target="_blank" rel="noopener noreferrer">View Source</a></p>
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
