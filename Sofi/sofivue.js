

const app = Vue.createApp({
    data() {
        return {
            projekt: [], 
            sökBokstav: '' 
        };
    },
    
    // Hämta JSON-data 
    created() {
        fetch('sofi.json') 
            .then(response => response.json())
            .then(data => {
                this.projekt = data.projekt; 
            })
            .catch(error => console.error('Error fetching the projects:', error)); 
    },



//Kod för input i sökfältet.
    computed: {
        
        filtreradeProjekt() {
            return this.projekt.filter(projekt =>
                projekt.titel.toLowerCase().startsWith(this.sökBokstav.toLowerCase()) 
            );
        }
    },


//Filtrera projekten A-Ö.
    methods: {
        
        sorteraProjekt() {
            this.projekt.sort((a, b) => {
                return a.titel.localeCompare(b.titel);
            });
        },

//Filtrera projekten Ö-A.
        sorteraProjekÖTillA() {
            this.projekt.sort((b, a) => {
                return a.titel.localeCompare(b.titel);
            });
        }
    }
});

app.mount('#app'); 