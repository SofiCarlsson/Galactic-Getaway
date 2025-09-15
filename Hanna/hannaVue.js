const app = Vue.createApp({
    data() {
        return {
            projects: [],
            searchQuery: '',
            sortOrder: 'asc',
        }
    },

    computed: {
        filteredProjects() {
            filtered = this.projects.filter(project => {
                return project.name.toLowerCase().includes(this.searchQuery.toLowerCase());
            });

            return filtered.sort((a, b) => {
                let comparison = a.name.localeCompare(b.name);
                return this.sortOrder === 'asc' ? comparison : -comparison;
            });
        },

    },

    methods: {
        fetchProjects() {
            fetch('hanna.json') 
                .then(response => response.json())
                .then(data => {
                    this.projects = data;  
                })
                .catch(error => console.error('Error fetching the projects:', error));
        },

        setSortOrder(order) {
            this.sortOrder = order; 
        }
    },

    mounted() {
        this.fetchProjects(); 
    }
});


app.mount('#projectApp');
