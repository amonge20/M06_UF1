 function DataMesAny(){
    // Obté la data actual
    var dataActual = new Date();

    // 1) Avui és dd del mm del aaaa
    var dia = dataActual.getDate();
    var mes = dataActual.getMonth() + 1;
    var any = dataActual.getFullYear();
    document.write("1) Avui és " + dia + " del " + mes + " del " + any + "<br>");

    // 2) Han passat n setmanes de l'any
    var setmanes = Math.ceil((dataActual - new Date(any, 0, 1)) / (7 * 24 * 60 * 60 * 1000));
    document.write("2) Han passat " + setmanes + " setmanes de l'any<br>");

    // 3) El % de dies transcorreguts és nn,nn%
    var diesTranscorreguts = Math.floor((dataActual - new Date(any, 0, 1)) / (24 * 60 * 60 * 1000));
    var percentatgeDiesTranscorreguts = (diesTranscorreguts / 365) * 100;
    document.write("3) El % de dies transcorreguts és " + percentatgeDiesTranscorreguts.toFixed(2) + "%<br>");

    // 4) Queden un nn.mm% de dies a l'any
    var diesRestants = 365 - diesTranscorreguts;
    var percentatgeDiesRestants = (diesRestants / 365) * 100;
    document.write("4) Queden un " + percentatgeDiesRestants.toFixed(2) + "% de dies a l'any<br>");

    // 5) Ara són les hh:mm:ss
    var hora = dataActual.getHours();
    var minut = dataActual.getMinutes();
    var segon = dataActual.getSeconds();
    document.write("5) Ara són les " + hora + ":" + minut + ":" + segon + "<br>");

    // 6) El % del dia que ha passat és nn,nn%
    var horaTotal = hora * 3600 + minut * 60 + segon;
    var percentatgeDiaTranscorregut = (horaTotal / 86400) * 100;
    document.write("6) El % del dia que ha passat és " + percentatgeDiaTranscorregut.toFixed(2) + "%<br>");

    // 7) Queda un % de nn,nn% del dia
    var segonsRestants = 86400 - horaTotal;
    var percentatgeDiaRestant = (segonsRestants / 86400) * 100;
    document.write("7) Queda un " + percentatgeDiaRestant.toFixed(2) + "% del dia<br>");
}