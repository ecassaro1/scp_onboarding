$.get(
    "/srv/materials",
    (data,status)=>{
        data.forEach((row)=>{
            $("#list1").append(
                "<li><a href='/material.html?id="+row.id+"'>"+row.id+"</a> - "+row.description+"</li>"
            )
        })
    }
)
