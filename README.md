## Rodando (desenvolvimento)

no diretório instale as dependências
```bash
# npm
npm install
# yarn
yarn install
```
inicie o servidor de desenvolvimento
```bash
# npm
npm run dev
# with yarn
yarn dev
```
A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).


## Build (produção)

### Docker Compose (Recomendado)
No diretório rode o docker compose para gerar as imagens e rodar os containers
```bash
docker compose up --build
```
caso seja necessário pode passar o parâmetro `-d` para rodar sem travar o console

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).


### Dockerfile (Recomendado)

No diretório gere a imagem do container
```bash
# docker image build -t <IMAGE_NAME> <DOCKERFILE_DIRECTORY>
docker image build -t <IMAGE_NAME> .
```

Inicie o container
```bash
#  docker run -p <pc_port>:<container_port> <IMAGE_NAME>
docker run -p 3000:3000 <IMAGE_NAME>
```

A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000) ou na porta configurada no comando.

### Next.js

no diretório instale as dependências
```bash
# npm
npm install
# yarn
yarn install
```
gere o build de produção
```bash
# npm
npm run build
# yarn
yarn build
```
inicie o servidor
```bash
# npm
npm start
# yarn
yarn start
```
A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).