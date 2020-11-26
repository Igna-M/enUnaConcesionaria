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
    }

};


//console.log(concesionaria.autos);
//console.log(concesionaria.buscarAuto('JJK116'));
concesionaria.venderAuto('JJK116')
//concesionaria.venderAuto('APL123')
//console.log(concesionaria.autos);
console.log(concesionaria.autosParaLaVenta());