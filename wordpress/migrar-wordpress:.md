# Migrar wordpress:
Existe varias formas de fazer a migração do wordpress para outros servidores, segue algumas;
[[1]](https://kinsta.com/pt/base-de-conhecimento/busca-e-substituicao-no-wordpress/)[[2]](https://www.bloglite.net/como-migrar-o-wordpress-de-servidor-guia/)

## Exportar

1. Backup de todos os arquivos do site;
2. Backup do Banco de dados;

## Importar WP

- Importe todos os arquivos para o novo servidor;
- Abra o arquivo wp-config.php e altere os dados de DB_NAME, DB_USER, DB_PASSWORD, DB_HOST para o novo servidor de banco de dados;
- Importar o Banco de dados:
    - Antes de importar o banco de dados, é necessário trocar o endereço do site antigo para o novo em todas as tabelas (exe: *https://site-antigo.com/* para *https://site-novo.com/*), se não for trocado ele continua redirecionando para o endereço antigo;
    1. Manual:
        - Abra o arquivo sql (*caso não seja muito grande o arquivo*), em um editor de códigos [VS Code](https://code.visualstudio.com/) por exemplo, e faça uma busca e substituição de todas as url;
        - Depois de alterado, faça o importe normalmente;
    
    2. Via script:
        - Importe o banco de dados;
        - Use o [interconnect/it Search Replace DB PHP Script](https://interconnectit.com/search-and-replace-for-wordpress-databases/), para trocar todos os endereços pelo novo;
        - Baixe o arquivo, descompacte-o e faça upload da pasta, deve ficar no mesmo nível onde está as wp-admin, wp-content e wp-include;
        - Acesse o endereço do site, apontando para o nome da pasta que foi feita o upload;
        - Adicione o endereço antigo para o novo, e clique no botão 'live run' ou 'dry run';
        - Ao final, será exibido a mensagem sucesso;
        - Ao final, remova a pasta por segurança;
    
    3. Com Plugins:
        - Existe alguns plugins que fazem a migração do wp também;
            - All-in-One WP Migration;
            - BackWPup;
            - WordPress Duplicator;
            - WordPress Move;
            - WP Migrate DB;

Essas são algumas de varias opções;