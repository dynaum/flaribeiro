(function () {
  'use strict';

  // ---------- i18n dictionaries ----------

  var i18n = {
    'pt-BR': {
      'meta.title': 'Flávia Ribeiro — Personal Trainer',
      'meta.description': 'Flávia Ribeiro — personal trainer. Treinos presenciais e online, com método e acompanhamento próximo.',
      'meta.ogDescription': 'Treinos presenciais e online, com método e acompanhamento próximo.',
      'skip': 'Ir para o conteúdo',

      'nav.about': 'Sobre',
      'nav.services': 'Serviços',
      'nav.method': 'Método',
      'nav.contact': 'Contato',

      'aria.langToggle': 'Trocar para inglês',
      'aria.themeToggle': 'Mudar para tema escuro',

      'hero.eyebrow': 'Personal trainer · Brasil',
      'hero.title': 'Movimento com <em>propósito</em>.',
      'hero.lede': 'Treinos presenciais e online desenhados para você — com método, acompanhamento próximo e foco no que importa: resultado que dura.',
      'hero.cta1': 'Agende uma conversa',
      'hero.cta2': 'Ver serviços',
      'hero.proof1Number': '+100',
      'hero.proof1Label': 'alunos atendidos',
      'hero.proof2Number': '5★',
      'hero.proof2Label': 'avaliação média',
      'hero.proof3Number': 'CREF',
      'hero.proof3Label': 'profissional registrada',

      'about.eyebrow': 'Sobre',
      'about.title': 'Treinar é cuidar de si — todo dia, do seu jeito.',
      'about.p1': 'Sou Flávia Ribeiro, personal trainer apaixonada por ajudar pessoas a redescobrirem o próprio corpo. Acredito que o melhor treino é aquele que cabe na sua vida — e que respeita seu ritmo, seus limites e seus objetivos reais.',
      'about.p2': 'Trabalho com avaliações detalhadas, planejamento individualizado e acompanhamento constante. Cada plano é construído de acordo com a sua rotina, sua história e o resultado que você quer alcançar. Sem fórmula mágica, sem atalho — só método, presença e consistência.',

      'services.eyebrow': 'Como posso te ajudar',
      'services.title': 'Serviços',
      'services.s1Title': 'Treino presencial 1-a-1',
      'services.s1Body': 'Atendimento individual em estúdio ou domicílio. Avaliação completa, plano periodizado e progressão acompanhada de perto, sessão a sessão.',
      'services.s1Tag1': 'Presencial',
      'services.s1Tag2': 'Individualizado',
      'services.s2Badge': 'Mais procurado',
      'services.s2Title': 'Programa online',
      'services.s2Body': 'Plano completo entregue pelo aplicativo, com vídeos, ajustes semanais e contato direto comigo. Para quem treina em casa, na academia ou viajando.',
      'services.s2Tag1': 'Online',
      'services.s2Tag2': 'Flexível',
      'services.s3Title': 'Pequeno grupo',
      'services.s3Body': 'Treinos em duplas ou trios — para amigos, casais ou família. Mais energia, mais constância, e um custo amigável por pessoa.',
      'services.s3Tag1': '2–3 pessoas',
      'services.s3Tag2': 'Energia',

      'method.eyebrow': 'Método',
      'method.title': 'Como a gente trabalha',
      'method.s1Title': 'Avaliação',
      'method.s1Body': 'Conversa inicial, anamnese, testes funcionais e leitura honesta de onde você está hoje — sem julgamento.',
      'method.s2Title': 'Planejamento',
      'method.s2Body': 'Plano construído sob medida, com objetivos claros por ciclo. Cada exercício tem um porquê.',
      'method.s3Title': 'Execução',
      'method.s3Body': 'Treinos com técnica, presença e ajuste fino. Erro vira aprendizado; constância vira progresso.',
      'method.s4Title': 'Revisão',
      'method.s4Body': 'Reavaliação periódica para celebrar o que avançou e ajustar o que precisa. Resultado que dura é resultado revisado.',

      'gallery.eyebrow': 'Galeria',
      'gallery.title': 'Treino em ação',
      'gallery.igLink': 'Mais no Instagram <span aria-hidden="true">→</span>',

      'contact.eyebrow': 'Vamos conversar',
      'contact.title': 'Pronto para começar?',
      'contact.p1': 'Conta um pouco sobre você, sua rotina e seus objetivos. Respondo em até 24 horas — sempre.',
      'contact.whatsappLabel': 'WhatsApp',
      'contact.whatsappValue': 'Mensagem direta',
      'contact.igLabel': 'Instagram',
      'contact.emailLabel': 'E-mail',
      'contact.emailValue': 'contato@flaribeiro.com.br',

      'footer.rights': 'Todos os direitos reservados.',
      'footer.toTop': 'Voltar ao topo'
    },

    'en': {
      'meta.title': 'Flávia Ribeiro — Personal Trainer',
      'meta.description': 'Flávia Ribeiro — personal trainer. In-person and online coaching, with method and close attention.',
      'meta.ogDescription': 'In-person and online coaching, with method and close attention.',
      'skip': 'Skip to content',

      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.method': 'Method',
      'nav.contact': 'Contact',

      'aria.langToggle': 'Switch to Portuguese',
      'aria.themeToggle': 'Switch to dark theme',

      'hero.eyebrow': 'Personal trainer · Brazil',
      'hero.title': 'Movement with <em>purpose</em>.',
      'hero.lede': 'In-person and online training designed around you — built on method, close coaching, and the things that actually matter: results that last.',
      'hero.cta1': 'Book a conversation',
      'hero.cta2': 'See services',
      'hero.proof1Number': '100+',
      'hero.proof1Label': 'clients coached',
      'hero.proof2Number': '5★',
      'hero.proof2Label': 'average rating',
      'hero.proof3Number': 'CREF',
      'hero.proof3Label': 'certified professional',

      'about.eyebrow': 'About',
      'about.title': 'Training is daily care for yourself — your way.',
      'about.p1': "I'm Flávia Ribeiro, a personal trainer who loves helping people rediscover their own bodies. I believe the best training plan is the one that fits your life — that respects your pace, your limits, and the goals that are truly yours.",
      'about.p2': "I work with thorough assessments, individualized planning, and steady follow-through. Every plan is built around your routine, your history, and the outcome you actually want to reach. No magic formula, no shortcut — just method, presence, and consistency.",

      'services.eyebrow': 'How I can help',
      'services.title': 'Services',
      'services.s1Title': '1-on-1 in person',
      'services.s1Body': 'Individual sessions at the studio or in your home. Full assessment, periodized plan, and progression tracked closely, session by session.',
      'services.s1Tag1': 'In person',
      'services.s1Tag2': 'Individual',
      'services.s2Badge': 'Most popular',
      'services.s2Title': 'Online programs',
      'services.s2Body': 'A full program delivered via app — videos, weekly adjustments, direct contact with me. For people who train at home, at the gym, or on the road.',
      'services.s2Tag1': 'Online',
      'services.s2Tag2': 'Flexible',
      'services.s3Title': 'Small group',
      'services.s3Body': 'Sessions for pairs or trios — friends, couples, family. More energy, more consistency, and a friendlier cost per person.',
      'services.s3Tag1': '2–3 people',
      'services.s3Tag2': 'Energy',

      'method.eyebrow': 'Method',
      'method.title': 'How we work together',
      'method.s1Title': 'Assess',
      'method.s1Body': 'A first conversation, health history, functional testing, and an honest read on where you are today — no judgment.',
      'method.s2Title': 'Plan',
      'method.s2Body': 'A plan built for you, with clear targets per cycle. Every exercise has a reason.',
      'method.s3Title': 'Execute',
      'method.s3Body': 'Training with technique, presence, and fine adjustment. Mistakes become learning; consistency becomes progress.',
      'method.s4Title': 'Review',
      'method.s4Body': 'Periodic reassessment to celebrate what moved and adjust what needs adjusting. Results that last are results that get reviewed.',

      'gallery.eyebrow': 'Gallery',
      'gallery.title': 'Training in motion',
      'gallery.igLink': 'More on Instagram <span aria-hidden="true">→</span>',

      'contact.eyebrow': "Let's talk",
      'contact.title': 'Ready to start?',
      'contact.p1': 'Tell me a little about yourself, your routine, and your goals. I reply within 24 hours — always.',
      'contact.whatsappLabel': 'WhatsApp',
      'contact.whatsappValue': 'Direct message',
      'contact.igLabel': 'Instagram',
      'contact.emailLabel': 'Email',
      'contact.emailValue': 'contato@flaribeiro.com.br',

      'footer.rights': 'All rights reserved.',
      'footer.toTop': 'Back to top'
    }
  };

  // ---------- helpers ----------

  var root = document.documentElement;

  function applyLang(lang) {
    if (!i18n[lang]) lang = 'pt-BR';
    var dict = i18n[lang];
    root.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict[key];
      if (value === undefined) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, value.replace(/<[^>]+>/g, '')); // strip HTML for attributes
      } else {
        el.innerHTML = value;
      }
    });

    // Title special-case (not data-i18n on <title> covers innerHTML, but be explicit)
    document.title = dict['meta.title'];

    // Update language toggle label to show the OTHER language
    var labelEl = document.getElementById('lang-toggle-label');
    if (labelEl) labelEl.textContent = lang === 'en' ? 'PT' : 'EN';

    // Update html lang and announce to assistive tech
    root.setAttribute('lang', lang);
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#1a1814' : '#faf6ee');
  }

  // ---------- init ----------

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  var fromUrl = new URLSearchParams(location.search).get('lang');
  var browser = (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
  var initial = fromUrl || saved || browser;
  if (initial !== 'en' && initial !== 'pt-BR') initial = 'pt-BR';
  applyLang(initial);

  var langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var next = root.lang === 'en' ? 'pt-BR' : 'en';
      applyLang(next);
      try { localStorage.setItem('lang', next); } catch (e) {}
    });
  }

  var themeSaved = null;
  try { themeSaved = localStorage.getItem('theme'); } catch (e) {}
  applyTheme(themeSaved || (root.dataset.theme || 'light'));

  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  var media = window.matchMedia('(prefers-color-scheme: dark)');
  if (media.addEventListener) {
    media.addEventListener('change', function (e) {
      var s = null;
      try { s = localStorage.getItem('theme'); } catch (err) {}
      if (!s) applyTheme(e.matches ? 'dark' : 'light');
    });
  }

  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add('is-scrolled');
      else header.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
