class Rodape extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        //template
        this.shadowRoot.innerHTML = this.build();

        //style
        const style = document.createElement("style");
        style.textContent = this.styles();
        this.shadowRoot.appendChild(style)

        //icones
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        this.shadowRoot.appendChild(link)
    }

    build() {
        let conteudoHTML = "";

        conteudoHTML += `<footer class="rodape">`

        //logo
        conteudoHTML += this.build_logo();

        //projetos
        conteudoHTML += this.build_projetos();

        //coluna contato
        conteudoHTML += this.build_contato();

        //coluna redes sociais
        conteudoHTML += this.build_redes_sociais();

        conteudoHTML += `</footer">`

        return conteudoHTML;
    }

    build_logo() {
        return `
        <a class="logo-rodape" href="../index.html">
            <img src="../assets/imagens/logo.png" alt="Logo">
        </a>
        `
    }

    build_projetos() {
        return `
        <div class="coluna">
            <h1 class="topicos">Outros Projetos</h1>
            <div class="">
                <ul>
                    <li class="item">
                    <a href="${this.getAttribute("link1")}">
                    ${this.getAttribute("nome1")}</a></li>
                    <li class="item">
                    <a href="${this.getAttribute("link2")}">
                    ${this.getAttribute("nome2")}</a></li>
                    <li class="item">
                    <a href="${this.getAttribute("link3")}">
                    ${this.getAttribute("nome3")}</a></li>
                    <li class="item">
                    <a href="${this.getAttribute("link4")}">
                    ${this.getAttribute("nome4")}</a></li>
                </ul>
            </div>
        </div>
        `
    }

    build_contato() {
        return `
        <div class="coluna">
            <h1 class="topicos">Contato</h1>
            <div class="contato">
                <ul>
                    <li class="item">
                        <a class="contato-email" href="mailto:bs.marcosandre@gmail.com">
                            bs.marcosandre@gmail.com
                        </a>
                    </li>
                    <li class="item">
                        <a class="contato-whatsapp" href="https://web.whatsapp.com/send?phone=5514996586618">
                            (14) 99658-6618
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `
    }

    build_redes_sociais() {
        return `
        <div class="coluna">
            <h1 class="topicos">Redes Sociais</h1>
            <div class="midia-social">
                <a href="https://github.com/MarcosAndreBueno" target="_blank">
                    <i class="fa-brands fa-github-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/marcosandrebueno/" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>
        `
    }

    styles() {
        return `
            @import './css/projeto.css'; 
            @import './css/responsive.css';
            @import '../assets/css/icone.css';
        `;
    }
}

customElements.define("shadow-rodape", Rodape)
