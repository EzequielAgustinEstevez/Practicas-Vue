Vue.component('padre', {
    template: /* Se pasa  un dato del hijo al padre, a travez de "@" ya que los eventos se manejan con @ seguido de el data + "= $event"
    */ //html
        `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++">+</button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data() {
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})