FROM node:latest as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build
CMD ["node", "node_modules/.bin/serve", "-s", "build", "-l", "8000"]
