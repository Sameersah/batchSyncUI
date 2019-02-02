$(document).ready(
    function(){
    //alert("Document Ready");
      //   $("#progress").show();
          $("#success").hide();
      //   alert("doc loaded");
        
        $("#submit").click(
        function(){
            alert("submit");
             $(".loader").hide();
             $("#success").show();
        }
        );
        
       /* $("#batchSyncForm").submit(
        function(event){
            $("#progress").show();
        });*/
}
);

function callServlet(){
    
}