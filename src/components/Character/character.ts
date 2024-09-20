
export enum Attribute {
    "image" = "image",
    "name" = "name",
    "status" = "status",
    "species" = "species" ,
    "type" = "gender",
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
   
    attributeChangedCallback(
       ){
           
        }
        
        constructor(){
            super();
            this.attachShadow({mode: "open"})
        }

        connectedCallback(){
           
        }

        
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                    <style>
                   
                    </style>
                    <section>
                    
                    </section>
                `
            }
        }
    }
customElements.define("character-card",Character);
export default Character;