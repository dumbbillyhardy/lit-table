import {html, LitElement, customElement, property} from '@polymer/lit-element';
import {Column} from './column';

@customElement('lit-table')
class LitTable extends LitElement {

  @property()
  columns: Column[] = [];
  @property()
  items = [];

  // Initialize properties
  constructor() {
    super();
  }

  // Define a template
  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${this.columns.map(c => html`<th>${c.header}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${this.items.map(item => html`
            <tr>
              ${this.columns.map(c => html`<td>${item[c.propName]}</td>`)}
            </tr>
          `)}
        </tbody>
        <tfoot>
          <tr>
            ${this.columns.map(c => html`<td>${c.footer}</td>`)}
          </tr>
        </tfoot>
      </table>
    `;
  }

}
