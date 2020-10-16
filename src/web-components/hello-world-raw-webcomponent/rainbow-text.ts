import { getStyle } from './rainbow-text.style';
export class RainbowText extends HTMLElement {
  text: string;
  size: string;

  connectedCallback(): void {
    this.attachShadow({ mode: 'open' });
    this.text = this.getAttribute('text');
    this.size = this.getAttribute('font-size');
    this.render();
  }

  addStyle(): void {
    const styleTag = document.createElement('style');
    styleTag.textContent = getStyle(this.size);
    this.shadowRoot.appendChild(styleTag);
  }

  addSpanEventListeners(span: HTMLSpanElement): void {
    span.addEventListener('mouseover', () => {
      span.classList.add('hovered');
    });
    span.addEventListener('animationend', () => {
      span.classList.remove('hovered');
    });
  }

  createSpan(letter: string): HTMLSpanElement {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.innerHTML = letter;
    this.addSpanEventListeners(span);
    return span;
  }

  addSpans(div: HTMLDivElement): void {
    Array.from(this.text).forEach(letter => {
      const span = this.createSpan(letter);
      div.appendChild(span);
    });
  }

  render(): void {
    const div = document.createElement('div');
    div.classList.add('header');
    this.shadowRoot.appendChild(div);
    this.addSpans(div);
    this.addStyle();
  }
}
