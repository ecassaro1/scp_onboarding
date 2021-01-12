# scp_onboarding

Take away da série SAP Cloud Platform Developer Onboarding da SAP
https://www.youtube.com/playlist?list=PLkzo92owKnVw3l4fqcLoQalyFi9K4-UdY

---------------------------------------------------------------------------------------------------
    
para atualizar o git a partir do BAS:
    na pane de git fazer o add e o commit
    utilizar o seguinte comando no terminal para efetivar o push:
        git push origin master

---------------------------------------------------------------------------------------------------

MTA3:
    Implementa de forma simples um projeto XSA. Tem o básico do básico.
    db) hanatrial/hdi-shared com uma tabela preenchida com dados
    srv) um nodejs/express lendo dados do DB
    app) um html vanilla dando GET no SRV

    o mta.yaml funciona
    não tem authenticação
    tbm roda local desde que o DB esteja criado e bindado no db e no srv (default-env.json)

---------------------------------------------------------------------------------------------------

CB1: Cadastro Básico (bem básico mesmo)
    faz um CRUD vanilla no esquema do XSA

---------------------------------------------------------------------------------------------------

TinyWorld: versão funcional do case do blog:
    https://blogs.sap.com/2016/03/28/developing-with-xs-advanced-a-tinyworld-tutorial/

    No blog o desenvolvimento é no WebIDE. Mas hj em dia não funciona mais.
    Nesta versão o mesmo app foi criado aqui direto no BAS.

---------------------------------------------------------------------------------------------------
yeomta1: gerado a partir do scafolder de MTA do Hana Academy (Saphanaacademy Mta)
    https://www.youtube.com/watch?v=B3Z25rFrWbQ&list=PLkzo92owKnVw3l4fqcLoQalyFi9K4-UdY&index=12
    
    É o jumpstart para um projeto MTA com todas as boas práticas. Tem alguns exemplos de código.
    Nesta versão não coloquei XSJS e nem autenticação. Mas no template tem se quiser.
---------------------------------------------------------------------------------------------------
