const autos = require("./autos");

const concesionaria = {
    autos : autos,
    buscarAuto : function(dato) {
        return this.autos.find(auto=>auto.patente==dato) || null
    },
};


//console.log(concesionaria.autos);
console.log(concesionaria.buscarAuto('JJK116'));