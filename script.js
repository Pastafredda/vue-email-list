const {createApp} = Vue


createApp({
    data() {
      return {
        email:'',
        email2:'',
        email3:'',
        email4:'',
        email5:'',
        email6:'',
        email7:'',
        email8:'',
        email9:'',
        email10:'',

      }
    },
    mounted(){
       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email2=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email3=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email4=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email5=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email6=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email7=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email8=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email9=risposta.data.response
        });

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then( risposta =>{
            console.log(risposta.data.response);
            this.email10=risposta.data.response
        });
    }
}).mount('#app')
