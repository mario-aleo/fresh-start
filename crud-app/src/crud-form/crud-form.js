/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';

class CrudForm extends LitElement {
  static get properties() {
    return {
      open: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          position: fixed;
          top: 0;
          left: 0;
          display: grid;
          grid-gap: 16px;
          grid-template-rows: 40px minmax(64px, auto) 32px;
          grid-template-columns: auto;
          grid-template-areas:
            'header'
            'content'
            'actions';
          padding: 16px;
          border-radius: 4px;
          background-color: rgb(255, 255, 255);
          box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.33);

          opacity: 0;
          visibility: hidden;
          transform: translateX(calc(50vw - 50%)) translateY(100vh);
          transition: opacity ease-in-out 0.3s, visibility ease-in-out 0.3s,
            transform ease-in-out 0.3s;
          will-change: opacity, visibility, transform, transition;
        }
        :host([open]) {
          opacity: 1;
          visibility: visible;
          transform: translateX(calc(50vw - 50%)) translateY(calc(50vh - 50%));
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

        #actions {
          grid-area: actions;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-around;
          padding-top: 16px;
          border-top: solid 1px rgba(225, 225, 255, 0.66);
        }
      `,
    ];
  }

  constructor() {
    super();

    this.open = false;
  }

  render() {
    return html`
      <section id="header">
        <input id="title" placeholder="Title" />
      </section>
      <section id="content">
        <textarea id="description" placeholder="Description"></textarea>
      </section>
      <section id="actions">
        <button @click="${this.cancel.bind(this)}">Cancelar</button>
        <button @click="${this.save.bind(this)}">Salvar</button>
      </section>
    `;
  }

  toggle() {
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('toggled', { detail: { open: this.open } }));
  }

  cancel() {
    this.dispatchEvent(new CustomEvent('canceled'));
    this.clear();
    this.toggle();
  }

  save() {
    this.dispatchEvent(
      new CustomEvent('saved', {
        detail: {
          title: this.shadowRoot.querySelector('#title').value,
          description: this.shadowRoot.querySelector('#description').value,
        },
      }),
    );
    this.clear();
    this.toggle();
  }

  clear() {
    this.shadowRoot.querySelector('#title').value = '';
    this.shadowRoot.querySelector('#description').value = '';
  }
}

customElements.define('crud-form', CrudForm);
