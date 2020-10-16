import { RainbowText } from './src/web-components/hello-world-raw-webcomponent/rainbow-text';

import './style.scss';

try {
  customElements.define('rainbow-text', RainbowText);
} catch (err) {
  const h3 = document.createElement('h3');
  h3.innerText = "This site uses webcomponents which don't work in your browsers!";
  document.body.appendChild(h3);
}
