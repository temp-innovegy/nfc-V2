var fnName='cimaAbogados'
var docId="1nt7Ymy_UMaei-zY7QVDJkY9qxTwjNG_7OeKn7ss7tXc"
//CAMBIA EL INDEX LUEGO DEL DOCID
function cimaAbogados(data){
    console.log(data)
    data.feed.entry.map(function(linea){return linea.gsx$contenidoparamodificar.$t}).map(function(c,index){$(`#inno-${index}`).text(`${c}`)})  
}

$.ajax({
    url:`https://spreadsheets.google.com/feeds/list/${docId}/2/public/values?alt=json-in-script&callback=${fnName}`,
    dataType:"jsonp",
    jsonpCallback:`${fnName}`
})
