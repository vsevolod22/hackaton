FROM node:20-alpine3.17 AS builder

WORKDIR /app
COPY package.json package-lock.json .eslintrc.cjs vite.config.js index.html ./
COPY public/ public/
COPY src/ src/
RUN npm ci
RUN npm run build

FROM nginx:1.25.2-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
RUN touch /var/run/nginx.pid
RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]