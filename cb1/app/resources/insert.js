let insert = (data)=>{
      $.ajax(
        {
            type : "POST",
            contentType : "application/json",
            url : "/srv/material",
            data : JSON.stringify(
                {
                    id: data.id,
                    description: data.description
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


$("#ins").click(()=>{
        let data = 
            {
                id: $("#id").val(),
                description: $("#description").val()
            }

        insert(data);
    }
)