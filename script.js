const locale = document.documentElement.lang === 'nl' ? 'nl' : 'en';
const translations = {
  en: {
    skip: 'Skip to content', menu: 'Menu', navLabel: 'Primary navigation', aboutNav: 'About', stackNav: 'Stack', experienceNav: 'Experience', contactNav: 'Contact', languageLabel: 'Language',
    heroKicker: 'ANDREY ANTONOWYCZ', heroTitle: 'Software engineering<br />across <span>systems.</span>', heroIntro: 'I develop and maintain software with attention to reliability, maintainability, and the operational context in which it runs.', viewExperience: 'View experience', technicalFocus: 'Technical focus',
    focusLabel: 'Professional focus', focuses: ['systems thinking', 'delivery mindset', 'continuous learning'], portraitAlt: 'Portrait of Andrey Antonowycz', portraitLabel: 'SOFTWARE ENGINEER', timeLabel: 'NETHERLANDS TIME', systemLabel: 'SYSTEM VIEW / 01', healthy: 'HEALTHY', source: 'SOURCE', build: 'BUILD', deploy: 'DEPLOY', main: 'main', passed: 'passed', stable: 'stable',
    aboutLabel: 'WHO I AM', aboutStatement: 'I work across the <em>software lifecycle.</em>', aboutOne: 'My background combines computer science and applied physics. I hold an MSc in Computer Science and a BSc in Applied Physics, with professional experience spanning software development, web systems, server administration, and technical education.', aboutTwo: 'I consider the complete path from implementation to production: interfaces, dependencies, deployment, observability, security, backups, and long-term maintenance.',
    stackLabel: 'MY TOOLCHAIN', stackCards: [
      ['CI/CD', 'Automated build, test, and deployment processes that provide clear feedback and repeatable releases.', 'SOFTWARE DELIVERY'],
      ['Linux', 'Server administration, automation, diagnostics, backup strategies, and operational maintenance.', 'SYSTEMS ADMINISTRATION'],
      ['Java', 'Backend software developed with explicit interfaces, predictable behaviour, and maintainable structure.', 'BACKEND ENGINEERING'],
      ['Python', 'Automation, technical tooling, data-oriented work, and prior teaching experience.', 'AUTOMATION & TOOLING']
    ],
    experienceLabel: 'EXPERIENCE', experiences: [
      ['2024 — PRESENT', 'Software engineering', 'Professional software development following the completion of an MSc thesis in an industry setting.', ['Software development', 'Technical systems', 'Team delivery'], 'CURRENT'],
      ['2019 — PRESENT', 'Independent web & systems work', 'Creation and maintenance of websites, including technology selection, server administration, backups, and security.', ['Web development', 'Linux servers', 'Operations'], 'ONGOING'],
      ['TEACHING EXPERIENCE', 'Technical education', 'Teaching support for machine learning, MATLAB, and Python courses, with an emphasis on clear technical explanation.', ['Machine learning', 'MATLAB', 'Python'], 'COMPLETED']
    ],
    physicsLabel: 'PHYSICS & SOFTWARE', physicsType: 'BSc APPLIED PHYSICS · MSc COMPUTER SCIENCE', physicsTitle: 'Two disciplines,<br />one way of thinking.', physicsOne: 'My degree in Applied Physics trained me to model complex behaviour from first principles. Computer Science gives me the tools to turn those models into reliable, working systems.', physicsTwo: 'I get energy from working in both fields: the analytical depth of physics and the constructive problem-solving of software engineering.', physicsDegree: 'BSc Applied Physics', csDegree: 'MSc Computer Science', running: 'RUNNING', physicsCanvas: 'Interactive double pendulum simulation showing chaotic motion', pause: 'Pause', impulse: 'Apply impulse', reset: 'Reset', gravity: 'Gravity', damping: 'Damping',
    pipelineLabel: 'Deployment pipeline stages', idle: 'IDLE', waiting: 'Waiting', runDeployment: 'Run deployment', stages: ['SOURCE', 'BUILD', 'TEST', 'DEPLOY'],
    orbitalLabel: 'ORBITAL MODEL / NOT TO SCALE', contactKicker: 'PROFESSIONAL CONTACT', contactTitle: 'Contact', contactText: 'For professional enquiries, project discussions, or technical collaboration.', backToTop: 'Back to top',
    runtime: { pause: 'Pause', resume: 'Resume', running: 'RUNNING', paused: 'PAUSED', waiting: 'Waiting', stageRunning: 'Running', passed: 'Passed', deployed: 'DEPLOYED', runAgain: 'Run deployment again' }
  },
  nl: {
    skip: 'Ga naar de inhoud', menu: 'Menu', navLabel: 'Hoofdnavigatie', aboutNav: 'Over mij', stackNav: 'Techniek', experienceNav: 'Ervaring', contactNav: 'Contact', languageLabel: 'Taal',
    heroKicker: 'ANDREY ANTONOWYCZ', heroTitle: 'Software engineering<br />voor complete <span>systemen.</span>', heroIntro: 'Ik ontwikkel en onderhoud software met aandacht voor betrouwbaarheid, onderhoudbaarheid en de operationele context waarin deze wordt gebruikt.', viewExperience: 'Bekijk ervaring', technicalFocus: 'Technische focus',
    focusLabel: 'Professionele focus', focuses: ['systeemdenken', 'betrouwbare oplevering', 'blijven ontwikkelen'], portraitAlt: 'Portret van Andrey Antonowycz', portraitLabel: 'SOFTWARE ENGINEER', timeLabel: 'NEDERLANDSE TIJD', systemLabel: 'SYSTEEMWEERGAVE / 01', healthy: 'GEZOND', source: 'BRON', build: 'BUILD', deploy: 'DEPLOY', main: 'main', passed: 'geslaagd', stable: 'stabiel',
    aboutLabel: 'OVER MIJ', aboutStatement: 'Ik werk over de volledige <em>softwarelevenscyclus.</em>', aboutOne: 'Mijn achtergrond combineert informatica en toegepaste natuurkunde. Ik heb een master Computer Science en een bachelor Applied Physics, met professionele ervaring in softwareontwikkeling, websystemen, serverbeheer en technisch onderwijs.', aboutTwo: 'Ik kijk naar het volledige traject van implementatie tot productie: interfaces, afhankelijkheden, deployment, observability, beveiliging, back-ups en onderhoud op lange termijn.',
    stackLabel: 'TECHNISCHE FOCUS', stackCards: [
      ['CI/CD', 'Geautomatiseerde build-, test- en deploymentprocessen die duidelijke feedback en reproduceerbare releases ondersteunen.', 'SOFTWAREOPLEVERING'],
      ['Linux', 'Serverbeheer, automatisering, diagnostiek, back-upstrategieën en operationeel onderhoud.', 'SYSTEEMBEHEER'],
      ['Java', 'Backendsoftware met expliciete interfaces, voorspelbaar gedrag en een onderhoudbare structuur.', 'BACKEND ENGINEERING'],
      ['Python', 'Automatisering, technische tooling, datagericht werk en eerdere onderwijservaring.', 'AUTOMATISERING & TOOLING']
    ],
    experienceLabel: 'ERVARING', experiences: [
      ['2024 — HEDEN', 'Software engineering', 'Professionele softwareontwikkeling na de afronding van een MSc-afstudeeronderzoek binnen een industriële omgeving.', ['Softwareontwikkeling', 'Technische systemen', 'Teamoplevering'], 'HUIDIG'],
      ['2019 — HEDEN', 'Zelfstandig web- en systeemwerk', 'Ontwikkeling en onderhoud van websites, inclusief technologiekeuze, serverbeheer, back-ups en beveiliging.', ['Webontwikkeling', 'Linux-servers', 'Operations'], 'LOPEND'],
      ['ONDERWIJSERVARING', 'Technisch onderwijs', 'Onderwijsondersteuning voor machine learning, MATLAB en Python, met nadruk op heldere technische uitleg.', ['Machine learning', 'MATLAB', 'Python'], 'AFGEROND']
    ],
    physicsLabel: 'NATUURKUNDE & SOFTWARE', physicsType: 'BSc APPLIED PHYSICS · MSc COMPUTER SCIENCE', physicsTitle: 'Twee disciplines,<br />één manier van denken.', physicsOne: 'Mijn opleiding Applied Physics leerde mij complex gedrag vanuit eerste principes te modelleren. Computer Science geeft mij de middelen om die modellen om te zetten in betrouwbare, werkende systemen.', physicsTwo: 'Ik krijg energie van het werken in beide vakgebieden: de analytische diepgang van natuurkunde en het constructieve probleemoplossen binnen software engineering.', physicsDegree: 'BSc Applied Physics', csDegree: 'MSc Computer Science', running: 'ACTIEF', physicsCanvas: 'Interactieve dubbele slinger die chaotische beweging simuleert', pause: 'Pauzeren', impulse: 'Geef impuls', reset: 'Herstellen', gravity: 'Zwaartekracht', damping: 'Demping',
    pipelineLabel: 'Stappen van de deploymentpipeline', idle: 'INACTIEF', waiting: 'Wachten', runDeployment: 'Start deployment', stages: ['BRON', 'BUILD', 'TEST', 'DEPLOY'],
    orbitalLabel: 'BAANMODEL / NIET OP SCHAAL', contactKicker: 'PROFESSIONEEL CONTACT', contactTitle: 'Contact', contactText: 'Voor professionele vragen, projectbesprekingen of technische samenwerking.', backToTop: 'Terug naar boven',
    runtime: { pause: 'Pauzeren', resume: 'Hervatten', running: 'ACTIEF', paused: 'GEPAUZEERD', waiting: 'Wachten', stageRunning: 'Bezig', passed: 'Geslaagd', deployed: 'GEDEPLOYD', runAgain: 'Deployment opnieuw starten' }
  }
};
const t = translations[locale];
const stackSymbols = ['↻', '$_', '{ }', '&gt;_'];
const stackAccents = ['lime', 'blue', 'orange', 'violet'];
const stackLevels = ['92%', '88%', '86%', '84%'];

