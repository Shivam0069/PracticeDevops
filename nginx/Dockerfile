FROM nginx:latest

# Copy custom nginx configuration
COPY default.conf /etc/nginx/conf.d/default.conf

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/default.conf.bak 2>/dev/null || true

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]