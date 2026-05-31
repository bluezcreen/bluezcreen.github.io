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

customElements.define("foot-er", Footer)

function setAtr(name, value) {
  document.documentElement.style.setProperty(name, value);
}

function darkMode() {
  setAtr('--bg', '#212121');
  setAtr('--prim-text', '#EEEEEE');
  
  const icon1 = document.getElementById('icon1')
  const icon2 = document.getElementById('icon2')
  if (icon1) icon1.style.display = 'none';
  if (icon2) icon2.style.display = 'inline-block';
  
  localStorage.setItem('theme', 'dark');
}

function lightMode() {
  setAtr('--bg', '#CCCCCC');
  setAtr('--prim-text', '#000000');
  
  const icon1 = document.getElementById('icon1')
  const icon2 = document.getElementById('icon2')
  if (icon1) icon1.style.display = 'inline-block';
  if (icon2) icon2.style.display = 'none';
  
  localStorage.setItem('theme', 'light');
}

// save theme between pages
if (localStorage.getItem('theme') === 'light') lightMode();
else darkMode();

// randomized text in homepage
const hometext = document.querySelector(".hometext")
if (hometext) {
  const msgs = ["you probably saw me on twitter", "you opened the wrong webpage", "this is NOT a portfolio", "'claude code fix my css bug please'", "sudo pacman -Sybau"];
  hometext.textContent = msgs[Math.floor(Math.random() * msgs.length)];
}

const el = document.getElementById("twtext")
if (el) {
  const len = el.textContent.length
  el.style.animation = `
    typing 2s steps(${len}, end) forwards,
    cursor .4s step-end infinite alternate
  `;
}

// fade effect between pages
document.body.style.opacity = 0

setTimeout(() => {
  document.body.style.transition = 'opacity 0.3s ease'
  document.body.style.opacity = 1
}, 50)

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const href = link.href
    document.body.style.transition = 'opacity 0.3s ease'
    document.body.style.opacity = 0
    setTimeout(() => {
      window.location.href = href
    }, 300)
  })
})