document.body.innerHTML = `
  <a class="skip-link" href="#main">${t.skip}</a>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="${t.backToTop}"><span class="brand-mark" aria-hidden="true">AA</span><span class="brand-copy"><strong>Andrey Antonowycz</strong><small>SOFTWARE ENGINEER</small></span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="nav">${t.menu}</button>
    <nav id="nav" aria-label="${t.navLabel}">
      <a href="#about">${t.aboutNav}</a><a href="#stack">${t.stackNav}</a><a href="#work">${t.experienceNav}</a><a href="#contact">${t.contactNav}</a>
      <span class="language-switch" aria-label="${t.languageLabel}"><a href="../en/" lang="en" hreflang="en" ${locale === 'en' ? 'aria-current="page"' : ''}>EN</a><i>/</i><a href="../nl/" lang="nl" hreflang="nl" ${locale === 'nl' ? 'aria-current="page"' : ''}>NL</a></span>
    </nav>
  </header>
  <main id="main">
    <section class="hero" id="top" aria-labelledby="hero-title"><div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-copy reveal"><p class="eyebrow">${t.heroKicker} <span>/</span> SOFTWARE ENGINEER</p><h1 id="hero-title">${t.heroTitle}</h1><p class="hero-intro">${t.heroIntro}</p>
        <div class="hero-actions"><a class="button button-primary" href="#work">${t.viewExperience} <span aria-hidden="true">↓</span></a><a class="text-link" href="#stack">${t.technicalFocus}</a></div>
        <ul class="quick-stats" aria-label="${t.focusLabel}">${t.focuses.map((focus, index) => `<li><strong>0${index + 1}</strong><span>${focus}</span></li>`).join('')}</ul>
      </div>
      <figure class="portrait-panel reveal"><div class="portrait-frame"><img src="../assets/andrey-antonowycz.webp" alt="${t.portraitAlt}" width="1539" height="2200" fetchpriority="high" /></div><figcaption><span>ANDREY ANTONOWYCZ</span><span>${t.portraitLabel} · ${t.timeLabel} <b id="utc-time">00:00:00</b></span></figcaption>
        <div class="system-map" aria-label="${t.systemLabel}"><div class="system-map-head"><span>${t.systemLabel}</span><span class="healthy"><i></i> ${t.healthy}</span></div><div class="system-flow"><div class="flow-node"><b>${t.source}</b><small>${t.main}</small></div><span class="flow-line"><i></i></span><div class="flow-node"><b>${t.build}</b><small>${t.passed}</small></div><span class="flow-line"><i></i></span><div class="flow-node"><b>${t.deploy}</b><small>${t.stable}</small></div></div><div class="system-metrics"><span>CPU <b id="cpu-stat">24%</b></span><span>MEM <b id="mem-stat">61%</b></span><span>REQ/S <b id="req-stat">842</b></span></div></div>
      </figure>
    </section>
    <section class="section about" id="about"><div class="section-label reveal"><span>01</span> / ${t.aboutLabel}</div><div class="about-content reveal"><p class="statement">${t.aboutStatement}</p><div class="about-columns"><p>${t.aboutOne}</p><p>${t.aboutTwo}</p></div></div></section>
    <section class="section stack" id="stack"><div class="section-label reveal"><span>02</span> / ${t.stackLabel}</div><div class="stack-grid">${t.stackCards.map((card, index) => `<article class="stack-card reveal" data-accent="${stackAccents[index]}"><div class="card-index">0${index + 1}</div><div class="stack-symbol">${stackSymbols[index]}</div><h2>${card[0]}</h2><p>${card[1]}</p><div class="meter"><span style="--level:${stackLevels[index]}"></span></div><small>${card[2]}</small></article>`).join('')}</div></section>
    <section class="section work" id="work"><div class="section-label reveal"><span>03</span> / ${t.experienceLabel}</div><div class="work-list">${t.experiences.map((item, index) => `<article class="project reveal"><div class="project-number">0${index + 1}</div><div><p class="project-type">${item[0]}</p><h2>${item[1]}</h2><p>${item[2]}</p></div><ul>${item[3].map((tag) => `<li>${tag}</li>`).join('')}</ul><div class="project-status"><span></span> ${item[4]}</div></article>`).join('')}</div></section>
    <section class="playground-section section" aria-label="${t.physicsLabel}"><div class="section-label reveal"><span>04</span> / ${t.physicsLabel}</div><div class="playground-grid">
      <article class="physics-feature reveal"><div class="physics-copy"><p class="project-type">${t.physicsType}</p><h2>${t.physicsTitle}</h2><p>${t.physicsOne}</p><p>${t.physicsTwo}</p><dl class="degree-list"><div><dt>2024</dt><dd>${t.csDegree}</dd></div><div><dt>2021</dt><dd>${t.physicsDegree}</dd></div></dl></div>
        <div class="physics-simulator"><div class="tool-bar"><span>double-pendulum.sim</span><small id="physics-status" aria-live="polite">${t.running}</small></div><canvas id="physics-canvas" width="900" height="520" aria-label="${t.physicsCanvas}"></canvas><div class="physics-controls"><button type="button" id="physics-toggle">${t.pause}</button><button type="button" id="physics-push">${t.impulse}</button><button type="button" id="physics-reset">${t.reset}</button><label>${t.gravity} <input id="gravity-control" type="range" min="1.6" max="15" value="9.8" step=".1" /><output id="gravity-value">9.8 m/s²</output></label><label>${t.damping} <input id="damping-control" type="range" min="0.990" max="1" value="0.998" step=".001" /><output id="damping-value">0.998</output></label></div></div>
      </article>
      <article class="pipeline-lab reveal"><div class="tool-bar"><span>release-pipeline.yml</span><small id="pipeline-status" aria-live="polite">${t.idle}</small></div><div class="pipeline-stages" aria-label="${t.pipelineLabel}">${t.stages.map((stage, index) => `${index ? '<i aria-hidden="true"></i>' : ''}<div class="pipeline-stage"><span>0${index + 1}</span><b>${stage}</b><small>${t.waiting}</small></div>`).join('')}</div><button type="button" id="pipeline-run">${t.runDeployment} <span aria-hidden="true">▶</span></button></article>
    </div></section>
    <section class="contact" id="contact"><canvas id="solar-system" width="1600" height="900" aria-hidden="true"></canvas><div class="solar-label" aria-hidden="true">${t.orbitalLabel}</div><div class="contact-content"><p class="eyebrow reveal">${t.contactKicker}</p><h2 class="reveal">${t.contactTitle}</h2><p class="reveal">${t.contactText}</p><a class="button button-light reveal" href="mailto:andrey@antonowycz.com">andrey@antonowycz.com <span aria-hidden="true">↗</span></a></div></section>
  </main>
  <footer><a class="brand-mark" href="#top" aria-label="${t.backToTop}">AA</a><p>HTML · CSS · JAVASCRIPT</p><p>© <span id="year"></span> / ANDREY ANTONOWYCZ</p></footer>`;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const timeElement = document.querySelector('#utc-time');
