import styles from './character.css'

export enum Attribute {
    "image" = "image",
    "name" = "name",
    "status" = "status",
    "species" = "species" ,
    "type" = "type",
    "origin" = "origin" ,
    "nameoffirstepisode" = "nameoffirstepisode",
    
}


class Character extends HTMLElement {
    image?: string;
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    origin?: string;
    nameoffirstepisode?: string;

    static get observedAttributes() {
        return Object.values(Attribute);
    }
   
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        if (oldValue !== newValue) {
            this[propName] = newValue;
            }
            this.render();
        
    }
        
        constructor(){
            super();
            this.attachShadow({mode: "open"})
        }

        connectedCallback(){
           this.render();
        }

        
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Character/character.css">
            <div class="card">
                <div class="subtitle">
                    <h2>Portal License</h2>
                </div>
                <div class="character">
                    <img src="${this.image}" alt="${this.name || 'No Image'}">
                    <div class="information">
                        <h1>${this.name || 'No Name'}</h1>
                        <p>Status: ${this.status || 'No Status'}</p>
                        <p>Species: ${this.species || 'No Species'}</p>
                        <p>Type: ${this.type || 'No Type'}</p>
                        <p>Origin: ${this.origin || 'No  Origin'}</p>
                        <p>First Episode: ${this.nameoffirstepisode || 'No First Episode'}</p>
                    </div>
                </div>
            </div>       
                `
            }

            const cssCharacter = this.ownerDocument.createElement("style");
            cssCharacter.innerHTML = styles;
            this.shadowRoot?.appendChild(cssCharacter);
        }
    }
customElements.define("character-card",Character);
export default Character;