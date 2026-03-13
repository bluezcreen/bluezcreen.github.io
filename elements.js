class Textbox extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;   
    const title = this.getAttribute("title") || "";

    this.innerHTML = `
      <article id="box">
        <span style="font-size: 1.4rem; font-family: var(--title-font)">$ > </span>
        <span id="boxtitle">${title}</span>
        <br><br><br>
        <div id="boxcontent">${content}</div>
      </article>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <main class="footer">
      <span style="font-family: var(--title-font); font-size: 1.8rem;">bluezcreen.site</span><br>
      <span style="font-family: var(--body-font); font-size: 1rem;">you've wasted <span id="timer">0m 0s</span> being here</span>
    </main> 
    `;
    
    this.startTimer();
  }
  
      startTimer() {
      let start = sessionStorage.getItem('timer-start');
      if (!start) {
        start = Date.now();
        sessionStorage.setItem('timer-start', start);
      } else {
        start = parseInt(start);
      }
      
      const timerDisplay = this.querySelector("#timer");
      
      this._timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - start) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        
        timerDisplay.textContent = `${minutes}m ${seconds}s`;
      }, 1000);
    }
}

class Nav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <article id="box" style="font-size: 1.5rem;">
      <a href="/">homepage</a>&nbsp;&nbsp;&nbsp;
      <a href="/socials/">socials</a>&nbsp;&nbsp;&nbsp;
      <a href="/guestbook/">guestbook</a>&nbsp;&nbsp;&nbsp;
      <a href="/archive/">archive</a>&nbsp;&nbsp;&nbsp;
      <hr>
      
      <div style="opacity: 50%;">
      <a onclick="darkMode()">dark</a>&nbsp;&nbsp;&nbsp;
      <a onclick="lightMode()">light</a>&nbsp;&nbsp;&nbsp;
      <s><a>themer (TBA)</a></s>
      </div>
    </article>
    `;
    // dude i don't give a SHIT if some of these CSS are hardcoded and not put into a class
  }
}

customElements.define("text-box", Textbox)
customElements.define("foot-er", Footer)
customElements.define("n-av", Nav)
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
  
  localStorage.setItem('theme', 'dark');
  // setAtr('--title-text', 'mondwest')
  // setAtr('--body-text', 'neuebit')
}

function lightMode() {
  setAtr('--bg', '#CCCCCC');
  setAtr('--prim-text', '#000000');
  
  document.getElementById('icon1').style.display = 'inline-block';
  document.getElementById('icon2').style.display = 'none';
  
  localStorage.setItem('theme', 'light');
  // setAtr('--title-text', 'mondwest')
  // setAtr('--body-text', 'neuebit')
}

// function classicMode() {
//  setAtr('--bg', '#003049');
//  setAtr('--prim-text', '#8BC8E7');
//  setAtr('--title-text', 'jbm')
//  setAtr('--body-text', 'jbm')
// }

// save theme between pages
if (localStorage.getItem('theme') === 'light') lightMode();
else darkMode();



// randomized text in homepage
const msgs = ["you probably saw me on twitter", "you opened the wrong webpage", "this is NOT a portfolio", "'claude code fix my css bug please'", "sudo pacman -Sybau"];
document.querySelector(".hometext").textContent = msgs[Math.floor(Math.random() * msgs.length)];

