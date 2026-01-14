/* =========================================
   Lógica de Renderização Dinâmica
   ========================================= */

// Função auxiliar para renderizar badges/tags
const renderBadges = (badges) => {
    return badges.map(b => `
        <span class="px-2 py-1 bg-${b.cor}-500/20 text-${b.cor}-300 text-xs rounded">${b.nome}</span>
    `).join('');
};

function renderHero() {
    const hero = dadosGeral.hero;
    document.getElementById('hero-content').innerHTML = `
        <div data-aos="fade-up" class="mb-6">
            <div class="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gray-700 shadow-lg relative z-10">
                <img src="${hero.imagem}" alt="Foto de ${hero.titulo}" class="w-full h-full object-cover object-center" loading="eager">
            </div>
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" class="text-4xl md:text-5xl font-bold mb-4">${hero.titulo}</h1>
        <h2 data-aos="fade-up" data-aos-delay="200" class="text-2xl md:text-3xl font-semibold mb-6 gradient-text">${hero.subtitulo}</h2>
        <p data-aos="fade-up" data-aos-delay="300" class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            ${hero.descricao}
        </p>
        <div data-aos="fade-up" data-aos-delay="400" class="flex flex-wrap justify-center gap-4 mb-12">
            <a href="#contact" class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 flex items-center">
                <i data-feather="mail" class="mr-2"></i> Contato
            </a>
            <a href="${hero.links.curriculo}" target="_blank" rel="noopener noreferrer" class="px-6 py-3 border border-blue-600 text-blue-400 font-medium rounded-lg hover:bg-gray-800 transition duration-300 flex items-center">
                <i data-feather="file-text" class="mr-2"></i> Currículo
            </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" class="flex justify-center space-x-6">
            <a href="${hero.links.github}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition duration-300" aria-label="GitHub">
                <i data-feather="github" class="w-6 h-6"></i>
            </a>
            <a href="${hero.links.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition duration-300" aria-label="LinkedIn">
                <i data-feather="linkedin" class="w-6 h-6"></i>
            </a>
            <a href="${hero.links.email}" class="text-gray-400 hover:text-blue-400 transition duration-300" aria-label="Email">
                <i data-feather="mail" class="w-6 h-6"></i>
            </a>
        </div>
    `;
}

function renderSobre() {
    const paragrafosHTML = dadosSobre.paragrafos.map(p => `<p class="mb-4">${p}</p>`).join('');
    const badgesHTML = dadosSobre.badges.map(b => `<span class="px-3 py-1 bg-${b.cor}-500/20 text-${b.cor}-300 rounded-full text-sm">${b.nome}</span>`).join('');

    document.getElementById('sobre-texto').innerHTML = `
        <h3 class="text-2xl font-semibold mb-6">Olá, eu sou o Fabricio! 👋</h3>
        ${paragrafosHTML}
        <div class="flex flex-wrap gap-2 mt-2">
            ${badgesHTML}
        </div>
    `;

    const statsHTML = dadosSobre.stats.map(stat => `
        <div class="p-4 bg-gray-700 rounded-lg text-center">
            <i data-feather="${stat.icone}" class="w-8 h-8 ${stat.corIcone} mx-auto mb-2"></i>
            <h4 class="font-semibold">${stat.titulo}</h4>
            <p class="text-sm">${stat.valor}</p>
        </div>
    `).join('');

    document.getElementById('sobre-stats').innerHTML = statsHTML;
    // Inserir dados de contato no card de sobre
    document.getElementById('sobre-contato-info').innerHTML = `
        <div class="flex items-center mb-3">
            <i data-feather="map-pin" class="w-5 h-5 text-gray-400 mr-2"></i>
            <span>${dadosGeral.contato.localizacao}</span>
        </div>
        <div class="flex items-center mb-3">
            <i data-feather="mail" class="w-5 h-5 text-gray-400 mr-2"></i>
            <span>${dadosGeral.contato.email}</span>
        </div>
        <div class="flex items-center">
            <i data-feather="phone" class="w-5 h-5 text-gray-400 mr-2"></i>
            <span>${dadosGeral.contato.telefone}</span>
        </div>
    `;
}

