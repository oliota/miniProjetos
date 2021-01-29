
var nomes = [];
var salarios = [];


$(function() {



$.ajax({
     type : "GET",
     dataType : "jsonp",
  contentType: 'application/json',
  responseType:'application/json',
  xhrFields: {
    withCredentials: false
  },
  headers: {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET',
    'Access-Control-Allow-Headers':'application/json',
  },
     url : "https://www.google.com.br/search?q=teste",
     success: function(data){
console.log(data);
     }
});






      $("#planilha").hide();

var colunas = [];
      $.get(
		"https://pw-mobile.firebaseio.com/item.json",
		//"https://www.google.com.br/search?q=teste",
		function(data) {
            for(var key in data[0]){

                colunas.push({ "mDataProp": key });

                $("#tr_get").append("<th>"+key+"</th>");

            }

             var table = $('#tabelaGet').DataTable();
    table.destroy();

    $('#tabelaGet').dataTable({
        "aaData": data,
        "aoColumns":  colunas ,
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });


            console.log(  colunas);
		}
	);



});







function montarTabela(linhas) {

itens=linhas;

var keys = [];
var tr="";
   for(var key in linhas[0]){
      keys.push({ "mDataProp": key });
      $("#tr").append("<th>"+key+"</th>");

   }




    var table = $('#dataTable').DataTable();
    table.destroy();

    $('#dataTable').dataTable({
        "aaData": linhas,
        "aoColumns":  keys ,
        language: {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });

      $("#planilha").show();


}
