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

class Navbar extends HTMLElement {
  connectedCallback() {
    const content = this.innerHTML;   
    const title = this.getAttribute("title") || "";

    this.innerHTML = `
      
       <div class="navb">
    <div class="dr1">
    <button class="drb1">☰</button>
      <div class="drc1">
        <a>About This Site</a>
        <hr>
        <a>Recent Documents</a><br>
        <a>Media Player</a><br>
        <a>Recent Files</a><br>
        <a>Workshop</a><br>
        <a>References</a><br>
      </div>
    </div>
    
    <span>File</span>
    <span>Edit</span>
    
    <div class="dr2">
    <button class="drb2">View</button>
    <div class="drc2">
      <a>Light</a><br>
      <a>Dark</a><br>
      <a>Classic</a><br>
    </div>
    </div>
    
    <span>Special</span>
    <span>Help</span>
  </div>
    `;
  }
}

customElements.define("n-avbar", Navbar);
customElements.define("p-anel", Panel);