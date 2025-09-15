/* För att koppla JSON och filtrera/sortera projekten */

let app = Vue.createApp({
    data() {
        return {
            projects: [], 
            filterLetter: '', 
            dateSortOrder: 'latest' 
        };
    },
    computed: {
        filteredProjects() {
            let sorted = [...this.projects]; 

            if (this.dateSortOrder === 'latest') {
                sorted.sort((a, b) => new Date(b.datum) - new Date(a.datum)); 
            } else if (this.dateSortOrder === 'oldest') {
                sorted.sort((a, b) => new Date(a.datum) - new Date(b.datum));
            }

            
            if (this.filterLetter) {
                sorted = sorted.filter(project => 
                    project.namn.toLowerCase().startsWith(this.filterLetter.toLowerCase()) 
                );
            }

            return sorted;
        }
    },
    methods: {
        fetchProjects() {
            fetch('olivias.json')
                .then(response => response.json())
                .then(data => {
                    this.projects = data; 
                })
                .catch(error => {
                    console.error('Fel vid datahämtning:', error);
                });
        },
        sortByDate(order) {
            this.dateSortOrder = order; 
        }
    },
    mounted() {
        this.fetchProjects(); 
    }
});

app.mount('#appProjekt');