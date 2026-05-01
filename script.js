(function () {
  'use strict';

  // ---------- i18n dictionaries ----------

  var i18n = {
    'pt-BR': {
      'meta.title': 'Flávia Ribeiro — Personal Trainer',
      'meta.description': 'Flávia Ribeiro — personal trainer em Boca Raton, FL. Treinos presenciais e online com método e acompanhamento próximo.',
      'meta.ogDescription': 'Personal trainer em Boca Raton, FL. Movimento com propósito.',
      'skip': 'Ir para o conteúdo',

      'nav.about': 'sobre',
      'nav.services': 'serviços',
      'nav.method': 'método',
      'nav.contact': 'contato',

      'aria.langToggle': 'Trocar para inglês',
      'aria.themeToggle': 'Mudar para tema escuro',

      'hero.eyebrow': 'Personal Trainer · Boca Raton, FL',
      'hero.titleL1': 'Movimento',
      'hero.titleL2': 'com propósito.',
      'hero.titleL3': 'Treino sob medida, dentro e fora da academia.',
      'hero.lede': 'Avaliação detalhada, plano individual e acompanhamento próximo — em sessões presenciais, online, ou nas duas.',
      'hero.cta1': 'Conversar no WhatsApp <span class="button__arrow" aria-hidden="true">→</span>',
      'hero.cta2': 'Ver serviços',
      'hero.photoAlt': 'Flávia Ribeiro, personal trainer, sorrindo com os braços cruzados',

      'about.eyebrow': 'Sobre',
      'about.title': 'Treinar é cuidar de si — <em>todo dia.</em>',
      'about.quote': '"O melhor treino é aquele que cabe na <em>sua</em> vida — não o contrário."',
      'about.p1': 'Sou Flávia Ribeiro, personal trainer em Boca Raton, Flórida. Trabalho com pessoas que querem se movimentar com propósito — sem dieta-milagre, sem treino genérico, sem promessa que não se cumpre.',
      'about.p2': 'Cada plano nasce de uma avaliação séria: sua rotina, sua história, suas dores, seus objetivos. Daí em diante é método, presença e ajuste fino — sessão a sessão, semana a semana.',
      'about.credential': 'CREF · Personal Trainer · Boca Raton, FL',
      'about.photoAlt': 'Flávia Ribeiro fazendo rosca direta',

      'services.eyebrow': 'O que ofereço',
      'services.title': 'Três caminhos. <em>Um plano para cada um.</em>',
      'services.s1Kicker': 'No estúdio ou na sua casa',
      'services.s1Title': 'Presencial 1-a-1',
      'services.s1Body': 'Atendimento individual em estúdio ou domicílio, com avaliação completa, plano periodizado e progressão acompanhada de perto a cada sessão. Você não fica sozinha em nenhum momento do processo.',
      'services.s1Tag1': 'Presencial',
      'services.s1Tag2': 'Individual',
      'services.s1Tag3': 'Avaliação completa',
      'services.s2Badge': 'Mais procurado',
      'services.s2Kicker': 'Onde você estiver',
      'services.s2Title': 'Programa online',
      'services.s2Body': 'Plano completo entregue pelo aplicativo, com vídeos, ajustes semanais e acesso direto a mim para tirar dúvidas. Para quem treina em casa, na academia ou viajando — sem perder consistência.',
      'services.s2Tag1': 'Online',
      'services.s2Tag2': 'Flexível',
      'services.s2Tag3': 'Acompanhamento semanal',
      'services.s3Kicker': 'Treine com quem você gosta',
      'services.s3Title': 'Pequeno grupo',
      'services.s3Body': 'Treinos em duplas ou trios — para amigas, casais ou família. Mais energia, mais constância, e um custo mais amigável por pessoa, sem perder a atenção individual.',
      'services.s3Tag1': '2–3 pessoas',
      'services.s3Tag2': 'Energia',
      'services.s3Tag3': 'Custo dividido',

      'method.eyebrow': 'Método',
      'method.title': 'Como a gente <em>trabalha junto.</em>',
      'method.s1Title': 'Avaliação.',
      'method.s1Body': 'Conversa inicial, anamnese e testes funcionais. A leitura honesta de onde você está hoje, sem julgamento.',
      'method.s2Title': 'Planejamento.',
      'method.s2Body': 'Plano sob medida, com objetivos claros por ciclo. Cada exercício escolhido tem um porquê.',
      'method.s3Title': 'Execução.',
      'method.s3Body': 'Treinos com técnica, presença e ajuste fino. Erro vira aprendizado; constância vira progresso.',
      'method.s4Title': 'Revisão.',
      'method.s4Body': 'Reavaliação periódica para celebrar o que avançou e ajustar o que precisa. Resultado que dura é resultado revisado.',

      'gallery.eyebrow': 'Em ação',
      'gallery.title': 'Movimento, <em>na prática.</em>',
      'gallery.alt1': 'Flávia Ribeiro em afundo sobre um step',
      'gallery.alt2': 'Flávia Ribeiro fazendo rosca direta',
      'gallery.alt3': 'Flávia Ribeiro sentada ao lado de halteres e kettlebell',
      'gallery.igLink': 'Veja mais no Instagram <span aria-hidden="true">→</span>',

      'contact.eyebrow': 'Pronta para começar',
      'contact.title': 'Vamos <em>conversar.</em>',
      'contact.lede': 'Conta um pouco sobre você, sua rotina e seus objetivos. Respondo em até 24 horas — sempre.',
      'contact.ctaLabel': 'WhatsApp · +1 754 326 3220',
      'contact.altLocation': 'Local',

      'footer.toTop': '↑ Topo'
    },

    'en': {
      'meta.title': 'Flávia Ribeiro — Personal Trainer',
      'meta.description': 'Flávia Ribeiro — personal trainer in Boca Raton, FL. In-person and online coaching with method and close attention.',
      'meta.ogDescription': 'Personal trainer in Boca Raton, FL. Movement with purpose.',
      'skip': 'Skip to content',

      'nav.about': 'about',
      'nav.services': 'services',
      'nav.method': 'method',
      'nav.contact': 'contact',

      'aria.langToggle': 'Switch to Portuguese',
      'aria.themeToggle': 'Switch to dark theme',

      'hero.eyebrow': 'Personal Trainer · Boca Raton, FL',
      'hero.titleL1': 'Movement',
      'hero.titleL2': 'with purpose.',
      'hero.titleL3': 'Tailored coaching, inside and outside the gym.',
      'hero.lede': 'Thorough assessment, individual planning and close coaching — in person, online, or both.',
      'hero.cta1': 'Message on WhatsApp <span class="button__arrow" aria-hidden="true">→</span>',
      'hero.cta2': 'See services',
      'hero.photoAlt': 'Flávia Ribeiro, personal trainer, smiling with arms crossed',

      'about.eyebrow': 'About',
      'about.title': 'Training is daily care — <em>every day.</em>',
      'about.quote': '"The best plan is the one that fits <em>your</em> life — not the other way around."',
      'about.p1': "I'm Flávia Ribeiro, personal trainer in Boca Raton, Florida. I work with people who want to move with purpose — no fad diets, no generic plan, no promise I can't keep.",
      'about.p2': "Every plan starts from a serious assessment: your routine, your history, your aches, your goals. From there it's method, presence, and fine adjustment — session by session, week by week.",
      'about.credential': 'CREF · Personal Trainer · Boca Raton, FL',
      'about.photoAlt': 'Flávia Ribeiro performing a single-arm dumbbell curl',

      'services.eyebrow': 'What I offer',
      'services.title': 'Three paths. <em>One plan for each.</em>',
      'services.s1Kicker': 'At the studio or in your home',
      'services.s1Title': '1-on-1 in person',
      'services.s1Body': 'Individual sessions at the studio or at your home, with a full assessment, periodized plan, and progression tracked closely from session to session. You are never alone in the process.',
      'services.s1Tag1': 'In person',
      'services.s1Tag2': 'Individual',
      'services.s1Tag3': 'Full assessment',
      'services.s2Badge': 'Most popular',
      'services.s2Kicker': 'Wherever you are',
      'services.s2Title': 'Online program',
      'services.s2Body': 'A complete plan delivered through the app, with videos, weekly adjustments, and direct access to me for questions. For people who train at home, at the gym, or on the road — without losing consistency.',
      'services.s2Tag1': 'Online',
      'services.s2Tag2': 'Flexible',
      'services.s2Tag3': 'Weekly check-ins',
      'services.s3Kicker': 'Train with people you like',
      'services.s3Title': 'Small group',
      'services.s3Body': 'Sessions for pairs or trios — friends, couples, family. More energy, more consistency, and a friendlier per-person cost, without giving up individual attention.',
      'services.s3Tag1': '2–3 people',
      'services.s3Tag2': 'Energy',
      'services.s3Tag3': 'Cost shared',

      'method.eyebrow': 'Method',
      'method.title': 'How we <em>work together.</em>',
      'method.s1Title': 'Assess.',
      'method.s1Body': 'A first conversation, health history, and functional testing. An honest read on where you are today, without judgment.',
      'method.s2Title': 'Plan.',
      'method.s2Body': 'A plan built for you, with clear targets per cycle. Every exercise picked has a reason.',
      'method.s3Title': 'Execute.',
      'method.s3Body': 'Training with technique, presence, and fine adjustment. Mistakes become learning; consistency becomes progress.',
      'method.s4Title': 'Review.',
      'method.s4Body': 'Periodic reassessment to celebrate what moved and adjust what needs adjusting. Results that last are results that get reviewed.',

      'gallery.eyebrow': 'In motion',
      'gallery.title': 'Movement, <em>in practice.</em>',
      'gallery.alt1': 'Flávia Ribeiro in a forward lunge on a step',
      'gallery.alt2': 'Flávia Ribeiro performing a single-arm dumbbell curl',
      'gallery.alt3': 'Flávia Ribeiro seated next to dumbbells and a kettlebell',
      'gallery.igLink': 'See more on Instagram <span aria-hidden="true">→</span>',

      'contact.eyebrow': 'Ready to start',
      'contact.title': "Let's <em>talk.</em>",
      'contact.lede': 'Tell me a little about yourself, your routine, and your goals. I reply within 24 hours — always.',
      'contact.ctaLabel': 'WhatsApp · +1 754 326 3220',
      'contact.altLocation': 'Based',

      'footer.toTop': '↑ Top'
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
        el.setAttribute(attr, value.replace(/<[^>]+>/g, ''));
      } else {
        el.innerHTML = value;
      }
    });

    document.title = dict['meta.title'];

    var labelEl = document.getElementById('lang-toggle-label');
    if (labelEl) labelEl.textContent = lang === 'en' ? 'PT' : 'EN';

    root.setAttribute('lang', lang);
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0907' : '#f0e9d8');
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
