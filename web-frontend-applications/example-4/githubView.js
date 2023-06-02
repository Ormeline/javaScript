class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    // Get references to the DOM elements
    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');
    const organizationAvatarEl = document.querySelector('#organization-avatar');

    // Add a click event listener to the submit button
    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      // Call the client's getRepoInfo method with the repo name
      // and retrieve the repo data in the callback function
      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);

        // Set the image source to the organization avatar URL
        organizationAvatarEl.src = repoData.organization.avatar_url;
      });
    });
  }

  display(repoData) {
    // Get references to the DOM elements
    const repoNameEl = document.querySelector('#repo-name');
    const repoDescriptionEl = document.querySelector('#repo-description');

    // Set the content of the repo name and repo description elements
    repoNameEl.textContent = repoData.full_name;
    repoDescriptionEl.textContent = repoData.description;
  }
}

module.exports = GithubView;
