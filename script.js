class ProjectInfo {
  constructor() {
    this.subscribers = [];
  }

  fetchData() {
    ProjectInfo.getProjectsFromFile().then((data) => {
      this.projectsInfo = data;
      this.subscribers.forEach((subscriber) => {
        subscriber(data);
      });
    });
  }

  subscribe(callback) {
    this.subscribers.push(callback);
  }

  static async getProjectsFromFile() {
    const response = await fetch('./projects.json');
    return response.json();
  }

  getProjectData(id) {
    for (let i = 0; i < this.projectsInfo.length; i += 1) {
      if (this.projectsInfo[i].id === Number(id)) return this.projectsInfo[i];
    }
    return undefined;
  }
}

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

function loadProjectsInfo(projectsInfo) {
  const worksContainer = document.querySelector('.works-container');
  for (let i = 0; i < projectsInfo.length; i += 1) {
    const htmlProject = getProjectHTML(projectsInfo[i]);
    const workCard = document.createElement('div');
    workCard.classList.add('work-card', `card-${i + 1}`, ((i + 1) % 2 === 0) ? 'even-row' : 'odd-row');
    workCard.innerHTML = htmlProject;
    worksContainer.appendChild(workCard);
  }
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
        <button class="hover">X</button>
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

const projects = new ProjectInfo();
projects.subscribe(loadProjectsInfo);
projects.fetchData();
document.getElementById('resume-btn').addEventListener('click', () => {
  const url = './ResumeVictorPeralta.pdf';
  const a = document.createElement('a');
  a.href = url;
  a.download = url.split('/').pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.work-info .work-button')) {
    const projectInfo = projects.getProjectData(e.target.dataset.id);
    const detailHTML = getDetailHTML(projectInfo);
    const worksContainer = document.querySelector('body');
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
      const worksContainer = document.querySelector('body');
      worksContainer.removeChild(pop);
      makeScrollable();
    });
  }
});
