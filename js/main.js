new Vue(
    {
        el: '#root',
        data: {
            textHello:"Hello, write here",
            messaggio: "Welcome in Vue Js",
            seen: true,
        },
        methods: {
            miaFunzione : function(){
                console.log(this.textHello);
               return this.textHello;
            }

        }
            
    },

);