function updateClock() {
  timeElement.textContent = new Date().toLocaleTimeString(locale === 'nl' ? 'nl-NL' : 'en-GB', {
    timeZone: 'Europe/Amsterdam', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}
updateClock();
setInterval(updateClock, 1000);
document.querySelector('#year').textContent = new Date().getFullYear();

const statRanges = [
  { element: document.querySelector('#cpu-stat'), min: 18, max: 38, suffix: '%' },
  { element: document.querySelector('#mem-stat'), min: 54, max: 68, suffix: '%' },
  { element: document.querySelector('#req-stat'), min: 790, max: 960, suffix: '' }
];

if (!reducedMotion) {
  setInterval(() => {
    statRanges.forEach(({ element, min, max, suffix }) => {
      element.textContent = `${Math.floor(Math.random() * (max - min + 1) + min)}${suffix}`;
    });
  }, 1800);
}

document.querySelectorAll('.stack-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    card.style.backgroundImage = `radial-gradient(circle at ${event.clientX - rect.left}px ${event.clientY - rect.top}px, rgba(169,80,50,.10), transparent 38%)`;
  });
  card.addEventListener('pointerleave', () => { card.style.backgroundImage = ''; });
});

const physicsCanvas = document.querySelector('#physics-canvas');
const physicsContext = physicsCanvas.getContext('2d');
const physicsToggle = document.querySelector('#physics-toggle');
const physicsPush = document.querySelector('#physics-push');
const physicsReset = document.querySelector('#physics-reset');
const physicsStatus = document.querySelector('#physics-status');
const gravityControl = document.querySelector('#gravity-control');
const gravityValue = document.querySelector('#gravity-value');
const dampingControl = document.querySelector('#damping-control');
const dampingValue = document.querySelector('#damping-value');
let pendulumRunning = !reducedMotion;
let gravity = Number(gravityControl.value);
let damping = Number(dampingControl.value);
let pendulum = {};
let trail = [];

