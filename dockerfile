FROM node:8

WORKDIR /camphouse

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]