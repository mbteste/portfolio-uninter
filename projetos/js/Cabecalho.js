class Cabecalho extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        this.shadowRoot.innerHTML = this.build();

        //style
        const style = document.createElement("style");
        style.textContent = this.styles();
        this.shadowRoot.appendChild(style)
    }

    build() {
        return `
        <div class="header container">
            <a class="logo" href="../index.html">
                <img src="../assets/imagens/logo.png" alt="Logo">
            </a>
            <div class="menu">
                <a href="../index.html#home">Home</a>
                <a href="../index.html#sobre">Sobre</a>
                <a href="../index.html#projetos">Projetos</a>
                <a href="../index.html#contato">Contato</a>
            </div>
        </div>
        `;
    }

    styles() {
        return ` 
        @import './css/projeto.css'; 
        @import './css/responsive.css';
        `;
    }
}

//seletor
customElements.define("shadow-cabecalho", Cabecalho);  