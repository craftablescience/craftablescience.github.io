// Project Card
customElements.define("project-card", class extends HTMLElement {
	render() {
		let disclaimer = "";
		if (this.hasAttribute("has-disclaimer")) {
			disclaimer = "<em>I am a member of a team that works on this project.</em> ";
		} else if (this.hasAttribute("has-past-disclaimer")) {
			disclaimer = "<em>I was a member of a team that worked on this project.</em> ";
		}

		let sourceUrl = "";
		if (this.hasAttribute("src-link")) {
			sourceUrl = `<a href="${this.getAttribute("src-link")}" target="_blank" rel="noopener noreferrer">Source Code</a>`;
		}

		let projectUrl = "";
		if (this.hasAttribute("cf-link")) {
			projectUrl = `<a href="${this.getAttribute("cf-link")}" target="_blank" rel="noopener noreferrer">CurseForge Page</a>`;
		} else if (this.hasAttribute("nexus-link")) {
			projectUrl = `<a href="${this.getAttribute("nexus-link")}" target="_blank" rel="noopener noreferrer">Nexus Mods Page</a>`;
		} else if (this.hasAttribute("play-link")) {
			projectUrl = `<a href="${this.getAttribute("play-link")}" target="_blank" rel="noopener noreferrer">Play Game</a>`;
		} else if (this.hasAttribute("steam-link")) {
			projectUrl = `<a href="${this.getAttribute("steam-link")}" target="_blank" rel="noopener noreferrer">Steam Store Page</a>`;
		} else if (this.hasAttribute("custom-link")) {
			projectUrl = `<a href="${this.getAttribute("custom-link")}" target="_blank" rel="noopener noreferrer">Project Details</a>`;
		}

		this.innerHTML = `
			<img src="${this.getAttribute("img-src")}" alt="${this.getAttribute("img-alt")}" title="${this.getAttribute("img-alt")}" class="shadow-border" />
			<div>
				<h2 class="align-center" tabindex="0">${this.getAttribute("heading")}</h2>
				<h3 class="card-subheading align-center">${this.getAttribute("subheading")}</h3>
				<p class="indent-paragraphs">${disclaimer}${this.getAttribute("description")}</p>
				<br />
				<div class="card-link-list">
					${sourceUrl}
					${projectUrl}
				</div>
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
		return [
			"heading",             // Name
			"subheading",          // Timestamp
			"description",         // Description
			"has-disclaimer",      // Work on a team
			"has-past-disclaimer", // Worked on a team
			"img-src",             // Image
			"img-alt",             // Image alt
			"src-link",            // Source Code
			"cf-link",             // CurseForge Page
			"nexus-link",          // Nexus Mods Page
			"play-link",           // Play Game
			"steam-link",          // Steam Store Page
			"custom-link",         // Project Details
		];
	}

	attributeChangedCallback(_name, _oldValue, _newValue) {
		this.render();
	}
});
