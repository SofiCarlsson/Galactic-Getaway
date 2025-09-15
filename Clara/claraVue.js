const app = Vue.createApp({});

// Registrera komponenten
app.component('project-app', {
  template: '#projectApp', 
  data() {
    return {
      allProjects: [],
      displayedProjects: [],
      filterValue: ''
    };
  },
  methods: {
    fetchProjects() {
      fetch('clara.json')
        .then(response => response.json())
        .then(data => {
          this.allProjects = data.projects;
          this.displayedProjects = this.allProjects;
        })
        .catch(error => console.error('Error fetching the projects:', error));
    },
    filterProjects() {
      const filter = this.filterValue.toLowerCase();
      this.displayedProjects = this.allProjects.filter(project =>
        project.title.toLowerCase().includes(filter)
      );
      
  },
      sortProjects(order) {
        if (order === 'asc') {
          this.displayedProjects = [...this.allProjects].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (order === 'desc') {
          this.displayedProjects = [...this.allProjects].sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        }
      },
      
      filterProjects() {
        this.displayedProjects = this.allProjects.filter(project =>
          project.title.toLowerCase().includes(this.filterValue.toLowerCase())
        );
      }
  
  },
  mounted() {
    this.fetchProjects();
  }
});

app.mount('#app');
