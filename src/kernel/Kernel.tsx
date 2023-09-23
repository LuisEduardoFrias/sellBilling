
import ReactDOM from 'react-dom/client'
import Router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render( <Router /> )

// funciones globales
declare global {
  interface Window {
    Select: (selector: string) => IElement;
  }
}

interface IElement {
 e: Element,
 css: string,
}

window.Select = (selector:string) : IElement => {
 const element = document.querySelector(selector);
 return {e: element, css: (styles:string) => {element.style.cssText = styles; }};
}