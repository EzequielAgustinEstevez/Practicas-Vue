Vue.component('hijo', {
    template: //html
        `
    <div class="py-5 bg-success">
        <h4>Componente Hijo: {{numero}}</h4>
        <h4>Nombre: {{nombre}}</h4>
        <button class="btn btn-danger" @click="numero++">+</button>
    </div>
    `,
    props: ['numero'], //recibimos informacion
    data() {
        return {
            nombre: 'Ignacio'
        }
    },
    mounted() {/* luego de mostrarse mounted nos permite emitir ($emit) a un evento el dato  del hijo */
        this.$emit('nombreHijo', this.nombre);
    }
})