const dadosProjetos = [
    {
        titulo: "Site Segurança",
        descricao: "Landing Page de alta performance com SEO Técnico avançado e roteamento inteligente.",
        descricaoLonga: "Solução web desenvolvida para a Protepac, referência em segurança eletrônica. O projeto é uma Landing Page otimizada para capturar leads, integrando APIs de WhatsApp e lógica de contato avançada. A interface segue fielmente a identidade visual da marca (Midnight Blue & Gold), com animações CSS personalizadas e foco total em acessibilidade e retenção do usuário.",
        detalhesTecnicos: "Desenvolvido com HTML5 Semântico e Tailwind CSS. O diferencial é a lógica em Vanilla JS (IIFE) que detecta o dispositivo do usuário (iOS/Android/Desktop) para abrir o app de e-mail nativo correto (Deep Linking). Implementação robusta de SEO Técnico (JSON-LD LocalBusiness, OpenGraph) e otimizações de performance (Lighthouse 95+) com carregamento assíncrono e preloading de assets.",
        imagem: "imagens/site_seguranca/protepac_site1.png",
        galeria: ["imagens/site_seguranca/protepac_site1.png",
            "imagens/site_seguranca/protepac_site2.png"],
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
        descricao: "Plataforma de catálogo digital com sistema avançado de filtragem e SEO Local.",
        descricaoLonga: "Site institucional desenvolvido para modernizar o processo de aluguel da 'Nadia Bolos', referência na região Sul. O projeto transformou um catálogo físico em uma experiência digital imersiva, permitindo que clientes filtrem centenas de modelos por ocasião, tamanho e tema. A interface 'Mobile First' foi projetada para converter visitantes em leads qualificados via WhatsApp, com foco total na usabilidade e na apresentação visual dos produtos.",
        detalhesTecnicos: "Construído em arquitetura JAMstack (HTML5, CSS3, Vanilla JS) para máxima performance (Score 100 no PageSpeed). A lógica de filtragem complexa manipula o DOM em tempo real sem recarregar a página. Destaque para a organização modular dos dados em múltiplos arquivos JS e implementação robusta de Rich Snippets (Schema.org) para SEO Local e Social Sharing (Open Graph).",
        imagem: "imagens/nadiabolos/nadiabolos1.png",
        galeria: ["imagens/nadiabolos/nadiabolos1.png"
            , "imagens/nadiabolos/nadiabolos2.png"
            , "imagens/nadiabolos/nadiabolos14.png"
            , "imagens/nadiabolos/nadiabolos3.png"
            , "imagens/nadiabolos/nadiabolos4.png"
            , "imagens/nadiabolos/nadiabolos5.png"
            , "imagens/nadiabolos/nadiabolos6.png"
            , "imagens/nadiabolos/nadiabolos7.png"
            , "imagens/nadiabolos/nadiabolos8.png"
            , "imagens/nadiabolos/nadiabolos9.png"
            , "imagens/nadiabolos/nadiabolos10.png"
            , "imagens/nadiabolos/nadiabolos11.png"
            , "imagens/nadiabolos/nadiabolos12.png"
            , "imagens/nadiabolos/nadiabolos13.png"
        ],
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
        descricao: "Ecossistema mobile multiplataforma para gestão de chamados e CRM.",
        descricaoLonga: "Aplicativo corporativo desenvolvido para centralizar as operações da Protepac. O sistema atua como um Hub de Serviços com dois módulos distintos: a 'Área do Cliente' (para abertura de chamados técnicos, solicitações financeiras e alertas de segurança) e o 'Painel Administrativo' (para gestão de tickets, CRM e controle de usuários em tempo real). A interface segue rigorosamente o Design System da marca, garantindo uma experiência fluida entre o site e o app.",
        detalhesTecnicos: "Desenvolvido em Flutter (Dart) com arquitetura baseada no padrão BLoC, garantindo separação total entre regras de negócio e interface. O sistema de roteamento é modular, implementando controle de acesso baseado em funções (RBAC) para separar Clientes de Administradores. O backend utiliza Supabase (PostgreSQL) para autenticação segura e persistência de dados, com suporte nativo para Android, iOS e Web.",
        imagem: "imagens/app_seguranca/protepac_app1.png",
        galeria: ["imagens/app_seguranca/protepac_app1.png", "imagens/app_seguranca/protepac_app3.png"
            , "imagens/app_seguranca/protepac_app4.png"
            , "imagens/app_seguranca/protepac_app5.png"
            , "imagens/app_seguranca/protepac_app6.png"
            , "imagens/app_seguranca/protepac_app7.png"
            , "imagens/app_seguranca/protepac_app8.png"
            , "imagens/app_seguranca/protepac_app9.png"
            , "imagens/app_seguranca/protepac_app10.png"
            , "imagens/app_seguranca/protepac_app11.png"
            , "imagens/app_seguranca/protepac_app12.png"
            , "imagens/app_seguranca/protepac_app13.png"
            , "imagens/app_seguranca/protepac_app14.png"
            , "imagens/app_seguranca/protepac_app15.png"
            , "imagens/app_seguranca/protepac_app16.png"
            , "imagens/app_seguranca/protepac_app17.png"
            , "imagens/app_seguranca/protepac_app18.png"
            , "imagens/app_seguranca/protepac_app19.png"
            , "imagens/app_seguranca/protepac_app20.png"
            , "imagens/app_seguranca/protepac_app21.png"
            , "imagens/app_seguranca/protepac_app22.png"
            , "imagens/app_seguranca/protepac_app23.png"
            , "imagens/app_seguranca/protepac_app24.png"
            , "imagens/app_seguranca/protepac_app25.png"
            , "imagens/app_seguranca/protepac_app26.png"
            , "imagens/app_seguranca/protepac_app27.png"
            , "imagens/app_seguranca/protepac_app28.png"
            , "imagens/app_seguranca/protepac_app29.png"
            , "imagens/app_seguranca/protepac_app30.png"
            , "imagens/app_seguranca/protepac_app31.png"
            , "imagens/app_seguranca/protepac_app32.png"
            , "imagens/app_seguranca/protepac_app33.png"
            , "imagens/app_seguranca/protepac_app34.png"
            , "imagens/app_seguranca/protepac_app35.png"
            , "imagens/app_seguranca/protepac_app36.png"
            , "imagens/app_seguranca/protepac_app37.png"
            , "imagens/app_seguranca/protepac_app38.png"
            , "imagens/app_seguranca/protepac_app39.png"
            , "imagens/app_seguranca/protepac_app40.png"
            , "imagens/app_seguranca/protepac_app41.png"
            , "imagens/app_seguranca/protepac_app42.png"
            , "imagens/app_seguranca/protepac_app43.png"
            , "imagens/app_seguranca/protepac_app44.png"
            , "imagens/app_seguranca/protepac_app45.png"
            , "imagens/app_seguranca/protepac_app46.png"
        ],
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
        titulo: "iFut",
        descricao: "Plataforma Full Stack PHP para organização de partidas e avaliação de jogadores.",
        descricaoLonga: "Sistema web completo desenvolvido como TCC, focado em resolver a dor de organizar o futebol semanal. O iFut gerencia todo o ciclo de uma partida: desde o agendamento e convite de jogadores até o sistema de avaliação pós-jogo (reputação). Conta com funcionalidades sociais como chat, perfis de jogadores e histórico de partidas, tudo envelopado em uma interface moderna com tema Neon/Dark.",
        detalhesTecnicos: "Backend robusto em PHP 8+ com arquitetura MVC-like (separação de lógica, views e banco de dados). O sistema gerencia autenticação segura de sessões, upload de imagens e complexas queries SQL para relacionar jogadores, partidas e avaliações. O frontend utiliza Bootstrap 5 com personalizações CSS3 avançadas (animações keyframes) e JavaScript para interatividade dinâmica.",
        imagem: "imagens/ifut/ifut26.png",
        galeria: ["imagens/ifut/ifut26.png",
            "imagens/ifut/ifut1.png",
            "imagens/ifut/ifut2.png",
            "imagens/ifut/ifut3.png",
            "imagens/ifut/ifut4.png",
            "imagens/ifut/ifut5.png",
            "imagens/ifut/ifut6.png",
            "imagens/ifut/ifut7.png",
            "imagens/ifut/ifut8.png",
            "imagens/ifut/ifut9.png",
            "imagens/ifut/ifut10.png",
            "imagens/ifut/ifut11.png",
            "imagens/ifut/ifut12.png",
            "imagens/ifut/ifut13.png",
            "imagens/ifut/ifut14.png",
            "imagens/ifut/ifut15.png",
            "imagens/ifut/ifut16.png",
            "imagens/ifut/ifut17.png",
            "imagens/ifut/ifut18.png",
            "imagens/ifut/ifut19.png",
            "imagens/ifut/ifut20.png",
            "imagens/ifut/ifut21.png",
            "imagens/ifut/ifut22.png",
            "imagens/ifut/ifut23.png",
            "imagens/ifut/ifut24.png",
            "imagens/ifut/ifut25.png"
        ],
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
    {
        titulo: "Portfólio Pessoal",
        descricao: "SPA (Single Page Application) construída com arquitetura baseada em componentes Vanilla JS.",
        descricaoLonga: "Meu espaço pessoal na web, projetado para ser um showcase vivo das minhas habilidades. Ao contrário de templates prontos, este portfólio foi arquitetado do zero. Ele utiliza um sistema próprio de renderização de componentes baseado em dados JSON, simulando o comportamento reativo de frameworks modernos, mas com a leveza do JavaScript puro.",
        detalhesTecnicos: "Desenvolvido sem frameworks (No-Framework Approach) para demonstrar domínio dos fundamentos da Web. A arquitetura separa estritamente Dados (`dados*.js`) de Lógica (`script.js`) e Apresentação (`HTML/Tailwind`). Conta com renderização dinâmica de DOM, manipulação de eventos complexos (Modais, Carrossel), animações via AOS/Vanta.js e integração de formulário via AJAX/Fetch API.",
        imagem: "imagens/pessoal/fabricio1.png",
        galeria: ["imagens/pessoal/fabricio1.png",
            "imagens/pessoal/fabricio2.png",
            "imagens/pessoal/fabricio3.png",
            "imagens/pessoal/fabricio4.png",
            "imagens/pessoal/fabricio5.png",
            "imagens/pessoal/fabricio6.png",
            "imagens/pessoal/fabricio7.png"
        ],
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
        titulo: "Messi Bio & Stats",
        descricao: "Enciclopédia interativa PWA-Ready com análise de dados e design moderno.",
        descricaoLonga: "Mais do que uma biografia, este projeto é uma aplicação web imersiva que documenta a carreira do atleta através de storytelling visual. A interface conta com 'Dark Mode' nativo, animações de rolagem (AOS) e tabelas de estatísticas dinâmicas. O projeto foi otimizado para SEO e configurado como PWA (Progressive Web App), oferecendo uma experiência de aplicativo nativo em dispositivos móveis.",
        detalhesTecnicos: "Desenvolvido com Tailwind CSS para estilização rápida e consistente. A arquitetura inclui integração com Google Analytics 4 (GA4) para monitoramento de tráfego. O layout responsivo utiliza Grid e Flexbox avançados para organizar grandes volumes de dados (títulos e recordes) de forma legível em qualquer dispositivo.",
        imagem: "imagens/messi/messi1.png",
        galeria: ["imagens/messi/messi1.png",
            "imagens/messi/messi2.png",
            "imagens/messi/messi3.png",
            "imagens/messi/messi4.png",
            "imagens/messi/messi5.png",
            "imagens/messi/messi6.png",
            "imagens/messi/messi7.png",
            "imagens/messi/messi8.png",
            "imagens/messi/messi9.png"
        ],
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
        titulo: "App Hub Esportivo",
        descricao: "SuperApp social e competitivo para o ecossistema do futebol amador.",
        descricaoLonga: "A evolução definitiva do gerenciamento esportivo. O Matchly GO atua como uma rede social verticalizada que conecta Jogadores, Técnicos e Torcedores em um único ecossistema. Mais do que agendar jogos, a plataforma gamifica a carreira amadora com Rankings globais, Feed de notícias interativo, Loja virtual e integração de estatísticas profissionais. O foco é entregar uma experiência de 'pro-player' para o futebol de várzea.",
        detalhesTecnicos: "Desenvolvido em Flutter com backend Serverless via Supabase (PostgreSQL), garantindo persistência de dados e autenticação segura (JWT). A arquitetura utiliza o padrão Provider (MultiProvider) para gerenciamento de estado global escalável através de dezenas de módulos. O sistema conta com funcionalidades Real-Time (Chat e Matchmaking), integração com APIs externas (SofaScore) e separação clara de regras de negócio via Controllers.",
        imagem: "imagens/hub_esportivo/hub1.png",
        galeria: ["imagens/hub_esportivo/hub1.png",
            "imagens/hub_esportivo/hub2.png",
            "imagens/hub_esportivo/hub3.png",
            "imagens/hub_esportivo/hub4.png",
            "imagens/hub_esportivo/hub5.png",
            "imagens/hub_esportivo/hub6.png",
            "imagens/hub_esportivo/hub7.png",
            "imagens/hub_esportivo/hub8.png",
            "imagens/hub_esportivo/hub9.png",
            "imagens/hub_esportivo/hub10.png",
            "imagens/hub_esportivo/hub11.png",
            "imagens/hub_esportivo/hub12.png",
            "imagens/hub_esportivo/hub13.png",
            "imagens/hub_esportivo/hub14.png",
            "imagens/hub_esportivo/hub15.png",
            "imagens/hub_esportivo/hub16.png",
            "imagens/hub_esportivo/hub17.png",
            "imagens/hub_esportivo/hub18.png",
            "imagens/hub_esportivo/hub19.png",
            "imagens/hub_esportivo/hub20.png",
            "imagens/hub_esportivo/hub21.png",
            "imagens/hub_esportivo/hub22.png",
            "imagens/hub_esportivo/hub23.png",
            "imagens/hub_esportivo/hub24.png",
            "imagens/hub_esportivo/hub25.png",
            "imagens/hub_esportivo/hub26.png",
            "imagens/hub_esportivo/hub27.png",
            "imagens/hub_esportivo/hub28.png",
            "imagens/hub_esportivo/hub29.png",
            "imagens/hub_esportivo/hub30.png",
            "imagens/hub_esportivo/hub31.png",
            "imagens/hub_esportivo/hub32.png",
            "imagens/hub_esportivo/hub33.png"
        ],
        badges: [
            { texto: "Projeto Pessoal", cor: "purple" },
            { texto: "Em Andamento", cor: "green" }
        ],
        tags: [
            { nome: "Flutter", cor: "blue" },
            { nome: "Dart", cor: "purple" },
            { nome: "Supabase", cor: "green" }
        ],
        linkLive: { url: "https://ifut-app-web.vercel.app", texto: "ifut-app-web.vercel.app" },
        linkGitHub: "https://github.com/fabricio-rv/ifut_app"
    },
    {
        titulo: "Fut",
        descricao: "SuperApp social e competitivo para o ecossistema do futebol amador.",
        descricaoLonga: "A evolução definitiva do gerenciamento esportivo. O Matchly GO atua como uma rede social verticalizada que conecta Jogadores, Técnicos e Torcedores em um único ecossistema. Mais do que agendar jogos, a plataforma gamifica a carreira amadora com Rankings globais, Feed de notícias interativo, Loja virtual e integração de estatísticas profissionais. O foco é entregar uma experiência de 'pro-player' para o futebol de várzea.",
        detalhesTecnicos: "Desenvolvido em Flutter com backend Serverless via Supabase (PostgreSQL), garantindo persistência de dados e autenticação segura (JWT). A arquitetura utiliza o padrão Provider (MultiProvider) para gerenciamento de estado global escalável através de dezenas de módulos. O sistema conta com funcionalidades Real-Time (Chat e Matchmaking), integração com APIs externas (SofaScore) e separação clara de regras de negócio via Controllers.",
        imagem: "imagens/fut/fut3.png",
        galeria: ["imagens/fut/fut1.png",
            "imagens/fut/fut2.png",
            "imagens/fut/fut3.png",
            "imagens/fut/fut4.png",
            "imagens/fut/fut5.png",
            "imagens/fut/fut6.png",
            "imagens/fut/fut7.png",
            "imagens/fut/fut8.png",
            "imagens/fut/fut9.png",
            "imagens/fut/fut10.png",
            "imagens/fut/fut11.png"
        ],
        badges: [
            { texto: "Projeto Pessoal", cor: "purple" },
            { texto: "Em Andamento", cor: "green" }
        ],
        tags: [
            { nome: "Flutter", cor: "blue" },
            { nome: "Dart", cor: "purple" }
        ],
        linkLive: { url: "https://fut-web-app.vercel.app", texto: "fut-web-app.vercel.app" },
        linkGitHub: "https://github.com/fabricio-rv/fut"
    },
    {
        titulo: "Janine Doces",
        descricao: "Vitrine digital para encomendas de doces artesanais.",
        descricaoLonga: "Site desenvolvido para profissionalizar a divulgação dos doces artesanais da Janine. Serve como um portfólio digital atraente para festas e eventos, permitindo que clientes conheçam a qualidade dos produtos e solicitem orçamentos de forma prática.",
        detalhesTecnicos: "Estrutura leve utilizando HTML5, CSS3 e JavaScript. O foco do desenvolvimento é a apresentação visual dos produtos e a conversão de visitantes em clientes através de integração direta com WhatsApp.",
        imagem: "imagens/janinedoces/janinedoces.png",
        galeria: ["imagens/janinedoces/janinedoces.png"],
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
    }
];