$.get(
    "/srv/menu",
    (data,status)=>{
        data.forEach((row)=>{
            $("#list1").append("<li>"+row.description+"</li>")
        })
    }
)

