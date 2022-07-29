const projectsInfo = [
  {
    id: 1,
    name: 'Capablanca Memorial',
    description: 'Remembering the great Cuban and III World Chess Champion with an unprecedented event, two days of talks about his best chess games.',
    image: './assets/chess.png',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/ChessEvent/',
    linkSource: 'https://github.com/VicPeralta/ChessEvent',
    client: 'MICROVERSE',
    roles: ['Front End Dev', '2022'],
  },
  {
    id: 2,
    name: 'Bookstore CMS',
    description: 'A Bookstore App created using React & Redux that allows you to keep track of your favorites books',
    image: './assets/bookstore.png',
    technologies: ['javascript', 'react', 'redux'],
    linkLive: 'https://vicperalta.github.io/react-bookstore/',
    linkSource: 'https://github.com/VicPeralta/react-bookstore',
    client: 'MICROVERSE',
    roles: ['Front End Dev', '2022'],
  },
  {
    id: 3,
    name: 'Study & Relax',
    description: 'This App gives you a recommendation of JavaScript books to read and also lets you hear some music, so you can concentrate and relax while you are studying',
    image: './assets/study.jpg',
    technologies: ['html', 'webpack', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/Capstone-JavaScript/',
    linkSource: 'https://github.com/VicPeralta/Capstone-JavaScript',
    client: 'MICROVERSE',
    roles: ['Front End Dev', '2022'],
  },
  {
    id: 4,
    name: 'Space-Travelers',
    description: 'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    image: './assets/space.png',
    technologies: ['react', 'redux', 'bootstrap'],
    linkLive: 'https://space-travelers-react.netlify.app/',
    linkSource: 'https://github.com/VicPeralta/space-travelers',
    client: 'MICROVERSE',
    roles: ['Front End Dev', '2022'],
  },
  {
    id: 5,
    name: 'Chess Leaders',
    description: "A web app that lets you check the leaders in all chess games modalities from chess.com. And in case you're wondering, I am not in any of them.",
    image: './assets/chessLeaders.png',
    technologies: ['react', 'redux', 'javascript'],
    linkLive: 'https://vicperalta.github.io/chess-leaders/',
    linkSource: 'https://github.com/VicPeralta/chess-leaders',
    client: 'MICROVERSE',
    roles: ['Front End Dev', '2022'],
  },
  {
    id: 6,
    name: 'BookDev',
    description: 'Need help with the development of a new App? Training, consulting? Look no further and go to this application to book a reliable software developer.',
    image: './assets/bookdev.png',
    technologies: ['Ruby', 'Rails', 'PostgreSql', 'React', 'Redux'],
    linkLive: 'https://book-dev.herokuapp.com',
    linkSource: 'https://github.com/VicPeralta/final-capstone-api',
    client: 'MICROVERSE',
    roles: ['Back End Dev', '2022'],
  },
  {
    id: 7,
    name: 'The Blog App',
    description: 'A blogger app where you can post any idea, share all your experiences and thoughts, and also see the post from your friends.',
    image: './assets/blogger.png',
    technologies: ['Ruby', 'Rails', 'PostgreSql'],
    linkLive: 'https://safe-brook-54426.herokuapp.com/',
    linkSource: 'https://github.com/VicPeralta/blogapp',
    client: 'MICROVERSE',
    roles: ['Back End Dev', '2022'],
  },
  {
    id: 8,
    name: 'Math-Magicians',
    description: 'A SPA that allows you to use a Calculator and gives you Math information',
    image: './assets/math.png',
    technologies: ['html', 'css', 'javascript', 'react'],
    linkLive: 'https://vicperalta.github.io/math-magicians/',
    linkSource: 'https://github.com/VicPeralta/math-magicians',
    client: 'MICROVERSE',
    roles: ['Front End Dev', '2022'],
  },
  {
    id: 9,
    name: 'StarGazers',
    description: 'A fun App that consumes the GitHub API and let you know your stargazers',
    image: './assets/stars.png',
    technologies: ['html', 'css', 'javascript'],
    linkLive: 'https://vicperalta.github.io/starGazers/',
    linkSource: 'https://github.com/VicPeralta/starGazers',
    client: 'MICROVERSE',
    roles: ['Front End Dev', '2022'],
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

loadProjectsInfo();
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
