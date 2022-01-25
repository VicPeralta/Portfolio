const projectsInfo = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './assets/SnapshootPortfolio3.svg',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/Portfolio/',
    linkSource: 'https://github.com/VicPeralta/Portfolio',
    client: 'UBER',
    roles: ['Full Stack Dev', '2015'],
  },
  {
    id: 4,
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
  let technologies = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    technologies += `<li>${project.technologies[i]}</li>`;
  }
  let roles = '';
  for (let i = 0; i < project.roles.length; i += 1) {
    roles += `<li>${project.roles[i]}</li>`;
  }

  return ` <img src="${project.image}" alt="${project.name}'s project screenshot" width="295" height="220" />
  <div class="work-info">
    <h3 class="project-title">${project.name}</h3>
    <div class="highlights">
      <h4 class="project-name">${project.client}</h4>
      <ul>
        ${roles}
      </ul>
    </div>
    <p>${project.description}</p>
    <div class="work-lenguages">
      <ul>
        ${technologies}
      </ul>
    </div>
    <button type="button" class="work-button" data-id="${project.id}">See Project</button>
  </div>`;
}

function loadProjectsInfo() {
  const worksContainer = document.querySelector('.works-container');
  for (let i = 0; i < projectsInfo.length; i += 1) {
    const htmlProject = getProjectHTML(projectsInfo[i]);
    const workCard = document.createElement('div');
    workCard.classList.add('work-card', `card-${i + 1}`, ((i + 1) % 2 === 0) ? 'even-row' : 'odd-row');
    workCard.innerHTML = htmlProject;
    worksContainer.appendChild(workCard);
  }
}

function getProjectData(id) {
  for (let i = 0; i < projectsInfo.length; i += 1) {
    if (projectsInfo[i].id === Number(id)) return projectsInfo[i];
  }
  return undefined;
}

function getDetailHTML(project) {
  let technologies = '';
  for (let i = 0; i < project.technologies.length; i += 1) {
    technologies += `<li>${project.technologies[i]}</li>`;
  }
  let roles = '';
  for (let i = 0; i < project.roles.length; i += 1) {
    roles += `<li>${project.roles[i]}</li>`;
  }
  return `
  <div class="detail-container">
      <div class="detail-header">
        <h3 class="project-title">${project.name}</h3>
        <button>X</button>
      </div>
      <div class="highlights">
        <h4 class="project-name">${project.client}</h4>
        <ul>
          ${roles}
        </ul>
      </div>
      <img src="${project.image}" alt="${project.name}'s project screenshot" width="295" height="220" />
      <div class="detail-info">
        <p>
          ${project.description}
        </p>
        <div class="tech-demo">
          <div class="work-lenguages">
            <ul>
              ${technologies}
            </ul>
          </div>
          <hr>
          <div class="details-footer">
            <button type="button" class="work-button" onclick="window.open('${project.linkLive}', '_blank');"  >See Live<img src="assets/Icon.svg" width="20"
                height="20"></button>
            <button type="button" class="work-button" onclick="window.open('${project.linkSource}', '_blank');" >See Source<img src="assets/Group.svg" width="20"
                height="20"></button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function makeScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('makeNotScrollable');
  body.classList.add('makeScrollable');
}

function makeNotScrollable() {
  const body = document.querySelector('body');
  body.classList.remove('makeScrollable');
  body.classList.add('makeNotScrollable');
}

loadProjectsInfo();

document.addEventListener('click', (e) => {
  if (e.target.matches('.work-button')) {
    const projectInfo = getProjectData(e.target.dataset.id);
    const detailHTML = getDetailHTML(projectInfo);
    const worksContainer = document.querySelector('.works-container');
    const detailSection = document.createElement('div');
    detailSection.classList.add('popup');
    detailSection.style.position = 'absolute';
    detailSection.style.top = `${window.scrollY}px`;
    detailSection.innerHTML = detailHTML;
    worksContainer.appendChild(detailSection);
    makeNotScrollable();
    const closeButton = document.querySelector('.detail-container button');
    closeButton.addEventListener('click', () => {
      const pop = document.querySelector('.popup');
      const worksContainer = document.querySelector('.works-container');
      worksContainer.removeChild(pop);
      makeScrollable();
    });
  }
});
