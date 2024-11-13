FROM node:22.11.0-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start"]
