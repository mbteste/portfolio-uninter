class Carrossel extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })

        //images
        const imagesString = this.getAttribute("images");
        const imagesLinksWithSpace = imagesString.split(",");
        this.imagesArray = [];
        imagesLinksWithSpace.forEach((image) => {
            this.imagesArray.push(image.trim());
        })

        //carrossel
        this.shadowRoot.innerHTML = this.build();

        //style
        const style = document.createElement("style");
        style.textContent = this.styles();
        this.shadowRoot.appendChild(style)
    }

    build() {
        let conteudoHTML = ""
        let slidesAmount = this.imagesArray.length;

        //início carrossel
        conteudoHTML += `<div class="carrossel-gifs">`

        //animação
        let animacao = ""
        if (this.getAttribute("animacao") == "true")
            animacao = "carrossel-animacao"

        //carrossel corpo
        conteudoHTML += `<ol class="carrossel-gifs-lista">`;
        for (let index = 0; index < slidesAmount; index++) {
            switch (index) {
                case 0:
                    //se primeiro slide, seta esquerda vai para último, seta direita para o segundo
                    conteudoHTML += this.build_corpo(index, slidesAmount - 1, index + 1, animacao);
                    break;
                case slidesAmount - 1:
                    //se último slide, seta esquerda vai para penúltimo, seta direita para o primeiro
                    conteudoHTML += this.build_corpo(index, index - 1, 0, animacao);
                    break;
                default:
                    conteudoHTML += this.build_corpo(index, index - 1, index + 1, animacao);
                    break;
            }
        }
        conteudoHTML += `</ol>`;

        //carrossel navegação inferior
        conteudoHTML += `<aside class="carrossel-navegacao">`
        for (let index = 0; index < slidesAmount; index++) {
            conteudoHTML += this.build_navegacao(index);
        }
        conteudoHTML += `</aside">`

        //fim carrossel
        conteudoHTML += `</div>`

        return conteudoHTML;
    }

    build_corpo(index, voltar, ir, animacao) {
        return `
        <li id="carrossel-slide${index}" tabindex="0" class="carrossel-slide">
            <input type="radio" name="carrossel-radio" id="radio${index}">
            <div class="carrossel-canva ${animacao}"></div>
            <img class="slide-gif"
                src="${this.imagesArray[index]}">
            <span class="carrossel-botao">
                <label for="radio${voltar}" class="voltar">Go to slide ${voltar}</label>
                <label for="radio${ir}" class="ir">Go to slide ${ir}</label>
            </span>
        </li>
        `
    }

    build_navegacao(index) {
        return `
        <ol class="carrossel-navegacao-lista">
            <li class="carrossel-navegacao-item">
                <label for="radio${index}" class="carrossel-navegacao-barra">Go to slide ${index}</label>
            </li>   
        </ol>
        `
    }

    styles() {
        return `
            @import './css/projeto.css'; 
            @import './css/carrossel.css';
            @import './css/responsive.css';
        `;
    }
}

customElements.define("shadow-carrossel", Carrossel)