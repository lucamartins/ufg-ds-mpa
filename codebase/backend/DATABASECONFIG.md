# Database configuration

Este arquivo é um guia rápido de como configurar uma banco de dados local para que seja possível rodar esta api localmente 

1. Instale o postgresql na sua máquina

    **ubuntu**
    ```bash
    $ sudo apt update

    $ sudo apt install postgresql postgresql-contrib

    $ sudo systemctl start postgresql.service
    ```

    **macOs**

    [video tutorial](https://www.youtube.com/watch?v=Z-iM7hUdBSg&t=19s)

    [download link](https://www.postgresql.org/download/macosx/)

2. Acesse a cli do postgres e crie um novo banco de dados chamado 'ufginclui'

    ```bash
    $ sudo -u postgres psql
    ```

    ```
    postgres=# CREATE DATABASE ufginclui WITH ENCODING 'UTF8';
    ```

3. Crie um novo usuário e conceda as permissões necessárias a ele

    ```
    postgres=# CREATE USER user_name WITH ENCRYPTED PASSWORD 'mypassword';
    ```

    ```
    postgres=# GRANT ALL PRIVILEGES ON DATABASE ufginclui TO user_name;
    ```

    ```
    postgres=# ALTER DATABASE ufginclui OWNER TO joaomario;
    ```

    ```
    postgres=# ALTER USER joaomario CREATEDB;
    ```

4. Configure um novo arquivo *.env* apartir do arquivo *.env.example*

5. Crie as tabelas no banco com o comando abaixo

    ```bash
    npm run migrate-init
    ```

6. Por fim rode as seeds para configurações de dados básicos no banco

    ```bash
    npm run seeds
    ```
