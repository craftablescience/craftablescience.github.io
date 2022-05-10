// Project Card
customElements.define("project-card", class extends HTMLElement {
	render() {
		let disclaimer = "";
		if (this.hasAttribute("disclaimer")) {
			disclaimer = "<strong>I am a member of a team that works on this project.</strong> ";
		}

		let modUrl = "";
		if (this.hasAttribute("mod-link")) {
			modUrl = `<p><a href="${this.getAttribute("mod-link")}" target="_blank" rel="noopener noreferrer">The mod is published on CurseForge here.</a></p>`;
		}

		this.innerHTML = `
			<aside class="projectitemaside">
				<div class="projectitemslide">
					<p><a href="${this.getAttribute("src-link")}" target="_blank" rel="noopener noreferrer">The project files can be found here.</a></p>
					${modUrl}
				</div>
				<img class="projectitemimage" src="${this.getAttribute("img-src")}" alt="${this.getAttribute("img-alt")}" />
			</aside>
			<h1 class="projectitemtitle">${this.getAttribute("title")}</h1>
			<h4 class="projectitemsubtitle">${this.getAttribute("subtitle")}</h4>
			<p class="projectitemdescription">${disclaimer}${this.getAttribute("description")}</p>
		`;
	}

	connectedCallback() {
		this.render();
	}

	static get observedAttributes() {
		return ["img-src", "img-alt", "title", "subtitle", "description", "src-link", "mod-link", "disclaimer"];
	}

	attributeChangedCallback(_name, _oldValue, _newValue) {
		this.render();
	}
});
