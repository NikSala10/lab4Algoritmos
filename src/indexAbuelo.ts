import * as components from './components/indexPadre'
import Character, { Attribute } from './components/Character/character';
import { getRickandMorty } from './services/dataFetch';
import  {getFirstEpisode} from './services/dataFetchEpisode'

class AppContainer extends HTMLElement {
    characters: Character[] = [];
    dataApi: any[] = []; 
    dataNameFistEpisode:any[]=[];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
       
        this.render();

        const form = this.shadowRoot?.querySelector("form") as HTMLFormElement;
        form?.addEventListener("submit", async (event) => {
            event.preventDefault();

        const input = this.shadowRoot?.querySelector(".input") as HTMLInputElement;
       
            const numberOfCharacters = Number(input.value);
            if (numberOfCharacters > 0) {
                // Limpiar personajes anteriores
                this.characters = [];
                this.dataApi = [];
                this.dataNameFistEpisode=[];

                // Obtener nuevos personajes
                for (let i = 1; i <= numberOfCharacters; i++) {
                    const characterData = await getRickandMorty(i); 
                    const characterNameFirstEpisode = await getFirstEpisode(characterData.episode[0]); 
                    this.dataApi.push(characterData);
                    this.dataNameFistEpisode.push(characterNameFirstEpisode.name)

                }


                // Crear las tarjetas con la data obtenida
                this.createCharacterRickyandMorty();

                // Renderizar la nueva lista de personajes
                this.renderCharacters();
            }
        });
    }

    createCharacterRickyandMorty() {
        let count = 0;
        this.dataApi.forEach(characterData => {
        const character = this.ownerDocument.createElement('character-card') as Character;
        character.setAttribute(Attribute.image, characterData.image);
        character.setAttribute(Attribute.name, characterData.name);
        character.setAttribute(Attribute.status, characterData.status);
        character.setAttribute(Attribute.species, characterData.species);
        character.setAttribute(Attribute.type, characterData.type);
        character.setAttribute(Attribute.origin, characterData.origin.name); 
        character.setAttribute(Attribute.nameoffirstepisode, this.dataNameFistEpisode[count]);

        this.characters.push(character);
        count ++;
        });
    }

    renderCharacters() {
        const container = this.shadowRoot?.querySelector('.container-characters');
        if (container) {
            // Limpiar el contenido antes de renderizar
            container.innerHTML = '';

            // Agregar los nuevos personajes
            this.characters.forEach((character) => {
                container?.appendChild(character);
            });
        }
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Character/character.css">
                <h1 id="title" >Rick and Morty</h1>
                <h3 id="selectNumber">¡Select the number of characters you wish to meet!</h3>
                <div id="submitForm">
                    <form>
                        <input class="input" type="number" placeholder="Select the number" min="1" max="20" step="1">
                    </form>
                </div>
                <div class="container-characters"></div>
            `;
        }
    }
}

customElements.define('app-container', AppContainer);
