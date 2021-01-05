function getUrlParams() {
    var params = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        params[key] = value;
    });
    return params;
}

//read material from backend
let params = getUrlParams();
$.get(
    "/srv/material?id="+params.id,
    (data,status)=>{
        if (!status==200) {
            alert("error!!!");
        } 
        else {
            $("#id").val(data[0].id);
            $("#description").val(data[0].description);
        }
    }
)

//evento do botão deletar
$("#del").click(
    ()=>{
        $.ajax(
            {
                type : "POST",
                contentType : "application/json",
                url : "/srv/delete",
                data : JSON.stringify(
                    {
                        id: $("#id").val(),
                    }          
                ),
                dataType : 'json',
                success : function(data) {
                    //alert("status bom");
                },
                error : function(e) {
                    alert("Error!")
                    console.log("ERROR: ", e);
                }   
            }
        )        
    }
)

//evento do botão deletar
$("#edit").click(
    ()=>{
        $.ajax(
            {
                type : "POST",
                contentType : "application/json",
                url : "/srv/change",
                data : JSON.stringify(
                    {
                        id: $("#id").val(),
                        description: $("#description").val()
                    }          
                ),
                dataType : 'json',
                success : function(data) {
                    //alert("status bom");
                },
                error : function(e) {
                    alert("Error!")
                    console.log("ERROR: ", e);
                }   
            }
        )        
    }
)
