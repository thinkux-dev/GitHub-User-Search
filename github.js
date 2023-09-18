class Github{
  constructor(){
    this.client_id = '613980343b3031708ce9';
    this.client_secret = '0c09ad491af591aec83dbb218f4229965035ffc6';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  // Get Users
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return{
      profile,
      repos
    }
  }
}