function resetPendulum() {
  pendulum = { angle1: Math.PI * .72, angle2: Math.PI * .93, velocity1: 0, velocity2: 0 };
  trail = [];
}

function stepPendulum(deltaTime) {
  const { angle1, angle2, velocity1, velocity2 } = pendulum;
  const mass1 = 1;
  const mass2 = 1;
  const length1 = 1;
  const length2 = 1;
  const difference = angle1 - angle2;
  const denominator1 = length1 * (2 * mass1 + mass2 - mass2 * Math.cos(2 * difference));
  const denominator2 = length2 * (2 * mass1 + mass2 - mass2 * Math.cos(2 * difference));
  const acceleration1 = (
    -gravity * (2 * mass1 + mass2) * Math.sin(angle1)
    - mass2 * gravity * Math.sin(angle1 - 2 * angle2)
    - 2 * Math.sin(difference) * mass2 * (velocity2 ** 2 * length2 + velocity1 ** 2 * length1 * Math.cos(difference))
  ) / denominator1;
  const acceleration2 = (
    2 * Math.sin(difference) * (
      velocity1 ** 2 * length1 * (mass1 + mass2)
      + gravity * (mass1 + mass2) * Math.cos(angle1)
      + velocity2 ** 2 * length2 * mass2 * Math.cos(difference)
    )
  ) / denominator2;

  pendulum.velocity1 = (velocity1 + acceleration1 * deltaTime) * damping;
  pendulum.velocity2 = (velocity2 + acceleration2 * deltaTime) * damping;
  pendulum.angle1 += pendulum.velocity1 * deltaTime;
  pendulum.angle2 += pendulum.velocity2 * deltaTime;
}

