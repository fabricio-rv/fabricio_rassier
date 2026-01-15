/* =========================================
   Lógica de Renderização Dinâmica
   ========================================= */

// Estado do Modal
let currentProject = null;
let currentImageIndex = 0;

// Função auxiliar para renderizar tags
const renderBadges = (badges) => {
    return badges.map(b => `
        <span class="px-3 py-1 bg-${b.cor}-500/20 text-${b.cor}-300 text-sm font-medium rounded-md border border-${b.cor}-500/10">${b.nome}</span>
    `).join('');
};

// MUDANÇA: Adicionei classes animate-float e bordas brilhantes
function renderHero() {
    const hero = dadosGeral.hero;
    document.getElementById('hero-content').innerHTML = `
        <div data-aos="fade-up" class="mb-8">
            <div class="animate-float w-80 h-80 mx-auto rounded-full p-2 bg-gradient-to-br from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/20 relative z-10">
                <img src="${hero.imagem}" alt="Foto de ${hero.titulo}" class="w-full h-full object-cover object-center rounded-full border-4 border-gray-900" loading="eager">
            </div>
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" class="text-5xl md:text-6xl font-bold mb-4 tracking-tight">${hero.titulo}</h1>
        <h2 data-aos="fade-up" data-aos-delay="200" class="text-2xl md:text-3xl font-medium mb-8 gradient-text">${hero.subtitulo}</h2>
        <p data-aos="fade-up" data-aos-delay="300" class="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            ${hero.descricao}
        </p>
        <div data-aos="fade-up" data-aos-delay="400" class="flex flex-wrap justify-center gap-5 mb-14">
            <a href="#contact" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-600/40 hover:-translate-y-1 transition-all duration-300 flex items-center">
                <i data-feather="mail" class="mr-2 w-5 h-5"></i> Entre em Contato
            </a>
            <a href="${hero.links.curriculo}" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-gray-800 text-gray-200 font-semibold rounded-xl border border-gray-700 hover:border-gray-500 hover:bg-gray-750 hover:-translate-y-1 transition-all duration-300 flex items-center">
                <i data-feather="download" class="mr-2 w-5 h-5"></i> Ver Currículo
            </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="500" class="flex justify-center space-x-8">
            <a href="${hero.links.github}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300" aria-label="GitHub">
                <i data-feather="github" class="w-7 h-7"></i>
            </a>
            <a href="${hero.links.linkedin}" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300" aria-label="LinkedIn">
                <i data-feather="linkedin" class="w-7 h-7"></i>
            </a>
            <a href="${hero.links.email}" class="text-gray-400 hover:text-purple-400 hover:scale-110 transition-all duration-300" aria-label="Email">
                <i data-feather="mail" class="w-7 h-7"></i>
            </a>
        </div>
    `;
}

function renderSobre() {
    const paragrafosHTML = dadosSobre.paragrafos.map(p => `<p class="mb-4 leading-relaxed text-gray-300">${p}</p>`).join('');
    const badgesHTML = dadosSobre.badges.map(b => `<span class="px-4 py-1.5 bg-${b.cor}-500/10 text-${b.cor}-400 rounded-full text-sm font-medium border border-${b.cor}-500/20">${b.nome}</span>`).join('');

    document.getElementById('sobre-texto').innerHTML = `
        <h3 class="text-3xl font-bold mb-6 text-white">Olá, eu sou o Fabricio! 👋</h3>
        ${paragrafosHTML}
        <div class="flex flex-wrap gap-3 mt-6">
            ${badgesHTML}
        </div>
    `;

    const statsHTML = dadosSobre.stats.map(stat => `
        <div class="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl text-center hover:border-blue-500/30 transition-colors duration-300">
            <div class="w-12 h-12 mx-auto mb-3 bg-gray-700/50 rounded-full flex items-center justify-center">
                <i data-feather="${stat.icone}" class="w-6 h-6 ${stat.corIcone}"></i>
            </div>
            <h4 class="font-bold text-lg text-white mb-1">${stat.titulo}</h4>
            <p class="text-sm text-gray-400">${stat.valor}</p>
        </div>
    `).join('');

    document.getElementById('sobre-stats').innerHTML = statsHTML;

    document.getElementById('sobre-contato-info').innerHTML = `
        <div class="flex items-center mb-4 text-gray-300 hover:text-white transition-colors">
            <div class="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center mr-3">
                <i data-feather="map-pin" class="w-4 h-4 text-blue-400"></i>
            </div>
            <span>${dadosGeral.contato.localizacao}</span>
        </div>
        <div class="flex items-center mb-4 text-gray-300 hover:text-white transition-colors">
            <div class="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center mr-3">
                <i data-feather="mail" class="w-4 h-4 text-purple-400"></i>
            </div>
            <span>${dadosGeral.contato.email}</span>
        </div>
        <div class="flex items-center text-gray-300 hover:text-white transition-colors">
            <div class="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center mr-3">
                <i data-feather="phone" class="w-4 h-4 text-green-400"></i>
            </div>
            <span>${dadosGeral.contato.telefone}</span>
        </div>
    `;
}

