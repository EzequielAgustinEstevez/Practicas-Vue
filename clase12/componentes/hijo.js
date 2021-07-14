Vue.component('hijo', {
    template: //html
    `
    <div class="py-5 bg-success">
        <h4>Componente Hijo: {{numero}}</h4>
    </div>
    `,
    props:['numero'] //recibimos informacion
})