function renderHabilidades() {
    const principaisHTML = dadosHabilidades.principais.map(tech => `
        <div>
            <div class="flex justify-between mb-1">
                <span class="text-sm font-medium">${tech.nome}</span>
                <span class="text-sm font-medium">${tech.nivel}</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5">
                <div class="${tech.cor} h-2.5 rounded-full" style="width: ${tech.nivel}"></div>
            </div>
        </div>
    `).join('');
    document.getElementById('skills-principais').innerHTML = principaisHTML;

    const outrasHTML = dadosHabilidades.outras.map(skill => `
        <div class="skill-badge px-4 py-2 bg-gray-800 shadow-sm rounded-lg flex items-center">
            <i data-feather="${skill.icone}" class="w-4 h-4 mr-2 ${skill.corIcone}"></i>
            <span>${skill.nome}</span>
        </div>
    `).join('');
    document.getElementById('skills-outras').innerHTML = outrasHTML;

    const idiomasHTML = dadosHabilidades.idiomas.map(lang => `
        <div class="flex items-center">
            <span class="w-24">${lang.nome}</span>
            <div class="flex-1 ml-2">
                <div class="h-2 bg-gray-700 rounded-full">
                    <div class="h-2 bg-blue-600 rounded-full" style="width: ${lang.percentual}"></div>
                </div>
            </div>
            <span class="ml-2 text-sm text-gray-400">${lang.nivel}</span>
        </div>
    `).join('');
    document.getElementById('skills-idiomas').innerHTML = idiomasHTML;
}