// MUDANÇA: Barras de progresso com shadow-lg para efeito "neon"
// MUDANÇA: Agora a cor do texto da porcentagem se adapta à cor da barra (Azul ou Roxo)
function renderHabilidades() {
    const principaisHTML = dadosHabilidades.principais.map(tech => {
        // Lógica para definir a cor do texto baseada na cor da barra definida nos dados
        let textColor = 'text-gray-400'; // Cor padrão
        if (tech.cor.includes('blue')) {
            textColor = 'text-blue-400'; // Se a barra for azul, texto azul
        } else if (tech.cor.includes('purple') || tech.cor.includes('violet')) {
            textColor = 'text-purple-400'; // Se a barra for roxa/violeta, texto roxo
        }

        return `
        <div class="mb-5">
            <div class="flex justify-between mb-2">
                <span class="text-sm font-semibold text-gray-200">${tech.nome}</span>
                
                <span class="text-sm font-bold ${textColor}">${tech.nivel}</span>
            </div>
            <div class="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                <div class="${tech.cor} h-2.5 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out" style="width: ${tech.nivel}"></div>
            </div>
        </div>
        `;
    }).join('');
    document.getElementById('skills-principais').innerHTML = principaisHTML;

    // Restante da função permanece igual...
    const outrasHTML = dadosHabilidades.outras.map(skill => `
        <div class="skill-badge px-4 py-3 bg-gray-800/80 border border-gray-700/50 rounded-xl flex items-center shadow-sm">
            <i data-feather="${skill.icone}" class="w-5 h-5 mr-3 ${skill.corIcone}"></i>
            <span class="text-gray-300 font-medium">${skill.nome}</span>
        </div>
    `).join('');
    document.getElementById('skills-outras').innerHTML = outrasHTML;

    const idiomasHTML = dadosHabilidades.idiomas.map(lang => `
        <div class="flex items-center mb-3">
            <span class="w-24 font-medium text-gray-300">${lang.nome}</span>
            <div class="flex-1 ml-3">
                <div class="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <div class="h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)]" style="width: ${lang.percentual}"></div>
                </div>
            </div>
            <span class="ml-3 text-sm text-gray-400 font-medium">${lang.nivel}</span>
        </div>
    `).join('');
    document.getElementById('skills-idiomas').innerHTML = idiomasHTML;
}

// MUDANÇA: Adicionado classe 'pulse-dot' para animar as bolinhas
function renderTrajetoria() {
    const educacaoHTML = dadosTrajetoria.educacao.map((item, index) => `
        <div data-aos="fade-up" data-aos-delay="${index * 100}" class="timeline-item relative pl-10">
            <div class="pulse-dot absolute left-0 top-0 w-6 h-6 rounded-full bg-purple-600 border-4 border-gray-900 shadow-lg z-10"></div>
            <div class="bg-gray-800/60 border border-gray-700/50 p-6 rounded-xl shadow-lg hover:border-purple-500/30 transition-all duration-300">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                    <h4 class="text-xl font-bold text-white">${item.curso}</h4>
                    <span class="text-xs font-semibold bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20 whitespace-nowrap">${item.periodo}</span>
                </div>
                <p class="mb-3 text-blue-400 font-medium">${item.instituicao}</p>
                <p class="text-sm text-gray-400 leading-relaxed">${item.descricao}</p>
            </div>
        </div>
    `).join('');
    document.getElementById('trajetoria-educacao').innerHTML = educacaoHTML;

    if (document.getElementById('trajetoria-certificacoes')) {
        const certificacoesHTML = dadosTrajetoria.certificacoes.map((cert, index) => `
            <div data-aos="fade-up" data-aos-delay="${400 + (index * 100)}" class="bg-gray-800/60 border border-gray-700/50 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all duration-300 flex items-start">
                <div class="mt-1 mr-3 text-blue-500"><i data-feather="award" class="w-5 h-5"></i></div>
                <div>
                    <h4 class="font-bold text-white mb-1">${cert.nome}</h4>
                    <p class="text-sm text-gray-400">${cert.instituicao}</p>
                </div>
            </div>
        `).join('');
        document.getElementById('trajetoria-certificacoes').innerHTML = certificacoesHTML;
    }
}

