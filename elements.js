class Textbox extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;   
    const title = this.getAttribute("title") || "";

    this.innerHTML = `
      <article id="box">
        <div id="boxtitle">${title}</div>
        <hr>
        <div id="boxcontent">${content}</div>
      </article>
    `;
  }
}

customElements.define("text-box", Textbox)

// theme

// i hate you js syntax 

function setAtr(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function darkMode() {
  setAtr('--bg', '#212121');
  setAtr('--prim-text', '#EEEEEE');
  
  document.getElementById('icon1').style.display = 'none';
  document.getElementById('icon2').style.display = 'inline-block';
  
  setAtr('--title-text', 'mondwest')
  setAtr('--body-text', 'neuebit')
}

function lightMode() {
  setAtr('--bg', '#CCCCCC');
  setAtr('--prim-text', '#000000')
  
  document.getElementById('icon1').style.display = 'inline-block';
  document.getElementById('icon2').style.display = 'none';
  
  setAtr('--title-text', 'mondwest')
  setAtr('--body-text', 'neuebit')
}

function classicMode() {
  setAtr('--bg', '#003049');
  setAtr('--prim-text', '#8BC8E7');
  setAtr('--title-text', 'jetbrainsmono')
  setAtr('--body-text', 'jetbrainsmono')
}