function drawPendulum() {
  const { width, height } = physicsCanvas;
  const pivotX = width / 2;
  const pivotY = 76;
  const armLength = Math.min(width, height) * .29;
  const x1 = pivotX + armLength * Math.sin(pendulum.angle1);
  const y1 = pivotY + armLength * Math.cos(pendulum.angle1);
  const x2 = x1 + armLength * Math.sin(pendulum.angle2);
  const y2 = y1 + armLength * Math.cos(pendulum.angle2);
  if (pendulumRunning) {
    trail.push({ x: x2, y: y2 });
    if (trail.length > 110) trail.shift();
  }

  physicsContext.clearRect(0, 0, width, height);
  physicsContext.strokeStyle = 'rgba(32,41,37,.10)';
  physicsContext.lineWidth = 1;
  for (let x = 0; x < width; x += 60) {
    physicsContext.beginPath(); physicsContext.moveTo(x, 0); physicsContext.lineTo(x, height); physicsContext.stroke();
  }
  for (let y = 0; y < height; y += 60) {
    physicsContext.beginPath(); physicsContext.moveTo(0, y); physicsContext.lineTo(width, y); physicsContext.stroke();
  }

  if (trail.length > 1) {
    physicsContext.beginPath();
    trail.forEach((point, index) => index === 0 ? physicsContext.moveTo(point.x, point.y) : physicsContext.lineTo(point.x, point.y));
    physicsContext.strokeStyle = 'rgba(169,80,50,.55)';
    physicsContext.lineWidth = 2;
    physicsContext.stroke();
  }

  physicsContext.beginPath();
  physicsContext.moveTo(pivotX, pivotY);
  physicsContext.lineTo(x1, y1);
  physicsContext.lineTo(x2, y2);
  physicsContext.strokeStyle = '#202925';
  physicsContext.lineWidth = 4;
  physicsContext.stroke();
  [[pivotX, pivotY, 7], [x1, y1, 18], [x2, y2, 22]].forEach(([x, y, radius], index) => {
    physicsContext.beginPath(); physicsContext.arc(x, y, radius, 0, Math.PI * 2);
    physicsContext.fillStyle = index === 2 ? '#a95032' : '#556f7b'; physicsContext.fill();
  });
}