function renderProjetos() {
    const projetosHTML = dadosProjetos.map((proj, index) => {
        let badgesHTML = '';
        if (proj.badges && proj.badges.length > 0) {
            // MUDANÇA AQUI: Aumentei o tamanho da fonte (text-xs) e o padding dos badges dos cards
            const listaBadges = proj.badges.map(b =>
                `<span class="bg-${b.cor}-500/90 text-white text-xs font-semibold px-3 py-1 rounded shadow-lg backdrop-blur-sm border border-${b.cor}-400/30">${b.texto.toUpperCase()}</span>`
            ).join('');
            badgesHTML = `<div class="absolute top-3 right-3 flex flex-col gap-2 items-end z-10">${listaBadges}</div>`;
        }

        const linkLiveHTML = proj.linkLive ? `
            <a href="${proj.linkLive.url}" target="_blank" rel="noopener noreferrer" 
               class="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group"
               onclick="event.stopPropagation()">
                <i data-feather="external-link" class="w-4 h-4 group-hover:scale-110 transition-transform"></i> 
                <span>Acessar</span>
            </a>
        ` : '';

        return `
        <div data-aos="fade-up" data-aos-delay="${(index + 1) * 100}" 
             class="group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full overflow-hidden cursor-pointer"
             onclick="openModal(${index})">
            
            <div class="h-72 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-0 opacity-60"></div>
                <img src="${proj.imagem}" alt="${proj.titulo}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out">
                ${badgesHTML}
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span class="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                        <i data-feather="maximize-2" class="inline w-4 h-4 mr-2"></i> Ver Detalhes
                    </span>
                </div>
            </div>

            <div class="p-6 flex flex-col flex-grow relative">
                <div class="mb-4">
                    <h3 class="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">${proj.titulo}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed line-clamp-3">${proj.descricao}</p>
                </div>

                <div class="flex flex-wrap gap-2 mb-6 mt-auto">
                    ${renderBadges(proj.tags)}
                </div>
                
                <div class="pt-5 border-t border-gray-700/50 flex items-center gap-3 mt-auto">
                    ${linkLiveHTML}
                    <a href="${proj.linkGitHub}" target="_blank" rel="noopener noreferrer" 
                       class="flex-1 bg-gray-700/50 hover:bg-gray-700 hover:text-white text-gray-300 text-xs font-bold py-2.5 px-4 rounded-lg transition-all duration-300 border border-gray-600/30 hover:border-gray-500 flex items-center justify-center gap-2"
                       onclick="event.stopPropagation()">
                        <i data-feather="github" class="w-4 h-4"></i>
                        <span>Código</span>
                    </a>
                </div>
            </div>
        </div>
        `;
    }).join('');

    document.getElementById('projetos-lista').innerHTML = projetosHTML;
    feather.replace();
}

