/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';
import './crud-card/crud-card';

class CrudApp extends LitElement {
	static get properties() {
		return {
			_crudList: {
				type: Array,
				attribute: false
			}
		};
	}

	static get styles() {
		return [
			css`
				:host {
					display: grid;
					grid-template-rows: 64px auto;
					grid-template-columns: auto;
					grid-template-areas:
						"header"
						"content";
					width: 100vw;
					min-height: 100vh;
				}

				header {
					grid-area: header;
					position: fixed;
					top: 0;
					left: 0;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					width: 100vw;
					height: 64px;
					padding: 0 16px;
					font-size: 24px;
					color: var(--on-primary-color);
					background-color: var(--primary-color);
				}

				#content {
					grid-area: content;
					display: flex;
					align-items: flex-start;
					justify-content: center;
					background-color: rgb(225, 225, 225);
				}

				#content crud-card {
					width: 80vw;
					margin-bottom: 16px;
				}
				#content crud-card:first-child {
					margin-top: 16px;
				}
				#content crud-card:last-child {
					margin-bottom: 64px;
				}
			`
		];
	}

	constructor() {
		super();

		this._crudList = [
			{ title: 'Default', description: 'Olá Mundo' }
		];
	}

	render() {
		return html`
			${this._header()}
			${this._content()}
		`;
	}

	_header() {
		return html`
			<header>
				<span>Crud App</span>
			</header>
		`;
	}

	_content() {
		return html`
			<section id="content">
				${this._crudList.map(item => html`
					<crud-card
						title="${item.title}"
						description="${item.description}"
					></crud-card>
				`)}
			</section>
		`;
	}
}

customElements.define('crud-app', CrudApp);