let previousFrame = performance.now();
function animatePendulum(currentFrame) {
  const elapsed = Math.min((currentFrame - previousFrame) / 1000, .025);
  previousFrame = currentFrame;
  if (pendulumRunning) stepPendulum(elapsed);
  drawPendulum();
  requestAnimationFrame(animatePendulum);
}

physicsToggle.addEventListener('click', () => {
  pendulumRunning = !pendulumRunning;
  physicsToggle.textContent = pendulumRunning ? t.runtime.pause : t.runtime.resume;
  physicsStatus.textContent = pendulumRunning ? t.runtime.running : t.runtime.paused;
});
physicsPush.addEventListener('click', () => { pendulum.velocity2 += 2.4; pendulumRunning = true; physicsToggle.textContent = t.runtime.pause; physicsStatus.textContent = t.runtime.running; });
physicsReset.addEventListener('click', () => { resetPendulum(); drawPendulum(); });
gravityControl.addEventListener('input', () => { gravity = Number(gravityControl.value); gravityValue.textContent = `${gravity.toFixed(1)} m/s²`; });
dampingControl.addEventListener('input', () => { damping = Number(dampingControl.value); dampingValue.textContent = damping.toFixed(3); });

resetPendulum();
if (reducedMotion) {
  physicsToggle.textContent = t.runtime.resume;
  physicsStatus.textContent = t.runtime.paused;
}
drawPendulum();
requestAnimationFrame(animatePendulum);

const pipelineButton = document.querySelector('#pipeline-run');
const pipelineStatus = document.querySelector('#pipeline-status');
const pipelineStages = [...document.querySelectorAll('.pipeline-stage')];
let pipelineRunning = false;

pipelineButton.addEventListener('click', async () => {
  if (pipelineRunning) return;
  pipelineRunning = true;
  pipelineButton.disabled = true;
  pipelineStatus.textContent = t.runtime.running;
  pipelineStages.forEach((stage) => {
    stage.classList.remove('running', 'complete');
    stage.querySelector('small').textContent = t.runtime.waiting;
  });

  for (const stage of pipelineStages) {
    stage.classList.add('running');
    stage.querySelector('small').textContent = t.runtime.stageRunning;
    await new Promise((resolve) => setTimeout(resolve, reducedMotion ? 40 : 620));
    stage.classList.remove('running');
    stage.classList.add('complete');
    stage.querySelector('small').textContent = t.runtime.passed;
  }

  pipelineStatus.textContent = t.runtime.deployed;
  pipelineButton.innerHTML = `${t.runtime.runAgain} <span aria-hidden="true">↻</span>`;
  pipelineButton.disabled = false;
  pipelineRunning = false;
});

