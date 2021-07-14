Vue.component('saludo', {
    template: //html
        `
    <div class="container text-center"> 
    <h3>{{saludo}}</h3>
    <button class="btn btn-info" @click="contador++" :class="{'btn-danger' : contador >= '10'}">{{contador}}</button>
    </div>
    `,
    data: function () {
        return {
            saludo: 'Componente Saludo',
            contador: 0
        }
    }
})