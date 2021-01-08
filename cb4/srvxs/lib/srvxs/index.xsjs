    var conn = $.hdb.getConnection();
    var sql = 'SELECT * FROM "cb4.db::sales"';
    var results = conn.executeQuery(sql);
    conn.close();
    $.response.contentType = "text/json";
    $.response.setBody(results);
    $.response.status = $.net.http.OK;
