import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';

// TODO in future this could change and be wc-svg-icon-mt, wc-svg-icon-p2, wc-svg-icon-p3
// where mt,p2,p3 are suffix of the project they relate too

@customElement('wc-svg-icon')
export class CustomIcon extends LitElement {
  @property({ type: String }) private iconName = 'icon-plus';
  @property({ type: String }) private iconSet = 'mt-icons';
  @property({ type: Number }) private height = 32;
  @property({ type: Number }) private width = 32;
  @property({ type: String }) private color = '#32a9e2';

  public render(): TemplateResult {
    return html`
      <style>
        :root {
        }
        svg {
          height: ${this.height + 'px'};
          width: ${this.width + 'px'};
          fill: ${this.color};
          opacity: 1;
          transition: all 0.8s;
        }

        svg:active {
          opacity: 0.4;
          transition: 0s;
        }
      </style>

      <svg class="${this.iconName}" @click="${(): void => this.handleClick()}">
        <use href="/dist/static/assets/${this.iconSet}/sprite.svg#${this.iconName}"></use>
      </svg>
    `;
  }

  private handleClick(): void {
    this.dispatchEvent(
      new CustomEvent('icnClick', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }),
    );
  }
}
