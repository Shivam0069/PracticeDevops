FROM node:22.14.0 AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . ./

RUN npm run build

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]