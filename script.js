const {createApp} = Vue


createApp({
    data() {
      return {
        email:[]
      }
    },
    mounted(){
        for(let i = 0; i < 10; i++){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( risposta => {
                    console.log(risposta.data.response);
                    const nuovaEmail = risposta.data.response;
                    this.email.push(nuovaEmail)
                });       
        }
        
    }
}).mount('#app')
