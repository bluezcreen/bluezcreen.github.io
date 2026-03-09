class Panel extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;   
    const title = this.getAttribute("title") || "";

    this.innerHTML = `
      <article class="window">
        <nav class="wbar">${title}</nav>
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

class Tbar extends HTMLElement {
  connectedCallback() {
    const contentTB = this.innerHTML;
    const title = this.getAttribute("title") || "";
    
    this.innerHTML = `
    <article class="window">
      ${contentTB}
      <section class="tbar">${title}</section>
    </article>
    `;
  }
}

class Navbar extends HTMLElement {
  connectedCallback() {
    this.classList.add("navb")

    this.innerHTML = `
    <div class="mbnav">
      <div class="dr">
        <button class="drb"><img src="/visuals/imgs/favicon2.png" style="width: 35px; padding-left: 5px;"></button>
        <div class="drc">
          <a href="/references/"><i class="fa-solid fa-computer"></i>&nbsp; about this site</a><br>
          <hr>
          <a href="/"><i class="fa-solid fa-house"></i>&nbsp; homepage</a><br>
          <a href="/stuff/"><i class="fa-solid fa-inbox"></i>&nbsp; drawer</a><br>
          <a href="/tunes/"><i class="fa-solid fa-music"></i>&nbsp; gramaphone</a><br>
          <a href="/links/"><i class="fa-solid fa-link"></i>&nbsp; links</a><br>
          <a href="https://www.nytimes.com/games/wordle/index.html"><i class="fa-solid fa-table-cells"></i>&nbsp; wordle</a>
        </div>
      </div>
    
      <div style="display: flex; gap: 10px; margin-right: 10px;">
        <span><i class="fa-solid fa-mobile-screen-button"></i></span>
        <span class="clock"></span>
      </div>
    </div>
    
    <div class="dtnav">
        <div style="display: flex; flex-direction: row; gap: 20px; margin-left: 10px; align-items: center;">
            <a href="/references/"><img src="/visuals/imgs/favicon2.png" style="width: 1.5rem"></a>
            <a href="/">home</a>
            <a href="/stuff/">drawer</a>
            <a href="/tunes/">gramaphone</a>
            <a href="/links/">links</a>
            <a href="https://www.nytimes.com/games/wordle/index.html">wordle</a>
      </div>
    
      <div style="display: flex; gap: 10px; margin-right: 10px;">
        <span><i class="fa-solid fa-display"></i></span>
        <span class="clock"></span>
      </div>
    </div>
    `;
    
    this.startClock();
  }
  
  startClock() {
    const clocks = this.querySelectorAll(".clock");
    if (!clocks.length) return;

    const update = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      clocks.forEach(clock => clock.textContent = h + ":" + m);
    };

    update();
    this._clockTimer = setInterval(update, 1000);
  }

  disconnectedCallback() {
    if (this._clockTimer) {
      clearInterval(this._clockTimer);
    }
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.classList.add("badgeapple");
    
    this.innerHTML = `
    <main class="footer">
      bluezcreen.site<br>
      <span style="font-family: text;">you've wasted <span id="timer">0m 0s</span> being here</span>
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

class Featured extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;   
    const title = this.getAttribute("title") || "";

    this.innerHTML = `
      <article class="window">
        <nav class="wbar">featured music</nav>
    
        <div class="player">
    
        <audio controls class="mb"><source src="../visuals/imgs/evergreen.m4a" type="audio/mpeg"></audio>
    
       <div class="feat">
        <audio controls class="dt"><source src="../visuals/imgs/evergreen.m4a" type="audio/mpeg"></audio>
        <span style="font-family: var(--font1); font-size: 1.1rem;"><a href="https://youtu.be/F1Pd2tvO3Cc">evergreen</a> -</span>
        <span style="font-size: 1rem;">kurayamisaka</span>
    </div> 
    
      </div>
    
      <section class="wcontent mb center">
        <span style="font-family: var(--font1); font-size: 1.1rem;"><a href="https://youtu.be/F1Pd2tvO3Cc">evergreen</a> -</span>
        <span style="font-size: 1rem;">kurayamisaka</span>
      </section>
      </article>
    `;
  }
}

customElements.define("n-avbar", Navbar);
customElements.define("p-bar", Pbar);
customElements.define("t-bar", Tbar);
customElements.define("f-ooter", Footer);
customElements.define("p-anel", Panel);
customElements.define("f-eatured", Featured);