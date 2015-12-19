
// Wait for PhoneGap to load
//
document.addEventListener("on", onDeviceReady, false);
//document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap is ready
//
function onDeviceReady() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
}

// Populate the database 
//
function populateDB(tx) {
    //tx.executeSql('DROP TABLE IF EXISTS sucursales');
    tx.executeSql('CREATE TABLE IF NOT EXISTS sucursales ('
                          +'id unique,'
                          +'nombre,'
                          + 'direccion,'
                          +'sector,'
                          +'latitude,'
                          +'longitude,'
                          +'zoom,'
                          +'telefono,'
                          +'horario1,'
                          +'horario2,'
                          + 'horario3)');

    tx.executeSql("INSERT INTO sucursales (id, nombre, direccion, sector, latitude, longitude, zoom, telefono, horario1, horario2, horario3) VALUES"
        +"(1, 'Laboratorio Principal', 'Cdla. Kennedy Vieja, Avenida San Jorge 1001', 'Norte', '-2.173278', '-79.898786', '16', 'Telf: 04-2295684', 'Lunes a <b>Domingo</b> - Atención 24 horas', '', ''),"
        +"(2, 'Sucursal Kennedy Norte', 'Cdla. Kennedy Norte, Edif. Udimef 1.', 'Norte', '-2.1610843', '-79.8995827', '17', 'Telf: 04-2594819 - Ext.: 210', 'Lunes a Viernes: 07:00 - 19:00 horas', 'Sábado: 07:00 - 14:00 horas', ''),"
        +"(3, 'Sucursal Urdesa', 'Cdla. Urdesa Central, Av. Las Monjas y Bálsamos', 'Norte', '-2.170537', '-79.910935', '17', 'Telf: 04-2278564 - Ext.: 152', 'Lunes a Viernes: 07:00 - 18:00 horas', 'Sábado: 07:00 - 13:00 horas', '<b>Domingo</b>: 08:00 - 12:00 horas'),"
        +"(4, 'Sucursal Alborada', 'Cdla. Alborada, C.C. Gran Albocentro.', 'Norte', '-2.1346957', '-79.9029631', '18', 'Telf: 04-2589645 - Ext.: 208', 'Lunes a Viernes: 06:00 - 19:00 horas', 'Sábado: 06:30 - 13:00 horas', ''),"
        +"(5, 'Sucursal Adace', 'Cdla. Adace, Calle Abel Romero Castillo # 11 y Calle C.', 'Norte', '-2.1578377', '-79.8906411', '17', 'Telf: 04-2594598 - Ext.: 208', 'Lunes a Viernes: 08:00 - 17:00 horas', 'Sábado y <b>Domingo</b>: 07:00 - 12:00 horas', ''),"
        +"(6, 'Sucursarl PP Gómez', 'P.P. Gómez, cerca de la Maternidad Sotomayor.', 'Centro', '-2.1971893', '-79.8881973', '17', 'Telf: 04-2594010 - Ext.: 201 | Cel.: 092161482', 'Lunes a Viernes: 07:00 - 17:00 horas', 'Sábado: 07:00 - 12:00 horas', ''),"
        +"(7, 'Sucursal Mendiburo', 'Mendiburo 241 entre Baquerizo Moreno y General Córdova.', 'Centro', '-2.1875674', '-79.8809392', '17', 'Telf: 04-2594010 - Ext.: 209 | Cel.: 099429761', 'Lunes a Viernes: 07:00 - 16:00 horas', '', ''),"
        +"(8, 'Sucursal Noguchi', 'Noguchi 2700 y Cañar esq.', 'Sur', '-2.2141471', '-79.8902738', '17', 'Telf: 04-2594010 - Ext.: 2042', 'Lunes a Viernes: 06:00 - 19:00 horas', 'Sábado: 06:00 - 13:00 horas', ''),"
        +"(9, 'Sucursal Entreríos', 'Cdla. Entreríos, Edif. Lubricorp.', 'Samborondon', '-2.1480549', '-79.8647839', '16', 'Telf: 04-2594010 - Ext.: 202 | Cel.: 0992161450', 'Lunes a Viernes: 06:00 - 18:00 horas', 'Sábado: 07:00 - 12:00 horas', ''),"
        +"(10, 'Sucursal La Joya', 'C.C. La Piazza La Joya.', 'Samborondon', '-2.0494099', '-79.9147385', '15', 'Telf: 04-2594010 - Ext.: 211', 'Lunes a Viernes: 06:00 - 16:00 horas', 'Sábado: 07:00 - 12:00 horas', ''),"
        +"(11, 'Sucursal Centro Durán', 'Atahualpa 204 y Venezuela esq.', 'Duran', '-2.1796686', '-79.8542273', '17', 'Telf: 04-2594010 - Ext.: 207 | Cel.: 0992161670', 'Lunes a Viernes: 07:00 - 18:00 horas', 'Sábado: 07:00 - 12:00 horas', ''),"
        + "(12, 'Sucursal OmniHospital', 'Abel Castillo 212 Torre Medica II Edificio de Especialidades Medicas local 3 (Planta Baja) Omnihospital.', 'Norte', '-2.157182', '-79.891369', '16', 'Telf: 04-5940100 - Ext.: 212 Telf.: 04-2109300 Telf.: 04-2109301', 'Lunes a Viernes: 07:00 - 16:00 horas', '', ''),"
        + "(13, 'LAB-CENTRO ILLINGWORTH', 'Av. del Ejercito 605 e/Primero de Mayo y Quisquis', 'Centro', '-2.1872628', '-79.8937389', '16', 'Telf.:(04)2285443 - Telf.: (04)2280165', 'Lunes a Viernes: 07:00 - 16:00 horas', '', ''),"
        + "(14, 'LABAQ - LABORATORIOS BAQUERIZO S.A.', 'Torre Médica Alcívar Chimborazo 3308 y Cañar', 'Centro', '-2.2147006', '-79.8914364', '16', 'Telf: 04-5940100 - Ext.: 212 Telf.: 04-2109300 Telf.: 04-2109301', 'Lunes a Viernes: 07:00 - 16:00 horas', '', ''),"
        + "(15, 'LABORATORIO FREILE', 'Carchi 1210 y Clemente Ballén', 'Centro', '-2.1915097', '-79.8979289', '16', 'Telf: 04-5940100 - Ext.: 212 Telf.: 04-2109300 Telf.: 04-2109301', 'Lunes a Viernes: 07:00 - 16:00 horas', '', '');"
        );

}
// Transaction error callback
//
function errorCB(err) {
    console.log("Error processing SQL: " + err.code);
}

