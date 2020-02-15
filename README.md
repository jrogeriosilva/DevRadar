## Tecnologias Utilizadas

### Frontend - WEB

- **ReactJS**

### Backend

- **NodeJS**
- [Express](https://expressjs.com/pt-br/) - Http Server
- [Axios](https://github.com/axios/axios) - API requests
- [ODM mongoose](https://mongoosejs.com/) - Mongodb object modeling
- [Cors](https://www.npmjs.com/package/cors) - Cross-Origin Resource Sharing

## Configurando Ambiente de Desenvolvimento

#### VARIAVEIS DE AMBIENTE

Na pasta backend Renomeie o **'ENV_EXAMPLE'** para **'.env'** e Insira a URL de Conexão do mongodb no **.env**

```
MONGO_URL: "Sua URL de conexão do mongodb aqui"
```

##### Configurando Backend

```
cd backend
yarn install
```

##### Iniciando Backend

```
node ./src/index.js
```

##### Configurando FrontEnd Web

```
cd web
yarn install
```

##### Iniciando FrontEnd Web

```
cd web
yarn start
```
