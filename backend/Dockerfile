FROM node:22.14.0 AS nodeapi-build
WORKDIR /usr/src/app
COPY . ./
RUN npm install

FROM node:22.14.0
WORKDIR /usr/src/app/
COPY --from=nodeapi-build /usr/src/app/ ./
RUN ls
EXPOSE 4000
CMD ["npm", "start"]