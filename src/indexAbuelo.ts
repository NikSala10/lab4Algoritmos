class AppContainer extends HTMLElement  {
   
    constructor()  {
        super();
        this.attachShadow( {mode: 'open'});
    }

    connectedCallback() {
       
        this.render();
        
    }

    render()  {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            
            <h1>WORKERS</h1>
            
            `;

        };
        
        
       
    }

}

customElements.define('app-container',AppContainer);