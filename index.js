/* Conectamos el html con Vue */
const app = new Vue({
    el: '#app',/* ID del DOOM */
    data: { /* Dentro de data se trabajan los datos de Vue */
        titulo: 'Hola mundo con Vue',
        frutas: [
            { nombre: 'Pera', cantidad: 3 },
            { nombre: 'Manzana', cantidad: 6 },
            { nombre: 'Banana', cantidad: 0 },
        ],
        nuevaFruta: '',
        cantidadFruta: '',
        total: 0,
        color: false
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: this.cantidadFruta
            })
            this.nuevaFruta = ''
            this.cantidadFruta = ''

        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }
})




/* fech async await */
const obtenerProvincias = async () => {
    try {
        const res = await fetch('/provincias.json')
        const data = await res.json()

        /* Crea un array con el contenido de recorer los objetos del json */
        const arrayNombres = data.provincias.map(localidad => localidad.nombre)
        console.log(arrayNombres)

        /* Propiedad filtro */
        const arrayNombres2 = data.provincias.filter(localidad => localidad.nombre == 'Chaco')
        console.log(arrayNombres2)

    } catch (error) {
        console.log(error)
    }
}
obtenerProvincias()