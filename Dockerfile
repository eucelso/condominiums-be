# Use a imagem base do Node.js com Alpine Linux (versão leve)
FROM node:18-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /opt/app

# Copie os arquivos de configuração para o contêiner
COPY ./package.json ./yarn.lock ./

# Instale as dependências necessárias
RUN npm install

# Copie o restante do código para o contêiner
COPY ./ .

# Construir a aplicação (se necessário)
RUN npm run build

# Exponha a porta que o Strapi usa (por padrão 1337)
EXPOSE 1337
EXPOSE 8180
EXPOSE 3307

# Comando para iniciar a aplicação Strapi
CMD ["npm", "run", "start"]
