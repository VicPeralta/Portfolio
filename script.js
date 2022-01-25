const projectsInfo = [
  {
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './assets/SnapshootPortfolio1.svg',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/Portfolio/',
    linkSource: 'https://github.com/VicPeralta/Portfolio',
    client: 'CANOPY',
    roles: ['Back End Dev', '2015'],
  },
  {
    name: 'Facebook 360',
    description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    image: './assets/SnapshootPortfolio2.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/Portfolio/',
    linkSource: 'https://github.com/VicPeralta/Portfolio',
    client: 'FACEBOOK',
    roles: ['Full Stack Dev', '2015'],
  },
  {
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './assets/SnapshootPortfolio3.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/Portfolio/',
    linkSource: 'https://github.com/VicPeralta/Portfolio',
    client: 'FACEBOOK',
    roles: ['Full Stack Dev', '2015'],
  },
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './assets/SnapshootPortfolio4.svg',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/Portfolio/',
    linkSource: 'https://github.com/VicPeralta/Portfolio',
    client: 'FACEBOOK',
    roles: ['Full Stack Dev', '2015'],
  },
];

function getProjectHTML(project) {
  return ` <img src="./assets/SnapshootPortfolio1.svg" alt="Tonic's project screenshot" width="295" height="220" />
  <div class="work-info">
    <h3 class="project-title">Tonic</h3>
    <div class="highlights">
      <h4 class="project-name">CANOPY</h4>
      <ul>
        <li>Back End Dev</li>
        <li>2015</li>
      </ul>
    </div>
    <p>
      A daily selection of privately personalized reads; no accounts or
      sign-ups required.
    </p>
    <div class="work-lenguages">
      <ul>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
      </ul>
    </div>
    <button type="button" class="work-button">See Project</button>
  </div>`;
}

function loadProjectsInfo() {
  const worksContainer = document.querySelector('.works-container');

  for (let i = 0; i < projectsInfo.length; i++) {
    const htmlProject = getProjectHTML(projectsInfo[i]);
    const workCard = document.createElement('div');
    workCard.classList.add('work-card', `card-${i + 1}`, ((i + 1) % 2 === 0) ? 'even-row' : 'odd-row');
    workCard.innerHTML = htmlProject;
    worksContainer.appendChild(workCard);
  }
}

loadProjectsInfo();