// Transaction success callback
//
function successCB() {
    //console.clear();
    console.log("DATABASE IS READY!");
    //var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
    //db.transaction(queryDB, errorCB);
}
// Query the database
//
function queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results) {
    var len = results.rows.length;
    console.log("DEMO table: " + len + " rows found.");
    for (var i = 0; i < len; i++) {
        console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
    }
}

//////////////////////////////////////***///////////////////**********************************//////////
var query;
var result = new Array();
function execute(i_action,SQLQUERY) {
    result = new Array();
    query = SQLQUERY;
    DroidDB_openDatabase = window.openDatabase;
    var db = DroidDB_openDatabase("Database", "1.0", "PhoneGap Demo", 200000);

            db.transaction(function (tx) {
                tx.executeSql(query,
                              [],
                              function (tx, results) {

                                  console.log("DEMO table: " + results.rows.length + " rows found.");
                                  //var s = new DroidDB_Result();
                                  //console.log(s.rows.valueOf());
                                  //console.log(results.rows.valueOf());
                                  result = new Array();
                                  for (var i = 0; i < results.rows.length; i++) {
                                      result.push(results.rows.item(i));
                                      //document.getElementById("table").innerHTML += "</br>" + results.rows.item(i).id + " - " + results.rows.item(i).data;
                                  }
                                          
                                  //console.log(result.valueOf());
                                  action(i_action, result);
                                  //return result;
                              },
                              function (tx, error) {
                                  console.log("Error processing SQL: " + error.code);
                              }
                );
            });
                    
       

    //return result;
}
function action(id,lst) {
    if (id == 1) {
        var x = document.getElementById("menu");
        x.innerHTML = "";
        var inner = "";

        var sector = new Array();
        var sectores = new Array();

        for (var i = 0; i < lst.length; i++) {
            if (!(lst[i].sector in sector)) {
                sector[lst[i].sector] = [lst[i].sector];
                sectores.push(lst[i].sector);
            }

        }
        for (var i = 0; i < sectores.length; i++) {
            inner += '<li><a href="#">' + sectores[i]/*lst[i].sector*/ + '</a>' + '<ul>';
            for (var j = 0; j < lst.length; j++) {
                if (lst[j].sector == sectores[i]/*lst[i].sector*/) {//lst[i].sucursal = lst[x].sector) {
                    inner += '<li><a class="menu" href="#" name="' + lst[j].id + '"> - ' + lst[j].nombre + '</a></li>';
                }
            }
            inner += '</ul></li>';
        }
        x.innerHTML = inner;
    }
    else if (id == 2) {
        var x = document.getElementById("mapai");
        x.innerHTML = "";
        var inner = "";
        for (var i = 0; i < lst.length; i++) {

            inner +=  "<div class='locales_block_pos' id='" + lst[i].id + "'>";
            inner +=  "<div class='locales_latitude'>" + lst[i].latitude +  "</div>";
            inner +=  "<div class='locales_longitude'>" + lst[i].longitude + "</div>";
            inner +=  "<div class='locales_zoom'>" + lst[i].zoom + "</div>";
            inner +=  "<div class='detalles'><p>&bull;" + lst[i].direccion + "</p></div>";

            if(lst[i].telefono != "")
            {
                inner += "<div class='detalles'><p>&bull;" + lst[i].telefono + "</p></div>";
            }
			
            if(lst[i].horario1 != "")
            {
                inner += "<div class='horarios'><p>&bull;" + lst[i].horario1 + "</p></div>";
            }
			
            if(lst[i].horario2 != "")
            {
                inner += "<div class='horarios'><p>&bull;" + lst[i].horario2 + "</p></div>";
            }
			
            if(lst[i].horario3 != "")
            {
                inner += "<div class='horarios'><p>&bull;" + lst[i].horario3 + "</p></div>";
            }
			
            inner += "</div>";

        }
        x.innerHTML += inner;
    }
}