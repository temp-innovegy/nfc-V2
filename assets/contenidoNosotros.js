var fnName='cimaAbogados'
var docId="1l4doG1vsYbn8zfRujFGiNc2-X9jp90ww3Qt-PHsLiqk"

function cimaAbogados(data){
    console.log(data)
    data.feed.entry.map(function(linea){return linea.gsx$contenidoparamodificar.$t}).map(function(c,index){$(`#inno-${index}`).text(`${c}`)})  
}

$.ajax({
    url:`https://spreadsheets.google.com/feeds/list/${docId}/3/public/values?alt=json-in-script&callback=${fnName}`,
    dataType:"jsonp",
    jsonpCallback:`${fnName}`
})
