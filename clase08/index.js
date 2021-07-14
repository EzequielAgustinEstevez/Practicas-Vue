const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'Hola Mundo',
        contador: 0
    },
    computed: { //Queda en cache
        invertido() {
            //01. Captura el mensaje en un array.
            //02. Lo invierte.
            //03. Lo vuelve a incorporar como cadena de texto.
            return this.mensaje.split('').reverse().join('')
        },
        color() {
            return {
                //Aplica la propiedad si el contador cumple con lo de la derecha
                'bg-succes': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20
            }
        }
    }
})