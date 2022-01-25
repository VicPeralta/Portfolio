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
  for (let i = 0; i < project.technologies.length; i++) {
    technologies += `<li>${project.technologies[i]}</li>`;
  }
  let roles = '';
  for (let i = 0; i < project.roles.length; i++) {
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
  for (let i = 0; i < projectsInfo.length; i++) {
    const htmlProject = getProjectHTML(projectsInfo[i]);
    const workCard = document.createElement('div');
    workCard.classList.add('work-card', `card-${i + 1}`, ((i + 1) % 2 === 0) ? 'even-row' : 'odd-row');
    workCard.innerHTML = htmlProject;
    worksContainer.appendChild(workCard);
  }
}

function getProjectData(id) {
  for (let i = 0; i < projectsInfo.length; i++) {
    if (projectsInfo[i].id === Number(id)) return projectsInfo[i];
  }
  return undefined;
}

function getDetailHTML(project) {
  let technologies = '';
  for (let i = 0; i < project.technologies.length; i++) {
    technologies += `<li>${project.technologies[i]}</li>`;
  }
  let roles = '';
  for (let i = 0; i < project.roles.length; i++) {
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

loadProjectsInfo();

document.addEventListener('click', (e) => {
  if (e.target.matches('.work-button')) {
    const projectInfo = getProjectData(e.target.dataset.id);
    const detailHTML = getDetailHTML(projectInfo);
    const worksContainer = document.querySelector('.works-container');
    const detailSection = document.createElement('div');
    detailSection.style.position = 'absolute';
    detailSection.style.width = '100%';
    detailSection.style.height = '100%';
    detailSection.style.top = `${window.scrollY}px`;

    detailSection.style.backgroundColor = 'white';
    detailSection.innerHTML = detailHTML;
    worksContainer.appendChild(detailSection);
  }
});
