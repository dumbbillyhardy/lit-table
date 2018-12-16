import {html, LitElement} from '@polymer/lit-element';

class LitTable extends LitElement {

  static get is() {
    return 'lit-table';
  }

  // Declare properties
  static get properties() {
    return {
      columns: {},
      items: {}
    };
  }

  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`
      <table>
        <tr>
          ${columns.map(c => html`<th>c</th>`)}
        </tr>
        ${items.map(item => html`
          <tr>
            ${columns.map(c => html`<td>item[c]</td>`)}
          </tr>
        `)}
      </table>
    `;
  }

}

customElements.define(LitTable.is, LitTable);
