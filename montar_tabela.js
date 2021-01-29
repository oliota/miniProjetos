
var nomes = [];
var salarios = [];


$(function() {
      $("#planilha").hide();
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
