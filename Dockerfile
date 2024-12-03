FROM node:lts-slim
WORKDIR /app
COPY package*.json .
COPY . .
RUN npm install --unsafe-perm
EXPOSE 3000
RUN npm run build
CMD ["npm", "run", "start"]
