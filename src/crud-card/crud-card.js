/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';

class CrudCard extends LitElement {
	static get properties() {
		return {
      title: { type: String },
      description: { type: String }
    };
	}

	static get styles() {
		return [
			css`
				:host {
					display: grid;
          grid-gap: 16px;
					grid-template-rows: 40px minmax(64px, auto);
					grid-template-columns: auto;
					grid-template-areas:
						"header"
						"content";
          padding: 16px;
          border-radius: 4px;
          background-color: rgb(255, 255, 255);
          box-shadow: 0 4px 4px 0 rgb(0, 0, 0, .33);
				}

        #header {
          grid-area: header;
          padding-bottom: 16px;
          border-bottom: solid 1px rgba(225, 225, 255, 0.66);
          font-size: 24px;
        }

        #content {
          grid-area: content;
        }
			`
		];
	}

	render() {
    return html`
      <section id="header">
        <span>${this.title}</span>
      </section>
      <section id="content">
        <span>${this.description}</span>
      </section>
		`;
	}
}

customElements.define('crud-card', CrudCard);
