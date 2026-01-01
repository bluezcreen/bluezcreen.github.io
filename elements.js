class Panel extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;   
    const title = this.getAttribute("title") || "";

    this.innerHTML = `
      <article class="window">
        <nav class="wbar"><div class="ico">—</div> ${title} <div class="ico">┏</div></nav>
        ${content}
      </article>
    `;
  }
}

class Pbar extends HTMLElement {
  connectedCallback() {
    const contentPB = this.innerHTML;

    this.innerHTML = `
        <nav class="sbar">${contentPB}</nav>
    `;
  }
}

class Navbar extends HTMLElement {
  connectedCallback() {
    this.classList.add("navb")

    this.innerHTML = `
      <div class="dr1">
        <button class="drb1">⟡</button>
        <div class="drc1">
          <a href="/references/"><i class="fa-solid fa-computer"></i> About This Site</a><br>
          <hr>
          <a href="/home/"><i class="fa-solid fa-house"></i> Homepage</a><br>
          <a href="/me/"><i class="fa-solid fa-user"></i> Biography</a><br>
          <a href="/stuff/"><i class="fa-solid fa-inbox"></i> Box of Many Things</a><br>
          <a href="/tunes/"><i class="fa-solid fa-music"></i> Gramaphone</a><br>
          <a href="https://www.nytimes.com/games/wordle/index.html"><i class="fa-solid fa-table-cells"></i> Wordle</a>
          <hr>
            
          <span style="opacity: 0.5;"><i class="fa-solid fa-palette"></i> Themes (soon!)</span>
        </div>
      </div>
    
      <div style="display: flex; gap: 10px; margin-right: 10px;">
        <span><i class="fa-solid fa-battery-three-quarters"></i></span>
        <span><i class="fa-solid fa-signal"></i></span>
        <span id="clock"></span>
      </div>
    `;
    this.startClock();
  }
  startClock() {
    const clock = this.querySelector("#clock");
    if (!clock) return;

    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      clock.textContent = h + ":" + m;
    };

    update();
    this._clockTimer = setInterval(update, 1000);
  }

  disconnectedCallback() {
    clearInterval(this._clockTimer);
  }
}
class Footer extends HTMLElement {
  connectedCallback() {
    this.classList.add("badgeapple")
    
    this.innerHTML = `
    <main class="footer">
      <div>bluezcreen.github.io | 2026</div>
      <hr>
      <div class="badges">
        <img src="../visuals/imgs/bluezcreen_github_io.png">
        <img src="../visuals/imgs/badge_git.png">
        <img src="../visuals/imgs/badge_honeocities.png">
        <img src="../visuals/imgs/badge_apple.gif">
      </div>
    
    
    </div>
  </main> 
    `;
  }
}

customElements.define("n-avbar", Navbar);
customElements.define("p-bar", Pbar);
customElements.define("f-ooter", Footer);
customElements.define("p-anel", Panel);