function renderContatoFooter() {
    const formHTML = `
        <form action="${dadosGeral.contato.formAction}" method="POST" class="space-y-6">
            <div>
                <label for="name" class="block text-sm font-medium mb-1 text-gray-300">Nome</label>
                <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="Seu nome">
            </div>
            <div>
                <label for="email" class="block text-sm font-medium mb-1 text-gray-300">Email</label>
                <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="seu@email.com">
            </div>
            <div>
                <label for="subject" class="block text-sm font-medium mb-1 text-gray-300">Assunto</label>
                <input type="text" id="subject" name="subject" required class="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="Sobre o que deseja falar?">
            </div>
            <div>
                <label for="message" class="block text-sm font-medium mb-1 text-gray-300">Mensagem</label>
                <textarea id="message" name="message" rows="5" required class="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300" placeholder="Digite sua mensagem aqui..."></textarea>
            </div>
            <button type="submit" class="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <i data-feather="send" class="w-5 h-5 mr-2"></i> Enviar Mensagem
            </button>
        </form>
    `;
    document.getElementById('contato-form').innerHTML = formHTML;

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

    // AQUI ESTÃO OS LINKS DO FOOTER ATUALIZADOS
    document.getElementById('footer-contato').innerHTML = `
        <li class="flex items-center justify-center md:justify-start group">
            <i data-feather="mail" class="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors"></i>
            <a href="mailto:${dadosGeral.contato.email}" class="hover:text-blue-400 transition-colors">${dadosGeral.contato.email}</a>
        </li>
        <li class="flex items-center justify-center md:justify-start group">
            <i data-feather="phone" class="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors"></i>
            <a href="tel:${dadosGeral.contato.telefone.replace(/\D/g, '')}" class="hover:text-blue-400 transition-colors">${dadosGeral.contato.telefone}</a>
        </li>
        <li class="flex items-center justify-center md:justify-start">
            <i data-feather="map-pin" class="w-4 h-4 mr-2"></i>
            <span>${dadosGeral.contato.localizacao}</span>
        </li>
    `;
    document.getElementById('footer-copy').innerHTML = dadosGeral.footer.copyright;
}
/* =========================================
   Lógica do Modal (Carrossel e Controle)
   ========================================= */

function openModal(index) {
    currentProject = dadosProjetos[index];
    currentImageIndex = 0;

    document.getElementById('modal-title').textContent = currentProject.titulo;
    document.getElementById('modal-description').textContent = currentProject.descricaoLonga || currentProject.descricao;
    document.getElementById('modal-details').textContent = currentProject.detalhesTecnicos || "Mais detalhes em breve.";

    // BADGES DO MODAL
    const badgesHtml = currentProject.badges.map(b =>
        `<span class="bg-${b.cor}-600 text-white text-sm font-semibold px-4 py-1.5 rounded-md shadow-md">${b.texto}</span>`
    ).join('');
    document.getElementById('modal-badges').innerHTML = badgesHtml;

    // MUDANÇA AQUI: TAGS DO MODAL AGORA SÃO MAIORES (text-base, px-4 py-2)
    // Usando uma renderização inline específica para o modal em vez da função genérica
    const modalTagsHtml = currentProject.tags.map(b => `
        <span class="px-4 py-2 bg-${b.cor}-500/20 text-${b.cor}-300 text-base font-medium rounded-md border border-${b.cor}-500/10">${b.nome}</span>
    `).join('');
    document.getElementById('modal-tags').innerHTML = modalTagsHtml;

    const btnLive = document.getElementById('modal-link-live');
    const btnGit = document.getElementById('modal-link-github');

    // Verifica se existe linkLive no projeto
    if (currentProject.linkLive) {
        btnLive.href = currentProject.linkLive.url;
        // ADIÇÃO DE SEGURANÇA: Força o clique via JS
        btnLive.onclick = function () { window.open(currentProject.linkLive.url, '_blank'); return false; };

        btnLive.classList.remove('hidden');
        btnLive.classList.add('flex');
    } else {
        btnLive.classList.add('hidden');
        btnLive.classList.remove('flex');
        btnLive.onclick = null;
    }

    btnGit.href = currentProject.linkGitHub;
    btnGit.onclick = function () { window.open(currentProject.linkGitHub, '_blank'); return false; };

    updateModalImage();

    document.getElementById('project-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function updateModalImage() {
    const imgElement = document.getElementById('modal-image');
    const images = currentProject.galeria || [currentProject.imagem];

    imgElement.src = images[currentImageIndex];
    document.getElementById('img-counter').textContent = `${currentImageIndex + 1}/${images.length}`;
}

function nextImage() {
    const images = currentProject.galeria || [currentProject.imagem];
    if (images.length <= 1) return;

    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateModalImage();
}

function prevImage() {
    const images = currentProject.galeria || [currentProject.imagem];
    if (images.length <= 1) return;

    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateModalImage();
}

document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', closeModal);
document.getElementById('next-img').addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
document.getElementById('prev-img').addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !document.getElementById('project-modal').classList.contains('hidden')) {
        closeModal();
    }
});


/* =========================================
   Inicialização
   ========================================= */

renderHero();
renderSobre();
renderHabilidades();
renderTrajetoria();
renderProjetos();
renderContatoFooter();

AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
feather.replace();

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