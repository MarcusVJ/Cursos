import api from './api';

class App {
  constructor() {
    this.repositories = [];

    this.formEL = document.getElementById('repo-form');
    this.inputEl = document.querySelector('input[name=repository]');
    this.listEL = document.getElementById('repo-list');

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEL.onsubmit = (event) => this.addRepository(event);
  }

  setLoading(loading = true) {
    if (loading === true) {
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('Carregando'));
      loadingEl.setAttribute('id', 'loading');
      this.formEL.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {
    event.preventDefault();

    const repoInput = this.inputEl.value;

    if (repoInput.length === 0) {
      return;
    }

    this.setLoading();

    try {
      const response = await api.get(`/repos/${repoInput}`);

      const {
        name,
        description,
        html_url,
        owner: { avatar_url },
      } = response.data;

      this.repositories.push({
        name: name,
        description: description,
        avatarUrl: avatar_url,
        htmlUrl: html_url,
      });

      this.inputEl.value = '';

      this.render();
    } catch (error) {
      alert('O repositório não existe!');
    }

    this.setLoading(false);
  }

  render() {
    this.listEL.innerHTML = '';

    this.repositories.forEach((repo) => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', repo.avatarUrl);

      let tittleEL = document.createElement('strong');
      tittleEL.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', repo.htmlUrl);
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEL = document.createElement('li');
      listItemEL.appendChild(imgEl);
      listItemEL.appendChild(tittleEL);
      listItemEL.appendChild(descriptionEl);
      listItemEL.appendChild(linkEl);

      this.listEL.appendChild(listItemEL);
    });
  }
}
new App();
