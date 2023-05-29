const {createApp} = Vue


createApp({
    data() {
      return {
        email: 10,
        emailContainer:[]
      }
    },
    mounted(){
        for(let i = 0; i < this.email; i++){
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( 
                    risposta => {
                        console.log(risposta.data.response);
                        const nuovaEmail = risposta.data.response;
                        this.emailContainer.push(nuovaEmail);
                    });       
        }
        
    }
}).mount('#app')
