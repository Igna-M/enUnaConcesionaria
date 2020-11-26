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
    }
};


//console.log(concesionaria.autos);
//console.log(concesionaria.buscarAuto('JJK116'));
concesionaria.venderAuto('JJK116');
concesionaria.venderAuto('APL123');
//console.log(concesionaria.autos);
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autos0KM());
console.log(concesionaria.listaDeVentas());