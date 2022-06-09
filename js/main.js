new Vue(
    {
        el: '#root',
        data: {
            textHello:"Hello, write here",
            img:"https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png",
            messaggio: "Welcome in Vue Js",
            seen: true,
        },
        methods: {
            miaFunzione : function(){
                console.log(this.textHello);
               return this.textHello;
            }

        },
      
            
    },

);