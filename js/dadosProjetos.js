const dadosProjetos = [
    {
        titulo: "Site Segurança",
        descricao: "Landing page institucional moderna e responsiva.",
        descricaoLonga: "Landing page de alta conversão desenvolvida para a Protepac. O foco foi SEO e performance (Lighthouse score 95+). Utiliza animações suaves ao rolar a página.",
        detalhesTecnicos: "Desenvolvido com Tailwind CSS para estilização rápida e responsiva. O formulário utiliza integração com API do WhatsApp para contato imediato. Otimização de imagens via formato WebP.",
        imagem: "imagens/protepac_site.png",
        galeria: ["imagens/protepac_site.png", "imagens/protepac_site.png"],
        badges: [
            { texto: "Experiência Profissional", cor: "yellow" },
            { texto: "Concluído", cor: "blue" }
        ],
        tags: [
            { nome: "JavaScript", cor: "blue" },
            { nome: "HTML", cor: "yellow" },
            { nome: "TailwindCSS", cor: "indigo" }
        ],
        linkLive: { url: "https://www.protepac.com.br", texto: "protepac.com.br" },
        linkGitHub: "https://github.com/fabricio-rv/site_seguranca"
    },
    {
        titulo: "Nadia Bolos Cenográficos",
        descricao: "Site vitrine para aluguel de bolos cenográficos e decoração.",
        descricaoLonga: "Site institucional desenvolvido para facilitar o aluguel de bolos fakes para eventos. Funciona como um catálogo digital onde os clientes podem visualizar os modelos e entrar em contato. Foco total em design elegante e facilidade de uso.",
        detalhesTecnicos: "Projeto construído com HTML, CSS e JavaScript puro (Vanilla JS) para garantir máxima performance e carregamento instantâneo. Design totalmente responsivo adaptado para celulares, com botões de ação (CTA) integrados.",
        imagem: "imagens/nadiabolos.png",
        galeria: ["imagens/nadiabolos.png"],
        badges: [
            { texto: "Experiência Profissional", cor: "yellow" },
            { texto: "Concluído", cor: "blue" }
        ],
        tags: [
            { nome: "JavaScript", cor: "yellow" },
            { nome: "HTML", cor: "orange" },
            { nome: "CSS", cor: "blue" }
        ],
        linkLive: { url: "https://nadiaboloscenograficos.com.br", texto: "nadiaboloscenograficos.com.br" },
        linkGitHub: "https://github.com/fabricio-rv/nadiabolosfakes"
    },
    {
        titulo: "App Segurança",
        descricao: "Aplicativo mobile em Flutter para gestão de clientes e chamados.",
        descricaoLonga: "Este aplicativo foi desenvolvido para otimizar o fluxo de trabalho de técnicos de segurança eletrônica. Ele permite o cadastro offline de clientes, gestão de orçamentos em PDF e abertura de chamados técnicos com geolocalização.",
        detalhesTecnicos: "A arquitetura utiliza o padrão BLoC para gerenciamento de estado, garantindo testabilidade e separação de responsabilidades. O backend é em Firebase (Firestore + Auth) com Cloud Functions para notificações push.",
        imagem: "imagens/protepac_app.png",
        galeria: ["imagens/protepac_app.png", "imagens/protepac_app.png"],
        badges: [
            { texto: "Experiência Profissional", cor: "yellow" },
            { texto: "Em Andamento", cor: "green" }
        ],
        tags: [
            { nome: "Flutter", cor: "blue" },
            { nome: "Dart", cor: "purple" },
            { nome: "Firebase", cor: "green" }
        ],
        linkLive: { url: "https://protepacapp.vercel.app", texto: "protepacapp.vercel.app" },
        linkGitHub: "https://github.com/fabricio-rv/app_seguranca"
    },
    {
        titulo: "Janine Doces",
        descricao: "Vitrine digital para encomendas de doces artesanais.",
        descricaoLonga: "Site desenvolvido para profissionalizar a divulgação dos doces artesanais da Janine. Serve como um portfólio digital atraente para festas e eventos, permitindo que clientes conheçam a qualidade dos produtos e solicitem orçamentos de forma prática.",
        detalhesTecnicos: "Estrutura leve utilizando HTML5, CSS3 e JavaScript. O foco do desenvolvimento é a apresentação visual dos produtos e a conversão de visitantes em clientes através de integração direta com WhatsApp.",
        imagem: "imagens/janinedoces.png",
        galeria: ["imagens/janinedoces.png"],
        badges: [
            { texto: "Experiência Profissional", cor: "yellow" },
            { texto: "Em Andamento", cor: "green" }
        ],
        tags: [
            { nome: "JavaScript", cor: "yellow" },
            { nome: "HTML", cor: "orange" },
            { nome: "CSS", cor: "blue" }
        ],
        linkLive: { url: "https://janinebiccadoces.com.br", texto: "janinebiccadoces.com.br" },
        linkGitHub: "https://github.com/fabricio-rv/janinedoces"
    },
    {
        titulo: "Portfólio Pessoal",
        descricao: "Meu espaço pessoal na web para apresentar trabalhos.",
        descricaoLonga: "Desenvolvido do zero sem frameworks pesados inicialmente, evoluindo para uma estrutura modularizada com JavaScript.",
        detalhesTecnicos: "Utiliza Vanilla JS moderno (ES6+) para manipulação do DOM e renderização dinâmica dos projetos via JSON, garantindo performance máxima sem o peso de frameworks como React.",
        imagem: "imagens/fabricio2.jpg",
        galeria: ["imagens/fabricio2.jpg"],
        badges: [
            { texto: "Projeto Pessoal", cor: "purple" },
            { texto: "Concluído", cor: "blue" }
        ],
        tags: [
            { nome: "HTML", cor: "blue" },
            { nome: "TailwindCSS", cor: "indigo" },
            { nome: "JavaScript", cor: "yellow" }
        ],
        linkLive: { url: "https://fabriciorassier.com.br", texto: "fabriciorassier.com.br" },
        linkGitHub: "https://github.com/fabricio-rv/fabricio_rassier"
    },
    {
        titulo: "Messi: Bio & Stats",
        descricao: "Enciclopédia interativa sobre a carreira do maior jogador da história.",
        descricaoLonga: "Uma experiência digital imersiva que narra a trajetória de Lionel Messi. O projeto não é apenas uma biografia, mas uma interface rica em dados que compila estatísticas, títulos e momentos históricos. Foco total em Design Responsivo e Storytelling visual.",
        detalhesTecnicos: "Uso avançado de CSS Grid e Flexbox para criar layouts assimétricos e responsivos que funcionam em qualquer tela. A estrutura semântica do HTML garante acessibilidade e SEO otimizado para motores de busca.", imagem: "imagens/messi.png",
        galeria: ["imagens/messi.png"],
        badges: [
            { texto: "Projeto Pessoal", cor: "purple" },
            { texto: "Concluído", cor: "blue" }
        ],
        tags: [
            { nome: "HTML", cor: "blue" },
            { nome: "CSS", cor: "pink" },
            { nome: "JavaScript", cor: "yellow" }
        ],
        linkLive: { url: "https://messigoat.com.br", texto: "messigoat.com.br" },
        linkGitHub: "https://github.com/fabricio-rv/messi"
    },
    {
        titulo: "Matchly Pro",
        descricao: "Ecossistema mobile completo para amantes de futebol amador.",
        descricaoLonga: "A evolução do Matchly GO. Agora focado em Mobile First com Flutter. O Hub Esportivo visa centralizar estatísticas de campeonatos amadores.",
        detalhesTecnicos: "Integração profunda com APIs de estatísticas esportivas e uso de Clean Architecture para garantir escalabilidade e manutenção do código a longo prazo.",
        imagem: "imagens/fut.png",
        galeria: ["imagens/fut.png", "imagens/fut.png"],
        badges: [
            { texto: "Projeto Pessoal", cor: "purple" },
            { texto: "Em Andamento", cor: "green" }
        ],
        tags: [
            { nome: "Flutter", cor: "blue" },
            { nome: "Dart", cor: "purple" },
            { nome: "Firebase", cor: "green" }
        ],
        linkLive: { url: "https://ifut-app-web.vercel.app", texto: "ifut-app-web.vercel.app" },
        linkGitHub: "https://github.com/fabricio-rv/ifut_app"
    },
    {
        titulo: "Matchly GO",
        descricao: "App para organização de partidas e matchmaking de futebol.",
        descricaoLonga: "Uma plataforma completa para quem quer jogar bola. Permite criar partidas, encontrar jogos por região/horário e gerenciar presença. Conta com sistema de avaliação (1-5 estrelas), níveis de habilidade (Resenha vs Competitivo) e chat interativo entre os participantes.",
        detalhesTecnicos: "Desenvolvido em Flutter com backend Firebase. Utiliza Realtime Database para o chat e atualizações instantâneas de partidas, além de sistema de autenticação e perfis de usuário com histórico de jogos.",
        imagem: "imagens/matchlygo.png",
        galeria: ["imagens/matchlygo.png"],
        badges: [
            { texto: "Projeto Pessoal", cor: "purple" },
            { texto: "Em Andamento", cor: "green" }
        ],
        tags: [
            { nome: "Flutter", cor: "blue" },
            { nome: "Dart", cor: "purple" },
            { nome: "Firebase", cor: "green" }
        ],
        linkLive: { url: "https://fut-web-app.vercel.app", texto: "fut-web-app.vercel.app" },
        linkGitHub: "https://github.com/fabricio-rv/fut"
    },
    {
        titulo: "iFut",
        descricao: "Sistema Web de Matchmaking para Futebol.",
        descricaoLonga: "Projeto de conclusão de curso técnico. O iFut é uma plataforma que conecta jogadores amadores que precisam de um time com times que precisam de jogadores.",
        detalhesTecnicos: "O sistema conta com um chat em tempo real via WebSocket (Socket.io) e um algoritmo de matchmaking baseado em ELO rating para equilibrar as partidas.",
        imagem: "imagens/ifut.png",
        galeria: ["imagens/ifut.png", "imagens/ifut.png"],
        badges: [
            { texto: "Projeto Acadêmico", cor: "indigo" },
            { texto: "Concluído", cor: "blue" }
        ],
        tags: [
            { nome: "PHP", cor: "blue" },
            { nome: "MySQL", cor: "green" },
            { nome: "JavaScript", cor: "yellow" },
            { nome: "HTML", cor: "purple" },
            { nome: "TailwindCSS", cor: "indigo" }
        ],
        linkLive: { url: "http://fut.rf.gd/", texto: "fut.rf.gd" },
        linkGitHub: "https://github.com/fabricio-rv/ifut"
    },
];