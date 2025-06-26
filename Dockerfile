FROM node:18

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y python3 make g++ \
    && npm install \
    && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