const solarCanvas = document.querySelector('#solar-system');
const solarContext = solarCanvas.getContext('2d');
const solarSection = solarCanvas.parentElement;
const planetData = [
  { radius: 3, color: '#999b96', period: .241, phase: .2 },
  { radius: 5, color: '#b99a75', period: .615, phase: 1.6 },
  { radius: 5, color: '#7f9ca5', period: 1, phase: 3.1 },
  { radius: 4, color: '#a95032', period: 1.881, phase: 4.3 },
  { radius: 11, color: '#bba38c', period: 11.86, phase: 2.4 },
  { radius: 9, color: '#c6b58f', period: 29.45, phase: 5.2, ring: true },
  { radius: 7, color: '#8facaf', period: 84, phase: .8 },
  { radius: 7, color: '#65728b', period: 164.8, phase: 3.8 }
];
const solarStars = Array.from({ length: 90 }, (_, index) => {
  const xSeed = Math.sin(index * 12.9898) * 43758.5453;
  const ySeed = Math.sin((index + 41) * 78.233) * 43758.5453;
  return { x: xSeed - Math.floor(xSeed), y: ySeed - Math.floor(ySeed), size: index % 11 === 0 ? 1.5 : .7 };
});
let solarWidth = 0;
let solarHeight = 0;
let solarStart = performance.now();

function resizeSolarSystem() {
  const bounds = solarSection.getBoundingClientRect();
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  solarWidth = bounds.width;
  solarHeight = bounds.height;
  solarCanvas.width = Math.round(solarWidth * scale);
  solarCanvas.height = Math.round(solarHeight * scale);
  solarContext.setTransform(scale, 0, 0, scale, 0, 0);
  drawSolarSystem(performance.now());
}

function drawSolarSystem(currentTime) {
  solarContext.clearRect(0, 0, solarWidth, solarHeight);
  solarStars.forEach((star) => {
    solarContext.beginPath();
    solarContext.arc(star.x * solarWidth, star.y * solarHeight, star.size, 0, Math.PI * 2);
    solarContext.fillStyle = 'rgba(241,238,230,.34)';
    solarContext.fill();
  });

  const compact = solarWidth < 700;
  const centerX = compact ? solarWidth * .5 : solarWidth * .23;
  const centerY = solarHeight * .52;
  const minimumOrbit = compact ? 38 : 58;
  const maximumOrbit = compact
    ? Math.min(solarWidth * .46, solarHeight * .42)
    : Math.min(solarWidth * .58, solarHeight * .72);
  const elapsed = reducedMotion ? 0 : (currentTime - solarStart) / 1000;

  planetData.forEach((planet, index) => {
    const orbitRadius = minimumOrbit + index * ((maximumOrbit - minimumOrbit) / (planetData.length - 1));
    const verticalRadius = orbitRadius * .43;
    solarContext.beginPath();
    solarContext.ellipse(centerX, centerY, orbitRadius, verticalRadius, 0, 0, Math.PI * 2);
    solarContext.strokeStyle = 'rgba(241,238,230,.13)';
    solarContext.lineWidth = 1;
    solarContext.stroke();

    const angularSpeed = .42 / Math.pow(planet.period, .42);
    const angle = planet.phase + elapsed * angularSpeed;
    const x = centerX + Math.cos(angle) * orbitRadius;
    const y = centerY + Math.sin(angle) * verticalRadius;
    solarContext.beginPath();
    solarContext.arc(x, y, planet.radius, 0, Math.PI * 2);
    solarContext.fillStyle = planet.color;
    solarContext.fill();

    if (planet.ring) {
      solarContext.beginPath();
      solarContext.ellipse(x, y, planet.radius * 1.9, planet.radius * .55, -.18, 0, Math.PI * 2);
      solarContext.strokeStyle = 'rgba(222,205,168,.72)';
      solarContext.lineWidth = 1.5;
      solarContext.stroke();
    }
  });

  solarContext.beginPath();
  solarContext.arc(centerX, centerY, compact ? 15 : 20, 0, Math.PI * 2);
  solarContext.fillStyle = '#c88a55';
  solarContext.fill();
}

function animateSolarSystem(currentTime) {
  drawSolarSystem(currentTime);
  requestAnimationFrame(animateSolarSystem);
}

new ResizeObserver(resizeSolarSystem).observe(solarSection);
resizeSolarSystem();
if (!reducedMotion) requestAnimationFrame(animateSolarSystem);
