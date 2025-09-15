const app = Vue.createApp({
    data() {
        return {
            projects: [],
            filteredProjects: [],
            tags: [],
            selectedTag: '',
            sortOrder: 'asc'
        };
    },
    created() {
        fetch('malin.json')
            .then(response => response.json())
            .then(data => {
                this.projects = data;
                this.filteredProjects = this.projects;
                this.tags = [...new Set(this.projects.flatMap(project => project.tags))];
                this.sortProjects(); 
            });
    },
    methods: {
        filterProjects() {
            if (this.selectedTag) {
                this.filteredProjects = this.projects.filter(project =>
                    project.tags.includes(this.selectedTag)
                );
            } else {
                this.filteredProjects = this.projects;
            }
            this.sortProjects();
        },
        sortProjects() {
            this.filteredProjects.sort((a, b) => {
                if (this.sortOrder === 'asc') {
                    return a.title.localeCompare(b.title);
                } else {
                    return b.title.localeCompare(a.title);
                }
            });
        }
    }
});

app.mount('#malinVue');