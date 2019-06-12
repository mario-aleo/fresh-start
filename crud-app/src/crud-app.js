/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';
import './crud-card/crud-card';
import './crud-form/crud-form';

class CrudApp extends LitElement {
  static get properties() {
    return {
      _crudList: {
        type: Array,
        attribute: false,
      },
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
            'header'
            'content';
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
          box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.33);
        }

        #content {
          grid-area: content;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
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

        #fab-button {
          position: fixed;
          bottom: 32px;
          right: 32px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          padding-bottom: 6px;
          border: unset;
          border-radius: 50%;
          font-size: 32px;
          color: var(--on-primary-color);
          background-color: var(--primary-color);
        }

        crud-form {
          width: 90vw;
        }
      `,
    ];
  }

  constructor() {
    super();

    this._crudList = [{ title: 'Default', description: 'Olá Mundo' }];
  }

  render() {
    return html`
      ${this._header()} ${this._content()}

      <crud-form @saved="${this.addItem.bind(this)}"></crud-form>

      <button id="fab-button" @click="${this.createItem.bind(this)}">
        +
      </button>
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
        ${this._crudList.map(
          item => html`
            <crud-card title="${item.title}" description="${item.description}"></crud-card>
          `,
        )}
      </section>
    `;
  }

  createItem() {
    this.shadowRoot.querySelector('crud-form').toggle();
  }

  addItem(evt) {
    this._crudList = this._crudList.concat(evt.detail);
  }
}

customElements.define('crud-app', CrudApp);
