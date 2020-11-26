const autos = require("./autos");

const concesionaria = {
    autos : autos,
    buscarAuto : function(dato) {
        return this.autos.find(auto=>auto.patente==dato) || null
    },
    venderAuto : function(dato) {
        autoVendido = this.buscarAuto(dato)
        if (autoVendido != null){
            autoVendido.vendido = true
        }
    },
    autosParaLaVenta : function() {
        let autoOk = this.autos.filter(function(elemento){
            return elemento.vendido == false;
        });
        return autoOk
    },
    autos0KM : function() {
        let autosOk = this.autosParaLaVenta()
        let menosDe100 = autosOk.filter(function(elemento){
            return elemento.km < 100;
        });
        return menosDe100
        },
    listaDeVentas : function() {
        listaDePrecios = [];
        this.autos.forEach(function(elemento){
            if (elemento.vendido == true){
                listaDePrecios.push(elemento.precio);
            }
        });
        return listaDePrecios;
    },
    totalDeVentas : function() {
        let total = 0
        if (this.listaDeVentas().length !== 0){
            total = this.listaDeVentas().reduce(function(acum, num){
                return acum + num
        });
    }
    return total
    },
    puedeComprar : function(auto, persona) {
        let puede = false
            if (persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas) && persona.capacidadDePagoTotal >= auto.precio)
                puede = true;

        return puede
    },
    autosQuePuedeComprar : function(persona) {
        let listaDeAutos = []
        this.autos.forEach(function(elemento){
            if (persona.capacidadDePagoEnCuotas >= (elemento.precio / elemento.cuotas) && persona.capacidadDePagoTotal >= elemento.precio)
            listaDeAutos.push(elemento)
        });
        return listaDeAutos
    }
};

let persona = {
    nombre : "Juan",
    capacidadDePagoEnCuotas : 20000,
    capacidadDePagoTotal : 100000
}

//console.log(concesionaria.autos);
//console.log(concesionaria.buscarAuto('JJK116'));
//concesionaria.venderAuto('JJK116');
//concesionaria.venderAuto('APL123');
//console.log(concesionaria.autos);
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autos0KM());
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
//console.log(concesionaria.puedeComprar(autos[1], persona));
console.log(concesionaria.autosQuePuedeComprar(persona));

// Para que todo sea igual al ejercio original, hay que borrar el tercer auto de autos.js