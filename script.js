// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

console.log('Vue OK', Vue)

const app = Vue.createApp({
    data(){
        return {
            message: 'Hello from VueJs',
            image:{
                src: 'https://cdn.sanity.io/images/8edntncj/production/7cb22a8a9885468d96662f6ece61ceb2bc95666d-500x300.png',
                alt: 'VueJs'
            } 
        }
    }
});

app.mount('#root')