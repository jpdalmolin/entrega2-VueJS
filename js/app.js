Vue.component("mi-tabla", {
    props: {
        titulos: {
            type: Array,
            required: true
        },
        registros: {
            type: Array,
            required: true
        },
        cssClasses:{
            colorGreen:true,
            letraNegra:true
        },
    
        //TODO: implementar props para cambiar color de letra y fondo de la tabla
    },
    template: `
        <div>
            <table class="table table-striped colorGreen letraNegra">
                <thead >
                    <tr >
                        <th  v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(registro, i) in registros" :key="i">
                        <th>{{ i + 1 }}</th>
                        <th v-for="(row, r) in registro" :key="r">{{row}}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});
var app = new Vue({
    el: "#app",
    data: {
        tabla1: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                ["Jose", "Velez", "San Luis"],
                ["Ramon", "Gomez", "Santa Fe"],
                ["Marcelo", "Godino", "Buenos Aires"],
                ["Ramiro", "Gimenez", "Salta"],
            ]
        },
        tabla2: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                ["Tobias", "Velez", "San Luis"],
                ["Lautaro", "Gomez", "Santa Fe"],
                ["Andres", "Godino", "Buenos Aires"],
                ["Martin", "Gimenez", "Salta"],
            ]
        },
        tabla3: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                ["Matias", "Velez", "San Luis"],
                ["Tomas", "Gomez", "Santa Fe"],
                ["Jose", "Godino", "Buenos Aires"],
                ["Rama", "Gimenez", "Salta"],
            ]
        },
        //TODO: ac?? habr?? que crear 2 objetos nuevos: tabla2 y tabla 3, y luego reutilizar el componente cambiando los valores pasados como par??metro en las props
    },
    template: `
        <div>
            <mi-tabla :titulos="tabla1.titulos" :registros="tabla1.registros" ></mi-tabla>
            <mi-tabla :titulos="tabla2.titulos" :registros="tabla2.registros" ></mi-tabla>
            <mi-tabla :titulos="tabla3.titulos" :registros="tabla3.registros" ></mi-tabla>
            
        </div>
    `
});