function renderTrajetoria() {
    // Renderiza Educação
    const educacaoHTML = dadosTrajetoria.educacao.map((item, index) => `
        <div data-aos="fade-up" data-aos-delay="${index * 100}" class="timeline-item relative pl-8">
            <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-800 shadow-md"></div>
            <div class="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <div class="flex justify-between items-start mb-2 gap-4"> <h4 class="text-lg font-semibold">${item.curso}</h4>
                    <span class="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded whitespace-nowrap flex-shrink-0 h-fit">${item.periodo}</span>
                </div>
                <p class="mb-3">${item.instituicao}</p>
                <p class="text-sm">${item.descricao}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('trajetoria-educacao').innerHTML = educacaoHTML;

    // Renderiza Certificações (apenas se certifique que o ID existe no HTML ou remova se não for usar)
    if(document.getElementById('trajetoria-certificacoes')){
        const certificacoesHTML = dadosTrajetoria.certificacoes.map((cert, index) => `
            <div data-aos="fade-up" data-aos-delay="${400 + (index * 100)}" class="bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                <h4 class="font-medium">${cert.nome}</h4>
                <p class="text-sm">${cert.instituicao}</p>
            </div>
        `).join('');
        document.getElementById('trajetoria-certificacoes').innerHTML = certificacoesHTML;
    }
}

function renderProjetos() {
    const projetosHTML = dadosProjetos.map((proj, index) => {
        // Lógica de Badges (Agora com efeito Glassmorphism)
        let badgesHTML = '';
        if (proj.badges && proj.badges.length > 0) {
            const listaBadges = proj.badges.map(b => 
                `<span class="bg-${b.cor}-500/90 text-white text-[10px] font-semibold px-2 py-1 rounded shadow-lg backdrop-blur-sm border border-${b.cor}-400/30">${b.texto.toUpperCase()}</span>`
            ).join('');
            
            // Container absoluto flutuando sobre a imagem
            badgesHTML = `<div class="absolute top-3 right-3 flex flex-col gap-2 items-end z-10">${listaBadges}</div>`;
        }

        // Lógica dos Botões de Ação (Design Moderno)
        const linkLiveHTML = proj.linkLive ? `
            <a href="${proj.linkLive.url}" target="_blank" rel="noopener noreferrer" 
               class="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group">
                <i data-feather="external-link" class="w-4 h-4 group-hover:scale-110 transition-transform"></i> 
                <span>Acessar</span>
            </a>
        ` : '';

        // Nota de rodapé (caso exista)
        const rodapeHTML = proj.notaRodape ? 
            `<div class="mb-3 flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 p-2 rounded border border-gray-700/50">
                <i data-feather="info" class="w-3 h-3"></i> ${proj.notaRodape}
             </div>` : '';
        
        return `
        <div data-aos="fade-up" data-aos-delay="${(index + 1) * 100}" 
             class="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full overflow-hidden">
            
            <div class="h-52 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-0 opacity-60"></div>
                
                <img src="${proj.imagem}" alt="${proj.titulo}" 
                     class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out">
                
                ${badgesHTML}
            </div>

            <div class="p-6 flex flex-col flex-grow relative">
                <div class="mb-4">
                    <h3 class="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">${proj.titulo}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">${proj.descricao}</p>
                </div>

                <div class="flex flex-wrap gap-2 mb-6 mt-auto">
                    ${renderBadges(proj.tags)}
                </div>

                ${rodapeHTML}
                
                <div class="pt-5 border-t border-gray-700/50 flex items-center gap-3 mt-auto">
                    ${linkLiveHTML}
                    
                    <a href="${proj.linkGitHub}" target="_blank" rel="noopener noreferrer" 
                       class="flex-1 bg-gray-700/50 hover:bg-gray-700 hover:text-white text-gray-300 text-xs font-bold py-2.5 px-4 rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-gray-500 flex items-center justify-center gap-2">
                        <i data-feather="github" class="w-4 h-4"></i>
                        <span>Código</span>
                    </a>
                </div>
            </div>
        </div>
        `;
    }).join('');
    
    document.getElementById('projetos-lista').innerHTML = projetosHTML;
    
    // Recarregar ícones
    feather.replace();
}

function renderContatoFooter() {
    // Formulário
    const formHTML = `
        <form action="${dadosGeral.contato.formAction}" method="POST" class="space-y-6">
            <div>
                <label for="name" class="block text-sm font-medium mb-1">Nome</label>
                <input type="text" id="name" name="name" required class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="Seu nome">
            </div>
            <div>
                <label for="email" class="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" required class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="seu@email.com">
            </div>
            <div>
                <label for="subject" class="block text-sm font-medium mb-1">Assunto</label>
                <input type="text" id="subject" name="subject" required class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="Sobre o que deseja falar?">
            </div>
            <div>
                <label for="message" class="block text-sm font-medium mb-1">Mensagem</label>
                <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="Digite sua mensagem aqui..."></textarea>
            </div>
            <button type="submit" class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition duration-300 flex items-center justify-center">
                <i data-feather="send" class="w-5 h-5 mr-2"></i> Enviar Mensagem
            </button>
        </form>
    `;
    document.getElementById('contato-form').innerHTML = formHTML;

    // Info Contato Lateral e Footer
    const infoHTML = `
        <div class="flex items-start">
            <div class="flex-shrink-0 mt-1"><i data-feather="mail" class="w-5 h-5 text-blue-400"></i></div>
            <div class="ml-4"><h4 class="text-sm font-medium">Email</h4><a href="mailto:${dadosGeral.contato.email}" class="text-blue-400 hover:underline">${dadosGeral.contato.email}</a></div>
        </div>
        <div class="flex items-start">
            <div class="flex-shrink-0 mt-1"><i data-feather="phone" class="w-5 h-5 text-blue-400"></i></div>
            <div class="ml-4"><h4 class="text-sm font-medium">Telefone</h4><a href="tel:${dadosGeral.contato.telefone.replace(/\D/g, '')}" class="text-blue-400 hover:underline">${dadosGeral.contato.telefone}</a></div>
        </div>
        <div class="flex items-start">
            <div class="flex-shrink-0 mt-1"><i data-feather="map-pin" class="w-5 h-5 text-blue-400"></i></div>
            <div class="ml-4"><h4 class="text-sm font-medium">Localização</h4><p>${dadosGeral.contato.localizacao}</p></div>
        </div>
        <div class="flex items-start">
            <div class="flex-shrink-0 mt-1"><i data-feather="file-text" class="w-5 h-5 text-blue-400"></i></div>
            <div class="ml-4"><h4 class="text-sm font-medium">Currículo</h4><a href="${dadosGeral.hero.links.curriculo}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline flex items-center">Visualizar PDF <i data-feather="external-link" class="w-4 h-4 ml-1"></i></a></div>
        </div>
    `;
    document.getElementById('contato-info').innerHTML = infoHTML;

    // Footer Info
    document.getElementById('footer-contato').innerHTML = `
        <li class="flex items-center"><i data-feather="mail" class="w-4 h-4 mr-2"></i><span>${dadosGeral.contato.email}</span></li>
        <li class="flex items-center"><i data-feather="phone" class="w-4 h-4 mr-2"></i><span>${dadosGeral.contato.telefone}</span></li>
        <li class="flex items-center"><i data-feather="map-pin" class="w-4 h-4 mr-2"></i><span>${dadosGeral.contato.localizacao}</span></li>
    `;
    document.getElementById('footer-copy').innerHTML = dadosGeral.footer.copyright;
}

/* =========================================
   Inicialização
   ========================================= */

// Renderizar tudo
renderHero();
renderSobre();
renderHabilidades();
renderTrajetoria();
renderProjetos();
renderContatoFooter();

// Inicializar Bibliotecas e Eventos (só depois de renderizar o HTML)

// AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Feather Icons (re-executar para pegar os ícones injetados)
feather.replace();

// Vanta.js
if (document.getElementById("hero") && window.VANTA) {
    VANTA.GLOBE({
        el: "#hero",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3b82f6,
        backgroundColor: 0x111827,
        size: 0.8
    });
}

// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
}

// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});